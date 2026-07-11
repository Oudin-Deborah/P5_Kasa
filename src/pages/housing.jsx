import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorPage from "../pages/Error404";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { Articles } from "../components/Fetch";
import Collapse from "../components/Collapse";
import Rating from "../components/rating";

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
    <div className="Housing__Page">
      <Header />
      <main className="Housing__Main">
        <Slider pictures={data.pictures} />
        <section className="Housing__Info">
          <h2 className="Housing__Name">{data.title}</h2>
          <div className="Host">
            <p className="Host__Name">{data.host.name}</p>
            <img className="Host__img"></img>
          </div>{" "}
          <p className="Housing__Location">{data.location}</p>
          <div className="buttons">
            {data.tags.map((tag) => (
              <button className="Housing__button" key={tag}>
                {tag}
              </button>
            ))}
          </div>
          <Rating rating={data.rating} />
        </section>
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
