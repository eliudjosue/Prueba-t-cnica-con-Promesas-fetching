import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refresFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClickfact = () => {
    refresFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClickfact}>Actualizar</button>
      {fact && <p>{fact}</p>}
      {image && (
        <img
          src={image}
          alt={`aqui se mostraran imagenes de gatitos relacionada con la palabra ${fact}`}
        />
      )}
    </main>
  )
}
