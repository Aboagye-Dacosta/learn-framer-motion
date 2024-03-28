/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Textarea = forwardRef((_,ref) => {
  return (
    <textarea
      ref={ref}
      className="border-0 outline-none shadow-md px-2 py-2 shadow-stone-200 w-[30rem] rounded-md  ring-0 focus:ring-green-600 ring-offset-2 "
    />
  );
});

Textarea.displayName = "Textarea";

export default motion(Textarea, { forwardMotionProps: true });
