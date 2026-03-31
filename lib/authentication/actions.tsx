'use server';

import argon2 from "argon2";
import crypto from "crypto";
import { redis } from "./redis";
import { cookies } from "next/headers";
import { signUpContact, getContactByEmail } from "./db";

type FormState = {
  message: {
    success: string;
    error: string;
  }
};

export async function handleSignUpContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const newstate: FormState = { message: { success: '', error: '' } };

  const hashedPassword = await argon2.hash(password);

  const isValid = await argon2.verify(hashedPassword, password);
  console.log(isValid);

  if (isValid) {
    newstate.message.success = 'Sign-up successful! You can now log in.';
    await signUpContact(firstName, lastName, email, hashedPassword)
  } else {
    newstate.message.error = 'An error has occurred!';
  }

  await delay(1500);

  return newstate;
}

export async function handleLoginContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "").trim();

  const newstate: FormState = { message: { success: '', error: '' } };

  if (!email || !password) {
    return { message: { success: '', error: 'Email and password are required.' } };
  }

  const contact = await getContactByEmail(email);

  if (!contact) {
    return { message: { success: '', error: 'No contact with this email exists.' } };
  }

  if (!contact.password || typeof contact.password !== 'string') {
    return { message: { success: '', error: 'Authentication error.' } };
  }

  const isValid = await argon2.verify(contact.password, password);

  if (isValid) {
    const sessionId = crypto.randomBytes(32).toString("hex");

    // ✅ Store session in Redis as a JSON string
    await redis.set(
      `session:${sessionId}`,
      JSON.stringify({
        memberId: contact.memberid,
        firstName: contact.first_name,
        lastName: contact.last_name,
      }),
      {
        ex: 60 * 60 * 24 * 7, // 7 days
      }
    );

    // ✅ Use cookies() synchronously (no await)
    const cookieStore = await cookies();
    cookieStore.set({
      name: 'NJohnWebLogin',
      value: sessionId,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    newstate.message.success =
      'Login successful! Welcome back, ' + contact.first_name + '!';
  } else {
    newstate.message.error =
      'Invalid email or password. Please try again.';
  }

  return newstate;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}