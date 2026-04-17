import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>You might be lost</h1>
      <nav>
        <NavLink to="/">Accueil</NavLink>
      </nav>
    </div>
  );
};

export default Error;
