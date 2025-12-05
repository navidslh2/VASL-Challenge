'use client'
import Cards from '@/component/card/Cards'
import GameHeader from '@/component/gameHeader/GameHeader'
import { use, useState } from 'react'


interface Props {
  params:Promise<{size:string}>
}
export default function GamePage ({params}:Props) {
    const {size} = use(params)  
    const [numberOfMove, setNumberOfMove] = useState(0)
  return (
    <div>
    <GameHeader numberOfMove={numberOfMove}/>
    <Cards size={size} setNumberOfMove={setNumberOfMove} />
    </div>
  )
}



