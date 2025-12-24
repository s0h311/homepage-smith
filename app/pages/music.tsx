import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, PlayCircle } from 'lucide-react'

export const Route = createFileRoute('/music')({
  component: MusicPage,
})

function MusicPage() {
  return (
    <div className="min-h-screen bg-indigo-950 text-indigo-50 p-8 font-sans transition-colors duration-500">
       <header className="mb-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-6 w-6" />
          <span className="text-xl font-bold tracking-tight">Home</span>
        </Link>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Music</h1>
      </header>

      <main className="max-w-6xl mx-auto space-y-12">
        {/* Featured Section */}
        <section className="relative overflow-hidden rounded-3xl bg-indigo-900/50 p-8 md:p-12">
           <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-square bg-indigo-800 rounded-2xl shadow-2xl overflow-hidden relative group">
                  <img src="https://placehold.co/400x400/312e81/e0e7ff?text=Album+Art" alt="Album" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <PlayCircle className="w-16 h-16 text-white" />
                  </div>
              </div>
              <div className="flex-1 space-y-6">
                 <h2 className="text-3xl md:text-5xl font-bold">Latest Vibes</h2>
                 <p className="text-indigo-200 text-lg max-w-xl">
                   Exploring soundscapes and rhythms. A collection of what I'm listening to and creating.
                 </p>
                 <div className="flex gap-4">
                    <button className="px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold transition-colors">Play Now</button>
                    <button className="px-6 py-3 border border-indigo-400 hover:bg-indigo-900/50 rounded-full font-bold transition-colors">Library</button>
                 </div>
              </div>
           </div>
        </section>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-indigo-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={`https://placehold.co/300x300/312e81/818cf8?text=Track+${item}`} alt={`Track ${item}`} className="w-full h-full object-cover" />
              </div>
           ))}
        </div>
      </main>
    </div>
  )
}
