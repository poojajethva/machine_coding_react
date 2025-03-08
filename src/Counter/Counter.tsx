import { useEffect, useRef, useState } from 'react'
import Button from './Button'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [isCounterAdd, setIsCounterAdd] = useState<boolean>(false)
  const [isCounterMinus, setIsCounterMinus] = useState<boolean>(false)
  const timerId = useRef<number | null>(null)

  useEffect(() => {
    const handleTimer = () => {
      if(isCounterAdd)
        setCount(prev => prev+1)
      else if(isCounterMinus)
        setCount(prev => prev-1)
    }
    if(isCounterAdd || isCounterMinus)
      timerId.current = setInterval(handleTimer, 1000)
    else if(timerId.current !== null)
      clearInterval(timerId.current)
      
    return () => {
      if(timerId.current !== null)
        clearInterval(timerId.current)
    }
  }, [isCounterAdd, isCounterMinus])

  const handleAdd = ():void => {
    setIsCounterAdd(true)
    setIsCounterMinus(false)
  }

  const handleMinus = ():void => {
    setIsCounterAdd(false)
    setIsCounterMinus(true)
  }

  const handleStop = ():void => {
    setIsCounterAdd(false)
    setIsCounterMinus(false)
  }

  return (
    <>
      <Button callback={handleMinus}>-</Button>
      <span>{count}</span>
      <Button callback={handleAdd}>+</Button>
      <Button callback={handleStop}>Stop</Button>
    </>
  )
}

export default Counter
