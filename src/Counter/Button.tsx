import { ReactNode } from "react"

interface ButtonProps {
    callback: () => void,
    children: ReactNode
}
const Button:React.FC<ButtonProps> = ({callback, children}) => {
  return (
    <>
      <button onClick={callback}>{children}</button>
    </>
  )
}

export default Button
