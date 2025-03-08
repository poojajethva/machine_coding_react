import { useEffect, useRef } from "react";
import { AlarmType } from "./types"
  
  const Alarm = ({ alarm, alarms, setAlarms }: { 
    alarm: AlarmType;
    alarms: AlarmType[];
    setAlarms: React.Dispatch<React.SetStateAction<AlarmType[]>>
  }) => {
    const timerId = useRef<number | null>(null)
    useEffect(() => {
        const timeInArr = alarm.time.split(":")
        const now = new Date();
        const alarmTime = new Date();
        alarmTime.setHours(+timeInArr[0], +timeInArr[1], 0, 0)
        if (alarmTime < now) {
            alarmTime.setDate(alarmTime.getDate() + 1);
        }
        const diff = alarmTime.getTime() - now.getTime();
        timerId.current = setTimeout(() => {
            console.log('Triggered')
            handleDelete(alarm.id)
        }, diff)
        return () => {
            if(timerId.current) clearTimeout(timerId.current)
        }
    }, [alarm.time])
    const handleDelete = (id: number) => {
        setAlarms(alarms.filter(alarm => alarm.id !== id))
        if(timerId.current) clearTimeout(timerId.current)
    }
    return (
      <div>
        {alarm.label} {alarm.time} <button onClick={() => handleDelete(alarm.id)}>Delete</button>
      </div>
    )
  }
  
  export default Alarm
  