import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, MapPin } from 'lucide-react'

export const Route = createFileRoute('/travel')({
  component: TravelPage,
})

function TravelPage() {
  return (
    <div className="min-h-screen bg-emerald-900 text-emerald-50 p-8 font-sans transition-colors duration-500">
      <header className="mb-12 flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">Home</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Travel</h1>
        </div>
        
        <div className="flex items-center gap-2 opacity-80 pl-1">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Starting point: Hamburg, Germany</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-emerald-800/50">
             <img 
               src={`https://placehold.co/600x800/064e3b/a7f3d0?text=Travel+Photo+${item}`} 
               alt={`Travel ${item}`}
               className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>
        ))}
      </main>
    </div>
  )
}