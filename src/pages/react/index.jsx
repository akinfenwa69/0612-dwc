import { Moon } from "lucide-react"


export default function App() {
    const sites = [
        { title: 'Gestor de Tasques', url: '/gestor-tasques' },
    ]

    return (
        <div>
            <div className="card relative rounded-xl p-10 bg-[var(--card)] border border-[var(--border)] grid gap-5">
                <div className="card-header flex flex-col items-center gap-3">
                    <svg aria-label="Vercel Logo" fill="var(--foreground)" viewBox="0 0 75 65" height="64" width="64"
                        className="bg-[var(--background)] border border-[var(--border)] p-3 rounded-lg">
                        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                    </svg>
                    <div className="grid gap-3 text-center">
                        <h1 className="text-5xl">React</h1>
                        <p className="text-[var(--muted-foreground)]">0612 DWC - Pol Poblet Pallisé</p>
                    </div>
                </div>
                <div className="card-content grid gap-3">
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                        {
                            sites.map(site =>
                                <a key={site.url} href={site.url}
                                    className='h-20 flex items-center justify-center rounded-xl bg-[var(--accent)]/70 hover:bg-[var(--accent)] border border-[var(--border)]'
                                >
                                    {site.title}
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="card-footer grid gap-3">

                </div>
            </div>
        </div>
    )
}