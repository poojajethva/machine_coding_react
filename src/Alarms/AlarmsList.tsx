import Alarm from "./Alarm"
import { AlarmType } from "./types"

const AlarmsList = ({alarms, setAlarms}: {alarms: AlarmType[], setAlarms: React.Dispatch<React.SetStateAction<AlarmType[]>>
}) => {
  return (
    <div>
      {alarms.length > 0 ? alarms.map((alarm) => <Alarm key={alarm.id} alarm={alarm} alarms={alarms} setAlarms={setAlarms} />) : <p>Add alarms</p>}
    </div>
  )
}

export default AlarmsList
