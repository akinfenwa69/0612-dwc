import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { MagicCard } from "@/components/ui/magic-card";
import { motion } from "motion/react"

export default function App() {
    return (
        <>
            <div className="card-header flex flex-col items-center gap-3">
                <svg aria-label="Vercel Logo" fill="var(--foreground)" viewBox="0 0 75 65" height="64" width="64"
                    className="border border-border p-3 rounded-lg">
                    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
                <div className="grid gap-3 text-center">
                    <h1 className="text-5xl">Pàgina Host</h1>
                    <p className="text-muted-foreground">0612 DWC - Pol Poblet Pallisé</p>
                </div>
            </div>
            <div className="card-content mt-10">
                <div className='grid grid-cols-2 gap-5 mx-auto max-w-250'>
                    <motion.a
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        href="javascript"
                        className="group rounded-lg"
                    >
                        <MagicCard
                            gradientSize={100}
                            gradientFrom="#D1D100"
                            gradientTo="#A3A300"
                            className="w-full h-full flex items-center justify-center p-5"
                        >
                            <div className="flex items-center justify-center flex-col gap-3">
                                <IoLogoJavascript size={50} className="rounded-xl fill-yellow-300" />
                                <span className='text-xl'>JavaScript</span>
                            </div>
                        </MagicCard>
                    </motion.a>
                    <motion.a
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        href="react"
                        className="group rounded-lg"
                    >
                        <MagicCard
                            gradientSize={100}
                            gradientFrom="#89CFF0"
                            gradientTo="#6FC4EC"
                            className="w-full h-full flex items-center justify-center p-5"
                        >
                            <div className="flex items-center justify-center flex-col gap-3">
                                <IoLogoReact size={50} className="rounded-xl fill-blue-400" />
                                <span className='text-xl'>React.js</span>
                            </div>
                        </MagicCard>
                    </motion.a>
                </div>
            </div>
        </>
    )
}