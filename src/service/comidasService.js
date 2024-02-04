
export const traerComidas = async()=>{
    try {
        let comidas = []
        await fetch('src/utils/comidasApi.json')
        .then((res)=> res.json())
        .then( res => comidas = res.comidas)

        return comidas

    } catch (error) {
        return []
    }
}