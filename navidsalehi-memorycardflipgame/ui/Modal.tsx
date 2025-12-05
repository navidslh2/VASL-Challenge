import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  isFinish: boolean;
  numberOfMove: number;
  duration: number;
  bestPoint: number | string;
  size: string;
  onClose: () => void;
}
const Modal = ({
  isFinish,
  numberOfMove,
  duration,
  bestPoint,
  size,
  onClose,
}: Props) => {
  useEffect(() => {
    if (!isFinish) return;
    const timer = setTimeout(() => {
      onClose();
    }, 10000);
    return () => clearTimeout(timer);
  }, [isFinish]);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed right-1/2 translate-x-1/2 top-50 p-4 border rounded-md bg-green-300/90 border-green-600"
        initial={{ translateY: "-150%", scale:0 }}
        animate={{ translateY: 0, scale:1 }}
        exit={{ translateY: "-150%",  scale:0 }}
        transition={{ duration: 0.8, ease: easeInOut }}
      >
        <div>
          <span>امتیاز: </span>
          {numberOfMove}
        </div>
        <div>
          <span>زمان: </span>
          {Math.floor(duration / 60000)}:{Math.floor(duration / 1000) % 60}
        </div>
        <div>
          <span>بهترین امتیاز: </span>
          {bestPoint}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
