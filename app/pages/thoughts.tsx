import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/thoughts')({
  component: ThoughtsPage,
})

function ThoughtsPage() {
  const posts = [
      {
          id: 1,
          date: 'December 24, 2025',
          title: 'Brief Answers to Big Questions',
          excerpt: 'Reading Hawking reminds me of how small we are, yet how significant our curiosity is. A reflection on the future of humanity and AI.'
      },
      {
          id: 2,
          date: 'November 15, 2025',
          title: 'Homo Deus: The Future of Tomorrow',
          excerpt: 'Harari paints a provocative picture of what comes next. Are we really upgrading ourselves into gods, or just better data processors?'
      },
      {
          id: 3,
          date: 'October 01, 2025',
          title: 'Sapiens: A Brief History',
          excerpt: 'Looking back at how shared myths enabled human cooperation on a global scale. It changes how I view modern software communities.'
      }
  ]

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
        {posts.map((post) => (
           <article key={post.id} className="group cursor-pointer">
              <span className="text-xs font-sans text-stone-500 uppercase tracking-widest">{post.date}</span>
              <h2 className="text-3xl font-medium mt-2 mb-4 group-hover:underline decoration-stone-400 decoration-1 underline-offset-4">
                {post.title}
              </h2>
              <p className="text-stone-600 leading-relaxed font-sans">
                {post.excerpt}
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