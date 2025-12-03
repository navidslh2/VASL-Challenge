import Cards from '@/component/card/Cards'
import { use } from 'react'


interface Props {
  params:Promise<{size:string}>
}
export default function GamePage ({params}:Props) {
    const {size} = use(params)  

  return (
    <div>
    <Cards size={size} />
    </div>
  )
}



