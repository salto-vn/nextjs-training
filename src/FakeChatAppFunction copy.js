import { memo, useEffect, useState } from "react"

const lessons = [
  {
    id: 1,
    name: 'ReactJs la gi? Tai sao nen hoc ReactJS'
  },
  {
    id: 2,
    name: 'SPA, MPA la gi?'
  },
  {
    id: 3,
    name: 'Arrow Function'
  },

]

const FakeChatAppFunction = () => {
  const [lessonId, setLessonId] = useState(1)
  

  useEffect(() => {
    const handleCmt = ({detail}) => {
      console.log(detail)
    }
  
  
    window.addEventListener(`lession-${lessonId}`, handleCmt)

    return ( () => {
      window.removeEventListener(`lession-${lessonId}`, handleCmt)
    })
  })

  

  return (
    <div>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
          onClick={() => setLessonId(lesson.id)}>
          {lesson.name}
        </li>
      ))}
    </div>
  )
}

export default memo(FakeChatAppFunction) 
