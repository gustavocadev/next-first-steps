import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <span className="text-7xl">Home Page</span>

      <Link href="/about">About Page</Link>
    </main>
  );
}
