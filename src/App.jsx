import { useLayoutEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import "./index.css";

const NAMES = [
  "Leone Miller",
  "Clarabelle Kirlin",
  "Leanna Jast",
  "Eldora Muller",
  "Monica Huel",
  "Elza Kuhn",
  "Imogene Kassulke",
  "Olen Becker DDS",
  "Dr. Hudson Batz",
  "Kaylee Konopelski"
];

export default function Card() {
  const container = useRef();

  const [open, setOpen] = useState(false);

  const [height, setHeight] = useState();
  useLayoutEffect(() => {
    setHeight(container.current.getBoundingClientRect().height);
  });

  const props = useSpring({
    height: open ? height : 0,
    overflow: "hidden"
  });

  return (
    <div className={"accordion"} onClick={() => setOpen((x) => !x)}>
      <animated.div style={props}>
        <div ref={container}>
          {NAMES.map((name) => (
            <div className={"accordion__item"} key={name}>
              {name}
            </div>
          ))}
        </div>
      </animated.div>
    </div>
  );
}
