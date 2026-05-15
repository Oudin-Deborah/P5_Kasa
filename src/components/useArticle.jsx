import ErrorPage from "../pages/Error404";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export async function Articles() {
  const response = await fetch("/data.json");
  if (!response.ok) throw new Error("Erreur de chargement");
  return await response.json();
}

export default function Housing() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Articles()
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setData(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!data) return <ErrorPage />;

  return (
    <div>
      <Header />
      <main>
        <img alt="image du logement" src={data.cover} />
        <h2>{data.title}</h2>
        <p>{data.location}</p>
        <p>{data.host.name}</p>

        {data.tags.map((tag) => (
          <button key={tag}>{tag}</button>
        ))}

        <p>{data.rating}</p>

        <ul>
          {data.equipments.map((eq) => (
            <li key={eq}>{eq}</li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
