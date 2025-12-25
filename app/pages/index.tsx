import { createFileRoute, Link } from '@tanstack/react-router'
import { Plane, Music, Brain, Code, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [activeSection, setActiveSection] = useState('travel')

  const sections = [
    {
      title: 'Travel',
      id: 'travel',
      href: '/travel',
      icon: Plane,
      color: 'bg-emerald-950', // Darker for more premium feel
      textColor: 'text-emerald-50',
      accentColor: 'text-emerald-400',
      description: 'Wanderlust & visual diaries',
      hoverColor: 'hover:bg-emerald-900',
      pattern: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 60%)',
    },
    {
      title: 'Music',
      id: 'music',
      href: '/music',
      icon: Music,
      color: 'bg-indigo-950',
      textColor: 'text-indigo-50',
      accentColor: 'text-indigo-400',
      description: 'Soundscapes & rhythms',
      hoverColor: 'hover:bg-indigo-900',
      pattern: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)',
    },
    {
      title: 'Thoughts',
      id: 'thoughts',
      href: '/thoughts',
      icon: Brain,
      color: 'bg-stone-950',
      textColor: 'text-stone-50',
      accentColor: 'text-stone-400',
      description: 'Minimalist blog & musings',
      hoverColor: 'hover:bg-stone-900',
      pattern: 'radial-gradient(circle at 20% 80%, rgba(168, 162, 158, 0.15) 0%, transparent 60%)',
    },
    {
      title: 'Tech',
      id: 'tech',
      href: '/tech',
      icon: Code,
      color: 'bg-slate-950',
      textColor: 'text-slate-50',
      accentColor: 'text-slate-400',
      description: 'Projects & professional portfolio',
      hoverColor: 'hover:bg-slate-900',
      pattern: 'radial-gradient(circle at 50% 0%, rgba(148, 163, 184, 0.15) 0%, transparent 60%)',
    },
  ]

  useEffect(() => {
    // Only run on client side and if IntersectionObserver is available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, []) // Empty dependency array is fine here as sections is constant within scope (or we can move it out)

  return (
    <div className='fixed inset-0 z-40 bg-black w-full h-full'>
      {/* Global Grain Overlay */}
      <div
        className='pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Under Construction Hint */}
      <div className='fixed top-0 left-0 right-0 z-[60] py-2 px-4 text-center'>
        <div className='inline-block bg-yellow-500/90 text-yellow-950 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-lg border border-yellow-400/50'>
          🚧 WORK IN PROGRESS
        </div>
      </div>

      {/* Mobile Navigation Dots */}
      <div className='fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 md:hidden'>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => {
              e.preventDefault()
              document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
            className={`rounded-full transition-all duration-500 border border-white/30 backdrop-blur-sm
                        ${activeSection === section.id ? 'w-3 h-3 bg-white scale-110' : 'w-2 h-2 bg-transparent scale-100'}
                    `}
            aria-label={`Scroll to ${section.title}`}
          />
        ))}
      </div>

      {/* Scroll Container */}
      <div className='h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth md:overflow-hidden md:snap-none'>
        <div className='contents md:grid md:grid-cols-2 md:h-full'>
          {sections.map((section, index) => {
            const isActive = activeSection === section.id

            return (
              <Link
                key={section.title}
                to={section.href}
                id={section.id}
                className={`
                    relative group flex flex-col items-center justify-center 
                    h-full min-h-[100dvh] w-full snap-start snap-always
                    md:h-full md:min-h-0 md:snap-align-none
                    ${section.color} ${section.textColor} 
                    transition-colors duration-700 ease-in-out
                    overflow-hidden
                    `}
              >
                {/* Background Texture/Effect */}
                <div
                  className='absolute inset-0 pointer-events-none opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000'
                  style={{ background: section.pattern }}
                />

                {/* Mobile Active Gradient Pulse */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : ''} md:hidden`}
                />

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${section.hoverColor} hidden md:block`}
                />

                {/* Giant Background Icon for Mobile - Animated based on Active State */}
                <div
                  className={`absolute -right-24 -bottom-24 md:hidden pointer-events-none transition-all duration-[1.5s] ease-out will-change-transform
                        ${isActive ? 'opacity-10 rotate-12 scale-110 translate-y-0' : 'opacity-0 rotate-45 scale-90 translate-y-10'}
                    `}
                >
                  <section.icon
                    className='w-96 h-96 opacity-10'
                    strokeWidth={0.5}
                  />
                </div>

                {/* Content */}
                <div className='relative z-10 flex flex-col items-center gap-4 p-8 pt-24 pb-12 text-center w-full max-w-md h-full justify-center md:justify-center md:p-8'>
                  {/* Icon Container with Glow */}
                  <div
                    className={`relative mb-2 transition-all duration-1000 delay-100 will-change-transform
                            ${isActive ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-75'}
                            md:opacity-80 md:translate-y-0 md:scale-100
                        `}
                  >
                    <div
                      className={`absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse md:hidden`}
                    />
                    <section.icon
                      className={`w-16 h-16 md:w-20 md:h-20 stroke-[1.5px] relative z-10 ${section.accentColor} md:text-inherit drop-shadow-lg`}
                    />
                  </div>

                  {/* Title */}
                  <h2
                    className={`
                            text-6xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] 
                            transition-all duration-1000 delay-200 will-change-transform
                            ${isActive ? 'translate-y-0 opacity-100 skew-y-0' : 'translate-y-16 opacity-0 skew-y-3'}
                            md:translate-y-0 md:opacity-100 md:skew-y-0 md:drop-shadow-none
                        `}
                  >
                    <span className='block drop-shadow-2xl md:drop-shadow-none'>{section.title}</span>
                  </h2>

                  {/* Description - Mobile: Visible when active */}
                  <div
                    className={`
                            mt-4 transition-all duration-1000 delay-300
                            ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                            md:transform-none md:transition-all md:duration-500 md:opacity-0 md:group-hover:opacity-100 md:-translate-y-4 md:group-hover:translate-y-0
                        `}
                  >
                    <div className='h-px w-12 bg-white/30 mx-auto mb-4 md:hidden' />
                    <p className='text-lg md:text-xl font-light tracking-wide opacity-90 max-w-[280px] mx-auto text-balance shadow-black drop-shadow-md md:drop-shadow-none'>
                      {section.description}
                    </p>
                  </div>

                  {/* Mobile Call to Action / Arrow */}
                  <div
                    className={`absolute bottom-8 left-0 right-0 flex justify-center md:hidden transition-all duration-1000 delay-500 ${isActive ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  >
                    {index < sections.length - 1 ? (
                      <div className='flex flex-col items-center gap-2 animate-bounce'>
                        <span className='text-[10px] uppercase tracking-[0.2em] font-light opacity-80'>Scroll</span>
                        <ChevronDown
                          className='w-6 h-6'
                          strokeWidth={1}
                        />
                      </div>
                    ) : (
                      <span className='text-xs uppercase tracking-[0.3em] opacity-50 font-medium py-2 border-b border-transparent hover:border-white/50 transition-colors'>
                        Start Exploring
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
