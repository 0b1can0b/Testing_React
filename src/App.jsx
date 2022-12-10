import { useEffect, useState } from "react";
import "./App.scss";

console.clear();

const navItems = ["Home", "About", "Services", "Portfolio", "FAQs", "Contact"];

const App = () => {
  const [IsNavHovered, setIsNavHovered] = useState(false);

  const handelNavMouseEnter = () => {
    setTimeout(() => {
      setIsNavHovered(true);
    }, 250);
  };
  const handelNavMouseLeave = () => {
    setIsNavHovered(false);
  };

  const [IsHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState({ left: 0, width: 0 });
  const [active, setActive] = useState({ left: null, width: null });
  const [clickEffect, setClickEffect] = useState(false);

  const handelItemMouseEnter = (e) => {
    setIsHovered(true);
    setHovered({ left: e.target.offsetLeft, width: e.target.offsetWidth });
  };
  const handelClick = (e) => {
    setActive({ left: e.target.offsetLeft, width: e.target.offsetWidth });
    setClickEffect(true);
    setTimeout(() => {
      setClickEffect(false);
    }, 500);
  };
  const handelItemMouseLeave = () => {
    setIsHovered(false);
  };

  const [indicatorClass, setIndicatorClass] = useState("indicator");
  useEffect(() => {
    setIndicatorClass(
      `indicator${clickEffect ? " clickEffect" : ""}${
        IsNavHovered ? " navHovered" : ""
      }${active.left !== null && active.width !== null ? " itemActive" : ""}`
    );
  }, [clickEffect, IsNavHovered, active]);

  const [activeItemName, setActiveItemName] = useState(navItems[0]);

  return (
    <div className="app">
      <div
        className="nav"
        onMouseEnter={handelNavMouseEnter}
        onMouseLeave={handelNavMouseLeave}
      >
        <div
          className={indicatorClass}
          style={{
            left: !IsHovered ? active.left : hovered.left,
            width: !IsHovered ? active.width : hovered.width,
            opacity: active.left !== null && active.width !== null && 1,
          }}
        />
        {navItems.map((e, i) => {
          return (
            <div
              key={i}
              className={activeItemName === e ? "item active" : "item"}
              onMouseEnter={handelItemMouseEnter}
              onClick={(i) => {
                handelClick(i);
                setActiveItemName(e);
              }}
              onMouseLeave={handelItemMouseLeave}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
