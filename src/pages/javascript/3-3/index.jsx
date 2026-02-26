import { Cake, Calendar1, CalendarCheck, CalendarX, ChevronLeft, DecimalsArrowRight, Hash, Mail, MapPin, MessageSquareText, Phone, Trash2, User } from "lucide-react";
import './style.css'

export default function JavascriptEx3_3() {
    // Formulari
    const form = document.getElementById("myForm");

    // Missatges d'error
    const err_nom = document.getElementById("err_nom");
    const err_email = document.getElementById("err_email");
    const err_telefon = document.getElementById("err_telefon");
    const err_missatge = document.getElementById("err_missatge");
    const err_dataNaixement = document.getElementById("err_data_naixament");
    const err_dataInici = document.getElementById("err_data_inici");
    const err_dataFi = document.getElementById("err_data_final");
    const err_codiPostal = document.getElementById("err_cp");
    const err_nombreEnter = document.getElementById("err_num_enters");
    const err_nombreDecimal = document.getElementById("err_num_decimals");

    function validarFormulari() {
        // Exercici 1
        const nom = document.getElementById("nom").value;
        const email = document.getElementById("email").value;
        const telefon = document.getElementById("telefon").value;
        const missatge = document.getElementById("missatge").value;

        // Exercici 2
        const dataNaixement = document.getElementById("data-naixement").value;
        const dataInici = document.getElementById("data-inici").value;
        const dataFi = document.getElementById("data-final").value;
        const codiPostal = document.getElementById("cp").value;
        const nombreEnter = document.getElementById("num-enters").value;
        const nombreDecimal = document.getElementById("num-decimals").value;

        const regexAZ = /[a-zA-Z]/;
        const regexEmail = /\S+@\S+\.\S/;
        const regexEnter = /-?\d/;
        const regexDecimal = /-?\d+(,\d+)?/;
        const regexCP = /[0-5][0-9]{4}/;

        // Netejar format i missatges d'error
        err_nom.textContent = '';
        err_email.textContent = '';
        err_telefon.textContent = '';
        err_missatge.textContent = '';
        err_dataNaixement.textContent = '';
        err_dataInici.textContent = '';
        err_dataFi.textContent = '';
        err_codiPostal.textContent = '';
        err_nombreEnter.textContent = '';
        err_nombreDecimal.textContent = '';

        // 2-1. Nom (sense símbols)
        if (!regexAZ.test(nom)) {
            err_nom.textContent = 'El nom no pot tenir símbols!';
            return false;
        }

        // 1-1. El nom ha de tenir almenys 3 caràcters.
        if (nom.length < 3) {
            err_nom.textContent = "El nom ha de tenir almenys 3 caràcters!";
            return false;
        }

        // 1-2. El correu electrònic ha de ser vàlid i tenir un format adequat (nom@domini.com).
        // 2-4. Email
        if (!regexEmail.test(email)) {
            err_email.textContent = "El correu electrònic no té el format correcte!";
            return false;
        }

        // 1-3. El telèfon ha de tenir 9 dígits i començar per 6, 7, 8 o 9.
        // 2-5. Telèfon (de nou xifres, que comencin per 9, 6 o 8)
        if (!(telefon.length === 9 && (telefon.charAt(0) === '6' || telefon.charAt(0) === '7' || telefon.charAt(0) === '8' || telefon.charAt(0) === '9'))) {
            err_telefon.textContent = "El telèfon ha de tenir 9 dígits i començar per 6, 7, 8 o 9!";
            return false;
        }

        // 1-4. El missatge no ha de ser buit.
        if (missatge.length === 0) {
            err_missatge.textContent = "El missatge no pot ser buit!";
            return false;
        }

        // 2-7. Nombres enters (positius o negatius)
        if (!regexEnter.test(nombreEnter)) {
            err_nombreEnter.textContent = 'El nombre enter ha de ser un nombre enter vàlid (positiu o negatiu)!';
            return false;
        }

        // 2-8. Nombres decimals (amb una coma com a separador decimal)
        if (!regexDecimal.test(nombreDecimal)) {
            err_nombreDecimal.textContent = 'El nombre decimal ha de ser un nombre decimal vàlid amb una coma com a separador!';
            return false;
        }

        // 2-2. Data de naixement (més petita a la data actual)
        if (dataNaixement === "" || new Date(dataNaixement) >= new Date()) {
            err_dataNaixement.textContent = "La data de naixement ha de ser anterior a la data actual!";
            return false;
        }

        // 2-3. Data inici i data fi ( la data_fi més gran que la incial)
        if (dataFi === "" || dataInici === "" || new Date(dataFi) <= new Date(dataInici)) {
            err_dataInici.textContent = "La data d'inici ha de ser anterior a la data final!";
            err_dataFi.textContent = "La data final ha de ser posterior a la data d'inici!";
            return false;
        }

        // 2-6. Codi Postal (de cinc xifres, que comencin com a molt per 5)
        if (!regexCP.test(codiPostal)) {
            err_codiPostal.textContent = "El codi postal ha de tenir cinc xifres i començar com a molt per 5!";
            return false;
        }

        // Si totes les validacions passen
        return confirm("Formulari correcte! Vols enviar-lo?");
    }

    return (
        <div id="ex3-3" className="grid gap-5">
            <a href="/javascript"
                className="absolute left-5 top-5 p-3 z-50 hover:bg-accent rounded-full cursor-pointer">
                <ChevronLeft className="back-icon" />
            </a>

            <div className="grid text-center gap-3">
                <h1 className="text-5xl">Formularis</h1>
                <p className="text-muted-foreground">Verificar les dades de cada camp</p>
            </div>

            <div className="grid gap-3">
                <form action="" id="myForm" onSubmit={() => validarFormulari()}>
                    <div className="flex flex-col xl:grid grid-cols-2 gap-3">
                        <section>
                            <h1 className="text-xl font-bold my-5">Exercici 1</h1>
                            <div className="floating-label">
                                <input type="text" name="nom" id="nom" placeholder="" className="border p-2" />
                                <label htmlFor="nom">Nom</label>
                                <User />
                                <span className="error text-sm" id="err_nom"></span>
                            </div>
                            <div className="floating-label">
                                <input type="email" name="email" id="email" placeholder="" className="border p-2" />
                                <label htmlFor="email">Correu electrònic</label>
                                <Mail />
                                <span className="error text-sm" id="err_email"></span>
                            </div>
                            <div className="floating-label">
                                <input type="tel" name="telefon" id="telefon" placeholder="" className="border p-2" />
                                <label htmlFor="telefon">Telèfon</label>
                                <Phone />
                                <span className="error text-sm" id="err_telefon"></span>
                            </div>
                            <div className="mt-6 flex flex-col gap-3">
                                <label htmlFor="missatge" className="flex gap-2 text-muted-foreground"><MessageSquareText />Missatge</label>
                                <textarea name="missatge" id="missatge" placeholder="Escriu un missatge..."
                                    className="p-3 w-full"></textarea>
                                <span className="error text-sm" id="err_missatge"></span>
                            </div>
                        </section>

                        <section>
                            <h1 className="text-xl my-5 font-bold">Exercici 2</h1>
                            <div className="floating-label">
                                <input type="number" name="num-enters" id="num-enters" placeholder="" />
                                <label htmlFor="num-enters">Nombre enter</label>
                                <Hash />
                                <span className="error text-sm" id="err_num_enters"></span>
                            </div>
                            <div className="floating-label">
                                <input type="text" name="num-decimals" id="num-decimals" placeholder="" />
                                <label htmlFor="num-decimals">Nombre decimal</label>
                                <DecimalsArrowRight />
                                <span className="error text-sm" id="err_num_decimals"></span>
                            </div>
                            <div className="floating-label">
                                <input type="number" name="cp" id="cp" placeholder="" />
                                <label htmlFor="cp">Codi postal</label>
                                <MapPin />
                                <span className="error text-sm" id="err_cp"></span>
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <label htmlFor="data-naixement" className="flex gap-2 text-muted-foreground">
                                    <Cake />Data naixement
                                </label>
                                <input type="date" name="data-naixement" id="data-naixement" className="border p-2" />
                                <span className="error text-sm" id="err_data_naixament"></span>
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <label htmlFor="data-inici" className="flex gap-2 text-muted-foreground">
                                    <CalendarCheck />Data inici
                                </label>
                                <input type="date" name="data-inici" id="data-inici" className="border p-2" />
                                <span className="error text-sm" id="err_data_inici"></span>
                            </div>
                            <div className="mt-6 flex flex-col gap-2">
                                <label htmlFor="data-final" className="flex gap-2 text-muted-foreground">
                                    <CalendarX />Data final
                                </label>
                                <input type="date" name="data-final" id="data-final" className="border p-2" />
                                <span className="error text-sm" id="err_data_final"></span>
                            </div>
                        </section>
                    </div>

                    <div className="flex gap-1 mt-5 h-16 col-span-2">
                        <button
                            type="submit"
                            className="flex-1 text-lg"
                        >
                            Enviar
                        </button>
                        <button type="reset"
                            className="h-16 w-16 border bg-transparent! border-red-500/70! transition hover:bg-red-500/20! text-white rounded cursor-pointer flex items-center justify-center">
                            <Trash2 />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}