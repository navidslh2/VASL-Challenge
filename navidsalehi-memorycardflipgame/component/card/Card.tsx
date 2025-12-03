import { card } from "@/lib/data"
import Image from "next/image"
import Cards from "./Cards"


interface Props {
  imageId:number
}

const Card = ({imageId}:Props) => {
  return (
    <div>
      <Image src={`/images/${card[imageId-1].image}`} width={50} height={50} alt="id"/>
    </div>
  )
}

export default Card
