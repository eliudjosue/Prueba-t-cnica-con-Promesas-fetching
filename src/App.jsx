import { useEffect, useState } from "react";
const URL_CAT_FACT = "https://catfact.ninja/fact";
const PREFIX_IMAGE_CAT = "https://cataas.com";
export function App() {
  const [fact, setFact] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(URL_CAT_FACT)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  useEffect(() => {
    if (!fact) return;
    const treeFisrtWord = fact.split(' ', 3).join(' ');
    console.log(treeFisrtWord)
    fetch(
      `https://cataas.com/cat/says/${treeFisrtWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json)
      .then((data) => {
        const { urlImage } = data;
        setImage(urlImage);
      });
  }, [fact]);
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {image && <img src={`${PREFIX_IMAGE_CAT}${image}`} alt={`aqui se mostraran imagenes de gatitos relacionada con la palabra ${fact}`}/>}
    </main>
  );
}
