import { createFileRoute, Link } from '@tanstack/react-router'
import { authClient } from '@/libs/Auth/authClient'
import { Plane, Music, Brain, Code, User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const { data: session } = authClient.useSession()

  const sections = [
    {
      title: 'Travel',
      href: '/travel',
      icon: Plane,
      color: 'bg-emerald-900',
      textColor: 'text-emerald-50',
      description: 'Wanderlust & visual diaries',
      hoverColor: 'hover:bg-emerald-800'
    },
    {
      title: 'Music',
      href: '/music',
      icon: Music,
      color: 'bg-indigo-950',
      textColor: 'text-indigo-50',
      description: 'Soundscapes & rhythms',
      hoverColor: 'hover:bg-indigo-900'
    },
    {
      title: 'Thoughts',
      href: '/thoughts',
      icon: Brain,
      color: 'bg-stone-100', // Slightly darker than white for contrast
      textColor: 'text-stone-900',
      description: 'Minimalist blog & musings',
      hoverColor: 'hover:bg-stone-200'
    },
    {
      title: 'Tech',
      href: '/tech',
      icon: Code,
      color: 'bg-slate-950',
      textColor: 'text-slate-50',
      description: 'Projects & professional portfolio',
      hoverColor: 'hover:bg-slate-900'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col md:h-screen">
      {/* Auth / Profile Corner */}
      <div className="absolute top-4 right-4 z-50">
        {session ? (
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20 shadow-lg">
                <Link to="/dashboard" className="flex items-center gap-2 px-3 text-sm font-medium hover:text-primary transition-colors">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">{session.user.name}</span>
                </Link>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full hover:bg-white/20"
                    onClick={() => authClient.signOut()}
                >
                    <LogOut className="w-4 h-4" />
                </Button>
            </div>
        ) : (
            <Link to="/login">
                <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20">
                    Login
                </Button>
            </Link>
        )}
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 h-full">
        {sections.map((section) => (
          <Link 
            key={section.title} 
            to={section.href}
            className={`
              relative group flex flex-col items-center justify-center p-8 
              ${section.color} ${section.textColor} 
              transition-all duration-500 ease-in-out
              overflow-hidden
            `}
          >
            {/* Background Texture/Effect on Hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${section.hoverColor}`} />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-4 transform transition-transform duration-500 group-hover:scale-110">
               <section.icon className="w-16 h-16 md:w-24 md:h-24 stroke-1 opacity-80" />
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{section.title}</h2>
               <p className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0 text-center max-w-xs">
                 {section.description}
               </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}