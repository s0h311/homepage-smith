import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='bg-yellow-400 text-yellow-900 py-1.5 px-4 text-center text-sm font-medium border-b border-yellow-500'>
        🚧 This site is under construction. Features are being added daily.
      </div>
      <div className='flex-1 flex flex-col'>
        <Outlet />
      </div>
    </div>
  )
}
