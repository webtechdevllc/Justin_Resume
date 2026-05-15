import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-slate-50 px-6 py-16 text-center">
      <p className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-900">
        404
      </p>
      <h1 className="mt-6 font-display text-4xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        That page does not exist. Head back to the resume.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Back to resume
      </Link>
    </div>
  )
}
