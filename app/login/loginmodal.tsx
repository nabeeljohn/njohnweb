import { useState, useEffect, useRef } from "react";

export default function AuthModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    // ✅ Properly typed ref
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen]);

    // Close on click outside
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(e.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    return (
        <div className="h-full flex bg-gray-800 text-gray-100">
            {/* Default View */}
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
                <div
                    onClick={handleOutsideClick}
                    className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                >
                    <div
                        ref={modalRef}
                        className="bg-gray-800 p-8 rounded-xl shadow-xl w-full max-w-md relative transform transition-all duration-300 scale-95 animate-modal-in"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>

                        {/* Toggle */}
                        <div className="flex justify-center mb-6">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`px-4 py-2 rounded-l-xl ${isLogin
                                    ? "bg-blue-600"
                                    : "bg-gray-700 hover:bg-gray-600"
                                    }`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`px-4 py-2 rounded-r-xl ${!isLogin
                                    ? "bg-blue-600"
                                    : "bg-gray-700 hover:bg-gray-600"
                                    }`}
                            >
                                Sign Up
                            </button>
                        </div>

                        <h2 className="text-2xl font-bold mb-6 text-center">
                            {isLogin ? "Login" : "Sign Up"}
                        </h2>

                        <form className="space-y-6">
                            {!isLogin && (
                                <>
                                    {/* First + Last Name */}
                                    <div className="flex gap-4">
                                        <div className="w-1/2">
                                            <label className="block text-sm mb-1">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                                                placeholder="First name"
                                            />
                                        </div>

                                        <div className="w-1/2">
                                            <label className="block text-sm mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                                                placeholder="Last name"
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
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm mb-1">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>

                            {/* Confirm Password (Sign Up only) */}
                            {!isLogin && (
                                <div>
                                    <label className="block text-sm mb-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
                                        placeholder="Confirm your password"
                                    />
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold transition"
                            >
                                {isLogin ? "Login" : "Create Account"}
                            </button>
                        </form>

                        {/* Footer toggle */}
                        <p className="mt-6 text-sm text-center text-gray-400">
                            {isLogin ? "New user?" : "Already have an account?"}{" "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-400 hover:underline"
                            >
                                {isLogin ? "Sign up" : "Login"}
                            </button>
                        </p>

                        {/* SSO Info Tip */}
                        <div className="mt-4 p-3 bg-gray-700/80 rounded-md text-sm text-gray-300 border border-gray-600 text-center">
                            Single Sign-On (SSO) via Okta and other major authentication providers
                            will be implemented soon.
                        </div>
                    </div>
                </div>
            )}

            {/* Animation styles */}
            <style>
                {`
          @keyframes modalIn {
            0% {
              opacity: 0;
              transform: scale(0.95) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          .animate-modal-in {
            animation: modalIn 0.25s ease-out forwards;
          }
        `}
            </style>
        </div>
    );
}