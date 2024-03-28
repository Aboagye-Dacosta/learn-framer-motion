import { motion, useDragControls } from "framer-motion";
import { useRef, useState } from "react";

function Draggable() {
  const ref = useRef();
  const [toggle, setToggle] = useState();

  const dragControl = useDragControls();
  return (
    <div className="flex">
      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.7,
          },
        }}
        ref={ref}
        className={`flex justify-start ${
          toggle ? "justify-end" : "justify-start"
        } rounded-full  border border-stone-500 h-[5rem] w-[10rem]  my-10`}
        onPointerDown={(e) => dragControl.start(e, { snapToCursor: true })}
      >
        <motion.span
          layout
          className="inline-block h-[5rem] w-[5rem] rounded-full bg-green-500"
          drag="x"
          dragElastic="0"
          whileDrag={{ scale: [1.2, 1.3, 1.2] }}
          transition={{
            scale: {
              times: [0.2, 0.6, 0.7],
            },
          }}
          onTap={() => setToggle((state) => !state)}
          dragConstraints={ref}
          //   dragControls={dragControl}
          dragSnapToOrigin={false}
        ></motion.span>
      </motion.div>
    </div>
  );
}

export default Draggable;
