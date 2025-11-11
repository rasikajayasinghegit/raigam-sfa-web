import { sidebarItems } from '@/utils/sidebar'
import { NavLink, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <aside className="border-r p-4">
        {sidebarItems.map((g) => (
          <div key={g.id} className="mb-6">
            <div className="text-xs uppercase text-gray-500 mb-2">{g.label}</div>
            <nav className="space-y-1">
              {g.items.map((it) => (
                <div key={it.title}>
                  {it.subItems ? (
                    <details>
                      <summary className="cursor-pointer py-1 font-medium">{it.title}</summary>
                      <div className="ml-3 space-y-1">
                        {it.subItems.map((s) => (
                          <NavLink
                            key={s.title}
                            to={s.url!}
                            className={({ isActive }) =>
                              `block px-2 py-1 rounded ${
                                isActive ? 'bg-gray-200' : 'hover:bg-gray-100'
                              }`
                            }
                          >
                            {s.title}
                          </NavLink>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <NavLink
                      to={it.url!}
                      className={({ isActive }) =>
                        `block px-2 py-1 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
                      }
                    >
                      {it.title}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>
          </div>
        ))}
      </aside>
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
