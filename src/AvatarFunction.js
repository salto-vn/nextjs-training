import { useEffect, useState } from "react"

const AvatarFunction = () => {

  const [avatar, setAvatar] = useState()

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file)

    setAvatar(file)
  }

  useEffect(() => {

    //Clean up avatar
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  return (
    <div>
      <input onChange={handlePreviewAvatar} type="file"></input>
      {avatar && (
        <img src={avatar.preview} alt="" style={{width: "20%"}} />
      )}
    </div>
  )
}

export default AvatarFunction
