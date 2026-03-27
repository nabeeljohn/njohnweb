import { useState, useEffect, useRef } from "react";
import { handleSignUpContact } from "@/lib/authentication/actions";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation
  type Form = {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  };

  function isFormValid(form: Form, isLogin: boolean) {
    const { email, password, confirmPassword, firstName, lastName } = form;
    if (!email || !password) return false;

    if (!isLogin) {
      if (!firstName || !lastName) return false;
      if (!confirmPassword) return false;
      if (password !== confirmPassword) return false;
    }
    return true;
  }

  const isValid = isFormValid(form, isLogin);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitting(true);
    setSuccessMessage("");

    try {
      // Fake delay to simulate server request
      await new Promise((res) => setTimeout(res, 1000));

      // Convert form object to FormData
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined) formData.append(key, value as string);
      });

      // Call your action
      const result = await handleSignUpContact(
        { message:{success:'', error:''}},
        formData
      );

      if (result?.message?.success) {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setSuccessMessage(result.message.success);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="h-full flex bg-gray-800 text-gray-100">
        {/* Open modal button */}
        <div className="inline-block bg-gray-800 p-1 rounded-md">
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-md font-semibold shadow transition transform-gpu hover:scale-102 hover:-translate-y-0.5"
          >
            Login
          </button>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50">
            <div
              ref={modalRef}
              className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md relative transform transition-all duration-300 scale-95 animate-modal-in"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSuccessMessage(""); // <-- clear success message on close
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                ✕
              </button>

              {/* Toggle login/signup */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => {
                    setIsLogin(true);
                    setSuccessMessage(""); // clear success message when switching
                  }}
                  className={`px-4 py-2 rounded-l-xl ${isLogin ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setIsLogin(false);
                    setSuccessMessage(""); // clear success message when switching
                  }}
                  className={`px-4 py-2 rounded-r-xl ${!isLogin ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                  Sign Up
                </button>
              </div>

              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? "Login" : "Sign Up"}
              </h2>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {!isLogin && (
                  <>

                    <div className="text-gray-400 text-sm mb-4">
                      All fields are required.<br />
                      Your password is securely stored using one-way encryption.
                    </div>

                    <div className="flex gap-4">
                      <div className="w-1/2">
                        <label className="block text-sm mb-1">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                          placeholder="First name"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-sm mb-1">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                          placeholder="Last name"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Email */}
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                {/* Confirm password */}
                {!isLogin && (
                  <div>
                    <label className="block text-sm mb-1">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                )}

                {/* Password mismatch error (Sign Up only) */}
                {!isLogin && form.confirmPassword && form.password !== form.confirmPassword && (
                  <p className="text-red-400 text-sm mb-4">Passwords do not match</p>
                )}

                {/* Success message */}
                {successMessage && (
                  <p className="text-green-400 text-sm mb-4">{successMessage}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition disabled:bg-gray-500 flex items-center justify-center gap-2"
                  disabled={!isValid || submitting}
                >
                  {submitting && (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  {submitting
                    ? "Sending Request..."
                    : isLogin
                      ? "Login"
                      : "Create Account"}
                </button>
              </form>

              {/* Footer toggle */}
              <p className="mt-6 text-sm text-center text-gray-400">
                {isLogin ? "New user?" : "Already have an account?"}{" "}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setSuccessMessage(""); // <-- clear success message on toggle
                  }}
                  className="text-blue-400 hover:underline"
                >
                  {isLogin ? "Sign up" : "Login"}
                </button>
              </p>

              {/* Login-specific reset password */}
              {isLogin && (
                <div className="text-center mb-4">
                  <button
                    type="button"
                    className="text-blue-400 hover:underline text-sm"
                    onClick={() => alert("Reset password flow placeholder")}
                  >
                    Forgot your password?
                  </button>
                </div>
              )}

              {/* SSO info */}
              <div className="mt-4 p-3 bg-gray-700/80 rounded-md text-sm text-gray-300 border border-gray-600 text-center">
                Single Sign-On (SSO) via Okta and other major authentication
                providers will be implemented soon.
              </div>
            </div>
          </div>
        )}

        {/* Modal animation */}
        <style>
          {`
          @keyframes modalIn {
            0% { opacity: 0; transform: scale(0.95) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-modal-in { animation: modalIn 0.25s ease-out forwards; }
        `}
        </style>
      </div>
    </>
  );
}