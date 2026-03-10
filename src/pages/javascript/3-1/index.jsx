import Manteniment, { is3_1Manteniment, isJavaScriptManteniment, isManteniment } from "../../../components/manteniment"

export default function JavascriptEx3_1() {

    if (isManteniment || isJavaScriptManteniment || is3_1Manteniment) return <Manteniment />

    return (
        <div></div>
    )
}