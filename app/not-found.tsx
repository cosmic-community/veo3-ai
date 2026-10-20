import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-6 text-center">
      <h2 className="text-2xl font-bold text-white">Page not found</h2>
      <p className="text-zinc-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        Back to home
      </Link>
    </div>
  )
}