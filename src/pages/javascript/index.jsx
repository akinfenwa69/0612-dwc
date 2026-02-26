import { Braces, Contact, Cookie, Form, IdCard, PictureInPicture, TableProperties, Type } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";
import { MagicCard } from "@/components/ui/magic-card"
import { motion } from "motion/react"

export default function Javascript() {
    const exercises = [
        { id: '1', title: 'Mostrar text', url: '/javascript/1', icon: Type },
        { id: '2', title: 'DNI & Pasqua', url: '/javascript/2', icon: IdCard },
        { id: '3.1', title: 'Finestres', url: '/javascript/3-1', icon: PictureInPicture },
        { id: '3.2', title: 'Cookies', url: '/javascript/3-2', icon: Cookie },
        { id: '3.3', title: 'Validar Formulari', url: '/javascript/3-3', icon: Form },
        { id: '4.1', title: 'Objectes', url: '/javascript/4-1', icon: TableProperties },
        { id: '4.2', title: 'Objectes JSON', url: '/javascript/4-2', icon: Braces },
    ]

    const projects = [
        { title: 'Llista de Contactes', url: '/javascript/llista-contactes', icon: Contact },
    ]

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-3">
                <IoLogoJavascript size={60} className="fill-yellow-400" />
                <h1 className="text-5xl">JavaScript</h1>
            </div>
            <div className="grid gap-3">
                <h2 className="text-2xl my-3">Activitats</h2>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
                    {
                        exercises.map((site, index) =>
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
                <h2 className="text-2xl my-3">Projectes</h2>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    {
                        projects.map((site, index) =>
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