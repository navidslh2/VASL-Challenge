import { headerData } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";


interface Props {
    className?:string
    backdropHandler?:()=>void
}

const HeaderItems = ({className, backdropHandler}: Props) => {
  const onclickHeadeHandler = () =>{
    if(backdropHandler) backdropHandler();
  }
  return (
      <ul className={cn("text-white flex gap-4 xl:gap-10 items-center justify-center ", className)}>
        {headerData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="hover:text-blue-400 hoverEffect cursor-pointer"
            onClick={()=>onclickHeadeHandler()}    
          >
            {item.name}
          </Link>
        ))}
      </ul>
  );
};

export default HeaderItems;
