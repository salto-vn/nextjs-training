import Image from "next/image"
import profilePic from '../../public/default.png'

export default function () {
    return (
        <>
        <h1>IMAGE</h1>
        {/* // Local Image */}
        {/* <Image src={profilePic} alt="Picture of the author" fill priority/> */}

        {/* // Remote Image */}
        <Image src="/default.png" alt="Picture of the author" width="300" height="300" priority/>

        {/* // Sizes */}
        {/* <div>
            <Image
            src="/default.png"
            alt="Picture of the author"
            fill
            sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 50px,
              "/>
        </div> */}
        </>
    )
}