import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

  // recupera la cita al cargar la pagina
    useEffect(() => {
        if (!fact) return;
        // como pide solo la primera palabra es asi
        // const firstWord = fact.split(' ')[0]
        // si pidirean mas seria fact.split(' ').slice(0, numero de palabras).join(' ') y se unen con espacios
        // otra opcion es
        const threeWords = fact.split(" ", 3).join(" ");
        fetch(
            `https://cataas.com/cat/gif/says/${threeWords}?size=50&color=red&json=true`
        )
        .then((res) => res.json())
        .then((response) => {
            const url = response._id;
            setImageUrl(
                `https://cataas.com/cat/${url}/says/${threeWords}?size=50&fontColor=red`
        );
        });
    }, [fact]);

    return { imageUrl };
}
