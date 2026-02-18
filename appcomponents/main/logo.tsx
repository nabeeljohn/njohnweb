import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/" className="inline-block" aria-label="Go to homepage">
      <div className="flex items-center gap-4">
        {/* Logo Square with rounded edges */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg w-14 h-14 flex items-center justify-center text-blue-400 font-extrabold text-xl shadow-lg transform transition-transform duration-300 hover:scale-110 border border-blue-400/30">
          NJ
        </div>

        {/* Name - Playful but professional */}
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&display=swap');
          `}</style>
        <h1 className="text-4xl font-bold tracking-wide text-gray-400 hover:text-gray-100 transition-colors" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Nabeel John
        </h1>
      </div>
    </Link>
  );
}