import Link from "next/link";

export function AboutMeCallToActions() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
                {/* Contact CTA */}
                <div className="p-8 border rounded-lg hover:shadow-lg transition bg-gray-800">
                    <h2 className="text-2xl font-bold mb-3">Let’s Work Together</h2>
                    <p className="text-gray-400 mb-6">Have an idea, a challenge, or something worth exploring? I’m always open to meaningful conversations.
                    </p>
                    <Link
                        href="/contactme"
                        className="inline-block px-5 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Contact Me
                    </Link>
                </div>
                {/* Projects CTA */}
                <div className="p-8 border rounded-lg hover:shadow-lg transition bg-gray-800">
                    <h2 className="text-2xl font-bold mb-3">See What I’m Building</h2>
                    <p className="text-gray-400 mb-6">
                        Explore my latest projects, experiments, and the tools I’m currently working on.
                    </p>
                    <Link
                        href="/tools"
                        className="inline-block px-5 py-3 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                    >
                        View My Work
                    </Link>
                </div>
            </div>
        </>
    )
}