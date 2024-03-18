import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  // llamado a los custom hooks
  const {fact, refreshFact} = useCatFact()
  const {imageUrl} = useCatImage({fact})
  
  // funcion para el boton que refresca la cita y la imagen
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main >
      <h1>app de gatitos</h1>
      <button onClick={handleClick}>Nuevo Fact</button>
      <section>       
        {fact && <p>{fact}</p>}{/* renderiza solo si fact es verdadero */}
        {imageUrl && <img src={imageUrl} alt={`imagen extraida usando la primera palabra de ${fact}`} />}
      </section>
    </main>
  );
}

export default App;
