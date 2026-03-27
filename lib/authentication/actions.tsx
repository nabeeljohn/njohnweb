'use server';

import argon2 from "argon2";
import { signUpContact } from "./db";

type FormState = {
  message: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
};

export async function handleSignUpContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // validation example
  if (!email || !password) {
    return {
      message: "Missing required fields",
      errors: {
        email: !email ? "Email is required" : undefined,
        password: !password ? "Password is required" : undefined,
      },
    };
  }

  const hashedPassword = await argon2.hash(password);
  console.log(hashedPassword);

  // To verify
  const isValid = await argon2.verify(hashedPassword, password);
  console.log(isValid);
  // do your DB / auth logic here

  if (isValid) {
    await signUpContact(firstName, lastName, email, hashedPassword)
  }

  await delay(1500);

  return {
    message: "Success!",
    errors: {},
  };
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}