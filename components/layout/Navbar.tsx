import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b">
      <Link href="/" className="text-xl font-bold">MoodQuest</Link>
      <div className="flex gap-4">
        <Link href="/explore">Explore</Link>
      </div>
    </nav>
  );
}
