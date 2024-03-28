import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function BackgroundCircles() {
  const body = document.body;
  const ref = useRef();

  const [pageHeight, setPageHeight] = useState(10);
  const [pageWidth, setPageWidth] = useState(10);
  const [random, setRandom] = useState(0.5);

  const elSize = getRandom(50, 100);

  useEffect(() => {
    const height = Math.max(body.scrollHeight, body.offsetHeight);
    const width = Math.max(body.scrollWidth, body.offsetWidth);
    const interval = setInterval(() => {
      const random = getRandom(0.5, 0.9);
      setRandom(random);
    }, 7000);

    setPageWidth(width);
    setPageHeight(height);
    return () => {
      clearInterval(interval);
    };
  }, [
    body.offsetHeight,
    body.offsetWidth,
    body.scrollHeight,
    body.scrollWidth,
  ]);

  return (
    <>
      {Array.from({ length: 4 }, (i) => i).map((i) => (
        <motion.span
          layout
          className="absolute z-40 backdrop-blur-sm inline-block w-[20rem] h-[20rem] bg-gradient-to-br from-current via-80%  via-green-600 to-green-200 rounded-full  shadow-sm shadow-green-100 blur-[2px] before:absolute before:w-[90%] before:h-[90%] before:bg-gradient-to-br before:from-green-400 before:to-green-500 before:rounded-full before:top-[5px] before:left-[15px] before:blur-sm "
          ref={ref}
          key={i}
          // style={{
          //   width: 200 * random,
          //   height: 200 * random,
          //   perspective: 10,
          // }}
          animate={{
            y: getRandom(elSize, pageHeight * random) - elSize,
            x: getRandom(elSize, pageWidth * random) - elSize,  
            perspective: random * elSize
            // width: [null, 300 * random - 70, 300 * random - 100,null],
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
            layout: {
              delay: 0.7,
              duration: 1,
            },
          }}
        ></motion.span>
      ))}
    </>
  );
}

export default BackgroundCircles;
