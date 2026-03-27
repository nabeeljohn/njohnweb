'use server';

import argon2 from "argon2";
import { signUpContact } from "./db";

type FormState = {
  message:{
    success: string;
    error: string;
  }
};

export async function handleSignUpContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const newstate:FormState = {message:{success:'', error:''}};

  const hashedPassword = await argon2.hash(password);
  
  // To verify
  const isValid = await argon2.verify(hashedPassword, password);
  console.log(isValid);
  
  if (isValid) {
    console.log(hashedPassword);
    newstate.message.success='Sign-up successful! You can now log in.';
    // await signUpContact(firstName, lastName, email, hashedPassword)
  }
  else
  {
    newstate.message.error='an error has occured!';
  }

  await delay(1500);

  return newstate
}


function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}