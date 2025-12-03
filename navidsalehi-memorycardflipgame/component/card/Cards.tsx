import { createList, gridFunction } from "@/lib/functions";
import Card from "./Card";

interface Props {
  size: string;
}


const Cards = ({ size }: Props) => {
  const gameSize = Number(size.split("*")[0]);
  const imageNumber = gameSize ** 2;
  const gridCols = gridFunction(gameSize);
  const idList = createList(imageNumber)

  return (
    <div className={` pt-30 grid ${gridCols} gap-2`}>
      {idList.map((id, index) => (
        <div className="col-span-1" key={index}>
          <Card imageId={id} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
