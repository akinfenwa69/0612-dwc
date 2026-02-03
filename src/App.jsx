import { BiLogoJavascript, BiLogoReact } from 'react-icons/bi'

export default function App() {
    return (
        <div className="flex-1 bg-blue-500/50">
            <div className="card relative rounded-xl p-10 bg-[var(--card)] border border-[var(--border)] grid gap-5">
                <div className="card-header flex flex-col items-center gap-3">
                    <svg aria-label="Vercel Logo" fill="var(--foreground)" viewBox="0 0 75 65" height="64" width="64"
                        className="bg-[var(--background)] border border-[var(--border)] p-3 rounded-lg">
                        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                    </svg>
                    <div className="grid gap-3 text-center">
                        <h1 className="text-5xl">Pàgina Host</h1>
                        <p className="text-[var(--muted-foreground)]">0612 DWC - Pol Poblet Pallisé</p>
                    </div>
                </div>
                <div className="card-content">
                    <div className='grid grid-cols-2'>
                        <div className='bg-red-500 p-3'>
                            <BiLogoJavascript size={50} />
                        </div>
                        <div>
                            <BiLogoReact size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}