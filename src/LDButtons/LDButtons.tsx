import { useState } from 'react'

const LDButtons: React.FC = () => {
  const [likes, setLikes] = useState<number>(50)
  const [dislikes, setDislikes] = useState<number>(10)
  const [activeBtn, setActiveBtn] = useState<'like' | 'dislike' | 'none'>('none')

  const handleReactionBtn = (btn: 'like' | 'dislike') => {
    if (activeBtn === 'none'){
      if (btn === 'like'){
        setLikes(likes+1)
      }
      else if(btn === 'dislike'){
        setDislikes(dislikes+1)
      }
      setActiveBtn(btn)
    } else if(activeBtn === btn){
      if (btn === 'like')
        setLikes(likes-1)
      if(btn === 'dislike') 
        setDislikes(dislikes-1)
      setActiveBtn('none')
    } else {
      if (btn === 'like') {
        setLikes(likes+1)
        setDislikes(dislikes-1)
      }
      if(btn === 'dislike') {
        setDislikes(dislikes+1)
        setLikes(likes-1)
      }
      setActiveBtn(btn)
    }
  }

  return (
    <>
      <button style={{color: 'white', backgroundColor: activeBtn === "like" ? "blue" : "grey"}} onClick={() => {handleReactionBtn('like')}}>Like {likes}</button>
      <button style={{color: 'white', backgroundColor: activeBtn === "dislike" ? "red" : "grey"}} onClick={() => {handleReactionBtn('dislike')}}>Dislikes {dislikes}</button>
    </>
  )
}

export default LDButtons
