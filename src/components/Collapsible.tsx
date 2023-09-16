import { ReactNode, useRef, useState } from "react";
import arrow from "../icons/chevron-left.svg";

interface Collaps {
  title: string;
  children: ReactNode;
}

const Collapsible = (props: Collaps) => {
  const { title, children } = props;
  const contentRef = useRef<HTMLDivElement | null>(null); // Specify the type of ref
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggle} className="btn">
        <span>{title}</span>
        <img src={arrow} alt="" className={`${open ? "active" : "arrow"} `} />
      </button>
      <div
        className="content-parent"
        ref={contentRef}
        style={
          open
            ? { height: contentRef.current?.scrollHeight + "px" } // Use optional chaining
            : { height: "0px" }
        }
      >
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
