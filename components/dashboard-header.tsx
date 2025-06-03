import Link from "next/link"

export const DashboardHeader = () => {
  const navItems = [
    { name: "Dashboard", href: "/" },
    { name: "Wardrobe", href: "/wardrobe" },
    { name: "Looks", href: "/looks" },
    { name: "Styling", href: "/styling" },
    { name: "Shopping", href: "/shopping" },
    { name: "Resale", href: "/resale" },
    { name: "Analytics", href: "/analytics" },
    { name: "Daily Log", href: "/daily-log" },
    { name: "Learn", href: "/learn" },
    { name: "Gallery", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Weather", href: "/weather" },
    { name: "Social", href: "/social" },
    { name: "Body Analysis", href: "/body-analysis" },
    { name: "Cosplay", href: "/cosplay" },
    { name: "Profile", href: "/profile" },
  ]

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            StyleAI
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.slice(0, 8).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">
                More
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(8).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 text-slate-600 hover:text-slate-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
