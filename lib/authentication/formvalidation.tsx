export function isValidSignUpForm(form: Record<string, string>): boolean {
  // Check that all fields are non-empty strings
  return Object.values(form).every((value) => value.trim() !== "");
}