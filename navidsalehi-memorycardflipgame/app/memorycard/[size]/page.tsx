'use client'
import Cards from '@/component/card/Cards'
import { useParams } from 'next/navigation'

const GamePage = () => {
    const paramas = useParams()
    const size = paramas?.size ?? '8'
    console.log(paramas) 
  return (
    <div>
      <Cards size={size}/>
    </div>
  )
}

export default GamePage
