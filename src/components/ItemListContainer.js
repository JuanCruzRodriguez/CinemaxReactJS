import { useEffect, useState } from "react";
import { getData } from "../utils/data";
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() =>{
        async function pedirDatos (){
            let datosLlegando = await getData();
            setPeliculas(datosLlegando);
        }
        pedirDatos();
    }, [])

    return (
        <>
            <ItemList productos={peliculas} />
        </>
    );
}

export default ItemListContainer;