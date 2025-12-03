import { gridFunction } from "@/lib/functions";
import Card from "./Card";

interface Props {
  size: string;
}



const Cards = ({ size }: Props) => {
  const gameSize = Number(size.split("*")[0]);
  const imageNumber = gameSize ** 2;
  let gridCols = gridFunction(gameSize)

  return (
    <div className={` pt-30 grid ${gridCols} gap-2`}>
      {[...Array(imageNumber)].map((_, index) => (
        <div className="col-span-1" key={index}>
          <Card />
        </div>
      ))}
    </div>
  );
};

export default Cards;
