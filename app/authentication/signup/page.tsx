'use client';

import { useState } from "react";
import { isValidSignUpForm } from "@/lib/authentication/formvalidation";
import { handleSignUpContact } from "@/lib/authentication/actions";
import Link from "next/link";

export default function SignUp() {

    const successMessageStyles='text-green-400 text-sm mb-4';
    const errorMessageStyles = 'text-red-400 text-sm mb-4';

    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    const isFormValid = isValidSignUpForm(form);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);

        if (!isFormValid)
            return;

        setSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        // Convert form object to FormData
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== undefined) formData.append(key, value as string);
        });

        try {
            const result = await handleSignUpContact({ message:{success:'', error:''} }, formData);

            if (result?.message?.success) {
                setForm({
                    firstName:'',
                    lastName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
                });

                setSuccessMessage(result.message.success);
            } else if (result?.message?.error) {
                setErrorMessage(result.message.error);
            }
        } catch (error) {
            console.error('Sign-up failed:', error);
            setErrorMessage('Unable to complete sign-up. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="h-full flex items-center justify-center bg-gray-700 text-gray-100 pt-12 pb-12 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-xl">

                <h2 className="text-2xl font-semibold mb-6 text-center">
                    Sign Up
                </h2>

                {/* Success message */}
                {successMessage && (
                    <p className={successMessageStyles}>{successMessage}</p>
                )}

                {/* Error message */}
                {errorMessage && (
                    <p className={errorMessageStyles}>{errorMessage}</p>
                )}                

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* First Name */}
                    <div>
                        <label className="block text-sm mb-1">First Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-sm mb-1">Last Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Doe"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1">Email address</label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
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
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={!isFormValid || submitting} // disabled when form is invalid
                        className="w-full py-2 rounded-md font-medium transition-colors bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-500"
                    >
                        {submitting ? 'Sending Request...' : 'Sign Up'}
                    </button>
                </form>

                {/* Footer Links */}
                <div className="mt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
                    <Link href="/authentication/signin" className="hover:text-gray-200">
                        Already have an account? Sign in
                    </Link>
                </div>

                {/* Optional Tip */}
                <div className="mt-6 flex items-start space-x-2 bg-gray-700/50 p-3 rounded-md text-gray-300 text-sm">
                    <svg
                        className="w-4 h-4 mt-[2px] flex-shrink-0 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-9-4a1 1 0 112 0v1a1 1 0 11-2 0V6zm1 3a1 1 0 00-.993.883L9 10v4a1 1 0 001.993.117L11 14v-4a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p>
                        Signing up gives you access to all productivity tools and allows your work to be saved securely.
                    </p>
                </div>

            </div>
        </div>
    );
}