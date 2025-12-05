'use client'

import  { bestScoreHnadler } from "@/lib/functions"
import type { BestScore } from "@/lib/type"


interface Props {
    numberOfMove:number
    duration:number
    bestScore:BestScore[]
    gameSize:number
}

const GameHeader = ({numberOfMove, duration,bestScore,gameSize}:Props) => {
  const  bestPoint = bestScoreHnadler(bestScore,gameSize)

  return (
    <div className='mt-30 px-5 w-[70%] h-15 bg-green-600/50 m-auto rounded-2xl flex items-center justify-between'>
      <div>
        <span>امتیاز: </span>
        {numberOfMove}
      </div>
      <div>
        <span>زمان: </span>
        {Math.floor(duration / 60000)}:{Math.floor(duration / 1000) % 60}
      </div>
      <div>
        <span>بهترین امتیاز: </span>
        {bestPoint}
      </div>
    </div>
  )
}

export default GameHeader
