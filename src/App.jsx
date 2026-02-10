import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";

export default function App() {
    return (
        <>
            <div className="card-header flex flex-col items-center gap-3">
                <svg aria-label="Vercel Logo" fill="var(--foreground)" viewBox="0 0 75 65" height="64" width="64"
                    className="border border-[var(--border)] p-3 rounded-lg">
                    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
                <div className="grid gap-3 text-center">
                    <h1 className="text-5xl">Pàgina Host</h1>
                    <p className="text-[var(--muted-foreground)]">0612 DWC - Pol Poblet Pallisé</p>
                </div>
            </div>
            <div className="card-content mt-10">
                <div className='grid grid-cols-2 gap-3 mx-auto max-w-250'>
                    <a href="javascript" className='group flex items-center justify-center flex-col gap-3 p-5 rounded-lg border border-border hover:bg-card transition'>
                        <IoLogoJavascript size={50} className="group-hover:scale-110 transition rounded-xl fill-yellow-300" />
                        <span className='text-xl'>JavaScript</span>
                    </a>
                    <a href="react" className='group flex items-center justify-center flex-col gap-3 p-5 rounded-lg border border-border hover:bg-card transition'>
                        <IoLogoReact size={50} className="group-hover:scale-110 transition rounded-xl fill-blue-400" />
                        <span className='text-xl'>React.js</span>
                    </a>
                </div>
            </div>
        </>
    )
}