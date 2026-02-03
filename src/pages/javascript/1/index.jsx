export default function JavascriptEx1() {
    return (
        <div class="card relative rounded-xl p-10 bg-[var(--card)] border border-[var(--border)] grid gap-5">
            <span onclick="window.location.href='/'"
                class="material-symbols-outlined absolute left-5 top-5 p-3 hover:bg-[var(--accent)] rounded-full cursor-pointer">
                chevron_left
            </span>

            <div class="card-header grid text-center gap-3">
                <h1 class="text-5xl">Introducció</h1>
                <p class="text-[var(--muted-foreground)]">Mostra el nom i cognom/s</p>
            </div>

            <div class="card-content grid gap-3">
                <form action="" onsubmit="confirmAlert()" class="grid gap-3">
                    <div class="grid">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required
                            class="border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--foreground)] p-3" />
                    </div>

                    <div class="grid">
                        <label for="surname">Surname</label>
                        <input type="text" name="surname" id="surname" required
                            class="border border-[var(--border)] rounded-lg focus:outline-none focus:border-[var(--foreground)] p-3" />
                    </div>

                    <button type="submit"
                        class="border border-[var(--border)] bg-[var(--accent)]/70 hover:bg-[var(--accent)] rounded-xl p-3 cursor-pointer">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}