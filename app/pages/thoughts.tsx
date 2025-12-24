import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/thoughts')({
  component: ThoughtsPage,
})

function ThoughtsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-8 font-serif transition-colors duration-500">
       <header className="mb-16 flex items-center justify-between border-b border-stone-200 pb-6">
        <Link to="/" className="flex items-center gap-2 hover:opacity-60 transition-opacity">
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg font-medium italic">Back to Home</span>
        </Link>
        <h1 className="text-3xl font-light tracking-wide italic">Thoughts & Notes</h1>
      </header>

      <main className="max-w-2xl mx-auto space-y-16">
        {[1, 2, 3].map((post) => (
           <article key={post} className="group cursor-pointer">
              <span className="text-xs font-sans text-stone-500 uppercase tracking-widest">December {24 - post}, 2025</span>
              <h2 className="text-3xl font-medium mt-2 mb-4 group-hover:underline decoration-stone-400 decoration-1 underline-offset-4">
                The Art of Minimalism in Code
              </h2>
              <p className="text-stone-600 leading-relaxed font-sans">
                Reflecting on how simplification leads to better maintainability and clarity. 
                Sometimes less really is more when it comes to software architecture...
              </p>
              <div className="mt-4 flex items-center text-stone-400 text-sm font-sans gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read more</span>
                <span>&rarr;</span>
              </div>
           </article>
        ))}
      </main>
    </div>
  )
}
