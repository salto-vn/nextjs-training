

//UseEffect
// 1.UseEffect(callBack)
// - Gọi call back mỗi lần re-render
// - Gọi call back sau khi component thêm element vào DOM
// 2. UseEffect(callback, [])
// Chỉ gọi call back 1 lần sau khi component đượcc mount
// 3. UseEffect(callback, dependences)

//======================Call back
// 1. call back function được gọi sau khi component mount
// 2. Clean up function luôn được gọi trươccs khi component unmount


import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function ContentUseEffect() {

  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
      console.log('Mounted')
      document.title = title
  })

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <h1>UseEffect</h1>
      {width}
      {tabs.map(tab => (
        <button
          key={tab}
          style={ type === tab ? {color: '#fff', backgroundColor: '#333'} : {}

          }
          onClick={() => setType(tab)}>{tab}
          </button>
      ))}
      <ul>
          {posts.map( post => (
             <li key={post.id}>{post.title || post.name}</li>
          ))}
      </ul>
      {
        showGoToTop && (
          <button style={{
            position: 'fixed',
            right: 20,
            bottom: 20
          }}>Go to top</button>
        )
      }
      
    </div>
  )
}

export default ContentUseEffect
