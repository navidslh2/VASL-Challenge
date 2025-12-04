import { card } from "@/lib/data"
import Image from "next/image"
import Cards from "./Cards"


interface Props {
  imageId:number
  cardStyle: string
}

const Card = ({imageId, cardStyle}:Props) => {
  return (
    <div className={`relative ${cardStyle}`}>
      <Image src={`/images/${card[imageId-1].image}`} fill alt={card[imageId-1].image} className="object-contain"/>
    </div>
  )
}

export default Card
