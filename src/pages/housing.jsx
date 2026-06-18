import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorPage from "../pages/Error404";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { Articles } from "../components/Fetch";
import Collapse from "../components/Collapse";

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
      <main className="Housing__Main">
        <Slider pictures={data.pictures} />
        <h2>{data.title}</h2>
        <p className="Housing__Location">{data.location}</p>
        <p>{data.host.name}</p>
        <div className="buttons">
          {data.tags.map((tag) => (
            <button className="Housing__button" key={tag}>
              {tag}
            </button>
          ))}
        </div>

        <p>{data.rating}</p>
        <div className="collapse__Description__Equipements">
          <Collapse className="Description" title="Description">
            <p>{data.description}</p>
          </Collapse>
          <Collapse className="Equipements" title="Equipements">
            <ul>
              {data.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
      <Footer />
    </div>
  );
}
