import Link from "next/link";
import { TypingAnimation } from "../ui/typing-animation";

export default function Navbar() {
  return (
    <nav className="flex w-full max-w-7xl mx-auto justify-between items-center p-4  z-10">
      <Link href="/" className="text-xl font-bold">
        <TypingAnimation showCursor={false}>Noctra</TypingAnimation>
      </Link>
      <div className="flex gap-4 bg-gradient-to-r from-green-500 to-emerald-600 p-2 px-5 rounded-full">
        <Link href="/explore" className="flex items-center gap-2">
          <p className="text-white font-semibold text-lg">explore</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
