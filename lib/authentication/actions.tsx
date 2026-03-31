'use server';

import argon2 from "argon2";
import crypto from "crypto";
import { redis, User } from "./redis";
import { cookies } from "next/headers";
import { signUpContact, getContactByEmail } from "./db";
import { redirect } from "next/navigation";
import { SESSION_COOKIE_NAME } from "../globals/constants";

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

  if (!email || !password || !firstName || !lastName) {
    newstate.message.error = 'All fields are required for sign-up.';
    return newstate;
  }

  const hashedPassword = await argon2.hash(password);
  const isValid = await argon2.verify(hashedPassword, password);

  if (!isValid) {
    newstate.message.error = 'Invalid Password. Please enter a valid password.';
    return newstate;
  }

  try {
    await signUpContact(firstName, lastName, email, hashedPassword);
    newstate.message.success = 'Sign-up successful! You can now log in.';
  } catch (error: any) {
    console.error("Error signing up contact:", error);

    if (
      error?.code === '23505' &&
      (error?.constraint?.includes('email') || error?.detail?.includes('email_address') || error?.message?.includes('email_address'))
    ) {
      newstate.message.error = 'An account with that email already exists.';
    } else {
      newstate.message.error = 'An error has occurred during sign-up. Please try again.';
    }

    return newstate;
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
      name: SESSION_COOKIE_NAME,
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

export async function handleGetCurrentUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionId) return null;

  const sessionData = await redis.get(`session:${sessionId}`);
  if (!sessionData) return null;

  return sessionData as User;
}

export async function handleLogoutContact() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  cookieStore.delete(SESSION_COOKIE_NAME);

  //clear session from redis
  if (sessionId) {
    await redis.del(`session:${sessionId}`);
  }

  redirect('/'); // Redirect to homepage after logout
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}