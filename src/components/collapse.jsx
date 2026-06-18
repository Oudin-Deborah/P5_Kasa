import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen((prev) => !prev)}>
      <h3 className="Collapse__h3">
        {title}
        {open ? (
          <FontAwesomeIcon icon={faAngleDown} className="fa-solid" />
        ) : (
          <FontAwesomeIcon icon={faAngleUp} className="fa-solid" />
        )}
      </h3>
      {open && <div className="Collapse_p">{children}</div>}
    </div>
  );
}
