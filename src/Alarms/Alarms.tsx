import { useEffect, useRef, useState } from 'react'
import AlarmsList from './AlarmsList'
import { AlarmType } from './types'
const Alarms = () => {
    const [time, setTime] = useState("")
    const [alarms, setAlarms] = useState<AlarmType[]>([])
    const [label, setLabel] = useState("Default")

    const handleAddTime = () => {
      if(time){
        const newAlarm = {
          id: Date.now(),
          label,
          time
        }
        setAlarms([...alarms, newAlarm])
      }
        
        setLabel("Default")
        setTime("")
    }
  return (
    <>
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <input type="label" value={label} onChange={(e) => setLabel(e.target.value)} />
      <button onClick={handleAddTime}>Add</button>
      <AlarmsList alarms={alarms} setAlarms={setAlarms} />
    </>
  )
}

export default Alarms
