import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

interface CustomLink {
  to: string;
  name: string;
}

export default function Navbar() {
  const location = useLocation();

  let links: Array<CustomLink>[];
  links = [
    [
      { to: "/operation", name: "Operation" },
      { to: "/operation-v2", name: "RT V2" },
    ],
    [
      { to: "/validation", name: "Validation" },
      { to: "/simulation", name: "Simulation" },
    ],
  ];

  let groups: JSX.Element[] = [];
  links?.map((group, i) => {
    let buttons: JSX.Element[] = [];
    group?.map((button, j) => {
      buttons.push(
        <Link
          className={location.pathname === button.to ? "active" : ""}
          to={button.to}
          key={`link_${j}`}
        >
          {button.name}
        </Link>
      );
    });
    groups.push(
      <div className="button-group" key={`group_${i}`}>
        {buttons}
      </div>
    );
  });

  return <nav className="navbar">{groups}</nav>;
}
