import { Braces, Contact, Cookie, Form, IdCard, PictureInPicture, TableProperties, Type } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io5";

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
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    {
                        exercises.map(site =>
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
                <h2 className="text-2xl my-3">Projectes</h2>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
                    {
                        projects.map(site =>
                            <a key={site.url} href={site.url}
                                className='flex flex-col gap-3 p-5 items-center justify-center rounded-xl hover:bg-card border border-border'
                            >
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