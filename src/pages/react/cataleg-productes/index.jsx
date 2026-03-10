import PRODUCTES from '@/api/productes.json'
import { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"
import Manteniment, { isCatalegProductesManteniment, isManteniment, isReactManteniment } from "../../../components/manteniment"

// 2.​ Visualització
function ProductCard({ producte, ...props }) {
    return (
        <div {...props}>
            {producte.nom}
            {producte.preu}
            {producte.categoria}
        </div>
    )
}

export default function CatalegProductes() {

    /* 
    Exercici 1: Heu de crear una aplicació React que mostri un catàleg de productes
    amb opcions de cerca, filtre i detall.

    Requisits funcionals

    3.​ Filtratge:
        ○​ Filtrar productes per:
            ■​ Nom (input de text)
            ■​ Categoria (select)​

    4.​ Ordenació:
        ○​ Permetre ordenar els productes per preu (ascendent i descendent).​

    5.​ Detall de producte:
        ○​ En fer clic a un producte, mostrar un component de detall amb tota la informació.
        ○​ El detall pot aparèixer en:
            ■​ Un panell lateral
            ■​ Un modal
            ■​ O sota la llista

    Millores opcionals
        ●​ Spinner de càrrega
        ●​ Missatge si no hi ha resultats
        ●​ Simulació d’error de càrrega
    */

    const [productes, setProductes] = useState([])

    useEffect(() => {
        // 1. Càrrega de dades
        setProductes(PRODUCTES)
    }, [])

    function filterProducts(nom, categoria) {
        if (nom && input !== '') {
            setFilteredProducts()
        }

        if (categoria) {
            setFilteredProducts(filterProducts)
        }
    }

        if (isManteniment || isReactManteniment || isCatalegProductesManteniment) return <Manteniment />
    
    return (
        <div>
            <h1 className="text-4xl mb-6">Catàleg de Productes</h1>
            {
                productes.length ?
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        {productes.map(item => <ProductCard producte={item} key={item.id} />)}
                    </div>
                    : <div className='flex flex-col gap-3 items-center justify-center'>
                        <Spinner className="w-9 h-9 text-muted-foreground" />
                        <p className='animate-pulse'>Carregant...</p>
                    </div>
            }
        </div>
    )
}