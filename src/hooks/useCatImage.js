import { useEffect, useState } from 'react'
const PREFIX_IMAGE_CAT = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()
  useEffect(() => {
    if (!fact) return
    const treeFisrtWord = fact.split(' ', 3).join(' ')
    fetch(
      `${PREFIX_IMAGE_CAT}/cat/says/${treeFisrtWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json)
      .then((data) => {
        const { urlImage } = data
        setImage(urlImage)
      })
  }, [fact])
  return { image: `${PREFIX_IMAGE_CAT}${image}` }
}
