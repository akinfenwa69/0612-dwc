import { ClipboardList } from "lucide-react"
import { IoLogoReact } from "react-icons/io5"


export default function React() {
    const sites = [
        { id: '5', title: 'Gestor de Tasques', url: '/react/gestor-tasques', icon: ClipboardList },
    ]

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-3">
                <IoLogoReact size={60} className="fill-blue-400" />
                <h1 className="text-5xl">React.js</h1>
            </div>
            <div className="grid gap-3">
                <h2 className="text-2xl my-3">Activitats</h2>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    {
                        sites.map(site =>
                            <a key={site.url} href={site.url}
                                className='group relative flex flex-col gap-3 p-5 items-center justify-center rounded-xl hover:bg-card border border-border'
                            >
                                <span className="text-muted-foreground absolute left-3 top-3 text-sm">{site.id}</span>
                                <site.icon size={32} className="stroke-[1.5]" />
                                {site.title}
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}