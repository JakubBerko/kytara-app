import { NavLink, Outlet } from 'react-router-dom'

const links = [
  { to: '/', label: 'Domů' },
  { to: '/metronome', label: 'Metronom' },
  { to: '/songs', label: 'Písně' },
  { to: '/practice', label: 'Cvičení' },
]

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900">
        <nav className="mx-auto flex max-w-5xl items-center gap-1 px-4 py-3">
          <span className="mr-4 font-bold text-amber-400">🎸 Kytara</span>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-1.5 text-sm transition ${
                  isActive
                    ? 'bg-amber-400 text-slate-900'
                    : 'text-slate-300 hover:bg-slate-800'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}