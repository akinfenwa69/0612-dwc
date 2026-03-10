import Manteniment, { isManteniment, isSettingsManteniment } from "../../components/manteniment"

export default function Settings() {

    if (isManteniment || isSettingsManteniment) return <Manteniment />

    return (
        <div>
            <h1 className="text-4xl font-medium mb-4">Settings</h1>
            <p>...</p>
        </div>
    )
}