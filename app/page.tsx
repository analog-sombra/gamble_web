import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <h1>Working :)</h1>
      <div className="flex flex-col">
        <Link href="/login" className="text-indigo-700">
          To login
        </Link>
        <Link href="/register" className="text-indigo-700">
          To register
        </Link>
        <Link href="/dashboard/home" className="text-indigo-700">
          To dashboard
        </Link>
      </div>
    </main>
  );
}
