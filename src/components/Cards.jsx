import { Link } from "react-router-dom";

export default function Cards({ article }) {
  return (
    <Link to={`/housing/${article.id}`} className="Body__Cards">
      <div className="Cards__Gradiant">
        <img className="Cards__Img" src={article.cover} alt={article.title} />
      </div>
      <h2 className="Cards__Title">{article.title}</h2>
    </Link>
  );
}
