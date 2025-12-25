import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center p-6'>
      <div className='max-w-2xl space-y-4'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>Something exciting is brewing</h1>
        <p className='text-xl text-muted-foreground'>
          Welcome to my new home on the web. I'm currently building this site to share my thoughts, music, tech, and
          travel experiences.
        </p>
        <div className='pt-8 flex flex-wrap justify-center gap-4'>
          <div className='px-4 py-2 bg-muted rounded-full text-sm font-medium'>🚀 Building in public</div>
          <div className='px-4 py-2 bg-muted rounded-full text-sm font-medium'>🎹 Music coming soon</div>
          <div className='px-4 py-2 bg-muted rounded-full text-sm font-medium'>📸 Travel logs in progress</div>
        </div>
      </div>
    </div>
  )
}
