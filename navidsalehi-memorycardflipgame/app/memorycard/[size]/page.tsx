'use client'
import Cards from '@/component/card/Cards'
import GameHeader from '@/component/gameHeader/GameHeader'
import { createList } from '@/lib/functions'
import { useChangeّImageHandler } from '@/lib/hooks/useChangeّImageHandler'
import { use, useState } from 'react'


interface Props {
  params:Promise<{size:string}>
}
export default function GamePage ({params}:Props) {
    const {size} = use(params)  
    const gameSize = Number(size.split("*")[0]);
    const imageNumber = gameSize ** 2;
    const [idList] = useState(createList(imageNumber))
    const {numberOfMove, firstImage, secondImage, completeList, changeّImageHandler, duration, bestScore} = useChangeّImageHandler(imageNumber,gameSize)


  return (
    <div>
    <GameHeader numberOfMove={numberOfMove}  duration={duration} bestScore={bestScore} gameSize={gameSize} />
    <Cards gameSize={gameSize} idList={idList} changeّImageHandler={changeّImageHandler} firstImage={firstImage} secondImage={secondImage} completeList={completeList}/>
    </div>
  )
}



