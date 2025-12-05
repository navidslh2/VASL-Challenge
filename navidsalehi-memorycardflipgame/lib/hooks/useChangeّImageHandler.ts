'use client'
import  { useEffect, useState } from 'react'



export const useChangeّImageHandler = (imageNumber:number) => {
    const [numberOfMove, setNumberOfMove] = useState(0)
    const [startTime, setStartTime] = useState<number| null>(null)
    const [firstImage, setFirstImage] = useState<{imageId:number, index: number} | null>(null);
    const [secondImage, setSecondImage] = useState<{imageId:number, index: number}  | null>(null);
    const [completeList, setCompleteList] = useState<number[]>([])
    const [isFinish, setIsFinish] = useState(false)
    const [duration, setDuration] = useState(0)
   
    const changeّImageHandler = (imageId: number, index:number) => {
        if (isFinish) return
        if(startTime === null && !isFinish) {
            setStartTime(Date.now())
        } 

    setNumberOfMove(prev => prev + 1)
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
    if(completeList.length === imageNumber) setIsFinish(true)  
  };


  useEffect (()=>{
     const interval  = setInterval(() => {
        isFinish? clearInterval(interval) : ( startTime? setDuration(Date.now()-startTime) : undefined)
        }, 100);
        return ()=> clearInterval(interval)
  },[startTime,isFinish])

  console.log(duration,"startTime:",startTime,"isFinish",isFinish,completeList.length)
  return {numberOfMove, startTime, firstImage, secondImage, completeList, changeّImageHandler, isFinish, duration}

}


