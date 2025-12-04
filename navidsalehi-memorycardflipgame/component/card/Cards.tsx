import { createList, gridFunction } from "@/lib/functions";
import Card from "./Card";

interface Props {
  size: string;
}


const Cards = ({ size }: Props) => {
  const gameSize = Number(size.split("*")[0]);
  const imageNumber = gameSize ** 2;
  const {gridStyle, cardStyle, cardsStyle} = gridFunction(gameSize);
  const idList = createList(imageNumber)

  return (
    <div className={` pt-30 px-1  grid ${gridStyle}   ${cardsStyle} aspect-square m-auto`}>
      {cardStyle && idList.map((id, index) => (
        <div className="col-span-1 flex items-center justify-center" key={index}>
          <Card imageId={id} cardStyle={cardStyle}/>
        </div>
      ))}
    </div>
  );
};

export default Cards;
