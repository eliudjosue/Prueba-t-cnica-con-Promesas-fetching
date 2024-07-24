import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useCatFact () {
  const [fact, setFact] = useState()
  const refresFact = () => {
    getRandomFact().then((fact) => setFact(fact))
  }

  // para recuperar la cita al cargar la pagina.
  useEffect(refresFact, [])

  return { fact, refresFact }
}
