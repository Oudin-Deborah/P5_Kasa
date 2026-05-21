import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Articles } from "../components/Fetch";
import Cards from "./Cards";

export default function Body() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Articles()
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <main className="Body__Main">
      {articles.map((item) => (
        <Cards key={item.id} article={item} />
      ))}
    </main>
  );
}
