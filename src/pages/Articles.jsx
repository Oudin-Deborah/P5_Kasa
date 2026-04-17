import { useParams } from "react-router-dom";

export default function Articles() {
  const { id } = useParams();
  return (
    <div>
      <h1>Articles {id}</h1>
    </div>

  );
}
