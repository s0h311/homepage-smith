import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Github, Linkedin, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/tech')({
  component: TechPage,
})

function TechPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-mono selection:bg-cyan-500/30">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       
       <div className="relative z-10 p-8 min-h-screen flex flex-col">
        <header className="mb-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-bold">~/home</span>
          </Link>
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="h-5 w-5" />
            <span className="text-sm">tech_stack.exe</span>
          </div>
        </header>

        <main className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_2fr] gap-12">
           <section>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                Hello, <br/> World.
              </h1>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                I build scalable systems and interactive experiences. 
                Passionate about clean code, open source, and the future of web.
              </p>
              <div className="flex gap-4">
                 <Button variant="outline" className="gap-2 border-slate-700 hover:bg-slate-800 hover:text-white" asChild>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                 </Button>
                 <Button variant="outline" className="gap-2 border-slate-700 hover:bg-slate-800 hover:text-white" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                 </Button>
              </div>
           </section>

           <section className="space-y-8">
              <h2 className="text-xl font-bold text-cyan-400 border-b border-slate-800 pb-2 mb-6">Recent Projects</h2>
              
              {[1, 2, 3].map(i => (
                <div key={i} className="border border-slate-800 bg-slate-900/50 p-6 rounded-lg hover:border-cyan-500/50 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-cyan-300">Project_Name_{i}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-300">TypeScript</span>
                   </div>
                   <p className="text-slate-400 text-sm mb-4">
                     A brief description of what this project does and the problems it solves. 
                     Focused on performance and user experience.
                   </p>
                   <a href="#" className="text-sm text-cyan-500 hover:underline">View Source &rarr;</a>
                </div>
              ))}
           </section>
        </main>
       </div>
    </div>
  )
}
