'use server';

type FormState = {
  message: string;
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
};

export async function handleSignUpContact(prevState: FormState, formData: FormData): Promise<FormState>
{
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

  // do your DB / auth logic here

  return {
    message: "Success!",
    errors: {},
  };
}