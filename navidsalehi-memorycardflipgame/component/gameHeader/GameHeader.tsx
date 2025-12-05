interface Props {
    numberOfMove:number
}

const GameHeader = ({numberOfMove}:Props) => {
  return (
    <div className='mt-30 px-5 w-[70%] h-15 bg-green-600/50 m-auto rounded-2xl flex items-center justify-between'>
      <div>
        <span>امتیاز: </span>
        {numberOfMove}
      </div>
    </div>
  )
}

export default GameHeader
