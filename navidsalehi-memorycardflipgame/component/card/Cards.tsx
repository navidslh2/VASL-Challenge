"use client";
import { createList, gridFunction } from "@/lib/functions";
import Card from "./Card";
import { useState } from "react";
import { card } from "@/lib/data";

interface Props {
  size: string;
}

const Cards = ({ size }: Props) => {
  const [firstImage, setFirstImage] = useState<{imageId:number, index: number} | null>(null);
  const [secondImage, setSecondImage] = useState<{imageId:number, index: number}  | null>(null);
  const gameSize = Number(size.split("*")[0]);
  const imageNumber = gameSize ** 2;
  const { gridStyle, cardStyle, cardsStyle } = gridFunction(gameSize);
  const [idList] = useState(createList(imageNumber))
  const [completeList, setCompleteList] = useState<number[]>([])

  const changeّImageHandler = (imageId: number, index:number) => {
    if(firstImage ===null) {setFirstImage({imageId:imageId, index: index}) ; return }

    setSecondImage({imageId:imageId, index: index})
    if(firstImage.imageId !== imageId) {
      setTimeout(() => {
        setFirstImage(null)
        setSecondImage(null)
      }, 1000);
      return
    }

    if(firstImage.imageId === imageId){
      setCompleteList(prev => [...prev, index,firstImage.index])
      setFirstImage(null)
      setSecondImage(null)
    } 
  };
  
  return ( 
    <div
      className={` pt-30 px-1  grid ${gridStyle}   ${cardsStyle} aspect-square m-auto`}
    >
      {cardStyle  &&
        idList.map((id, index) => (
          <div
            className="col-span-1 flex items-center justify-center"
            key={index}
          >
            <Card
              imageId={id-1}
              cardStyle={cardStyle}
              changeّImageHandler={changeّImageHandler}
              firstImage={firstImage}
              index = {index}
              secondImage={secondImage}
              completeList={completeList}
            />
          </div>
        ))}
    </div>
  );
};

export default Cards;
