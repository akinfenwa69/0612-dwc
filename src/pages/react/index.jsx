import { ClipboardList } from "lucide-react"
import { IoLogoReact } from "react-icons/io5"
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "motion/react"

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
                        sites.map((site, index) =>
                            <motion.a
                                key={site.url}
                                href={site.url}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className='group'
                            >
                                <MagicCard
                                    gradientSize={80}
                                    gradientFrom="#ddd"
                                    gradientTo="#bbb"
                                    className="inset-0 relative rounded-lg hover:bg-card"
                                >
                                    <div className="flex flex-col gap-3 items-center justify-center p-5">
                                        <span className="text-muted-foreground absolute left-4 top-4 text-sm">{site.id}</span>
                                        <site.icon size={32} className="stroke-[1.5]" />
                                        {site.title}
                                    </div>
                                </MagicCard>
                            </motion.a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}