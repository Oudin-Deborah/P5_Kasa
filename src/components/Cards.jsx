import { Link } from "react-router-dom";

export default function Cards({ article }) {
  return (
    <Link to={`/housing/${article.id}`} className="Body__Cards">
      <img src={article.cover} alt={article.title} />
      <h2 className="Cards__Title">{article.title}</h2>
    </Link>
  );
}
