
import HeaderItems from "./HeaderItems";
import Backdrop from "@/ui/Backdrop";
import Logo from "@/ui/Logo";
import { IoCloseOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isShow: boolean;
  backdropHandler: () => void;
}

const Mobilemenu = ({ isShow, backdropHandler }: Props) => {
  return (
    <AnimatePresence>
      <Backdrop isShow={isShow} backdropHandler={backdropHandler} />
      <motion.header
        className="fixed right-5 top-5 bottom-5 w-[200px] z-40 border border-gray-900 rounded-xl   bg-gray-800  flex flex-col items-center justify-between py-13 gap-10 origin-right shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className=" flex flex-col gap-8">
          <Logo />
          <HeaderItems
            className={"flex-col gap-7"}
            backdropHandler={backdropHandler}
          />
        </div>
        <div>
          <div className="flex text-white gap-3 items-center text-sm">
            <span>09128391641</span>
            <MdLocalPhone size={20} />
          </div>
        </div>
        <div
          className="absolute top-3 right-5 text-white hover:text-blue-400 hoverEffect cursor-pointer"
          onClick={backdropHandler}
        >
          <IoCloseOutline />
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Mobilemenu;
