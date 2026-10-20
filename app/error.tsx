'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-6 text-center">
      <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
      <p className="text-zinc-400">We couldn&apos;t load this page. Please try again.</p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        Try again
      </button>
    </div>
  )
}