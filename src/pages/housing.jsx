import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//const { id } = useParams();const Articles = () => {  useEffect(() => {    fetch("./data.json").then((res) => res.json()).then((data) => {if (!data) return <p>Aucun logement trouvé</p>;return (<div><h2>{data.title}</h2><p>{data.description}</p></div>);      });}, []);};export default Articles;

export default function Articles() {
  const { id } = useParams();
  const [data, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erreur de chargement");
        return res.json();
      })
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setArticle(found);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);
  if (data && id)
    return (
      <div>
        <Header />
        <main>
          <img alt="image du logement" src={data.pictures} />
          <h2>{data.title}</h2>
          <p>{data.location}</p>
          <p>{data.host.name}</p>
          <button>{data.tags}</button>
          <p>{data.rating}</p>
          <p>{data.equipements}</p>
        </main>
        <Footer />
      </div>
    );
  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!data)
    return (
      <p>
        <Error404 />
      </p>
    );
}
