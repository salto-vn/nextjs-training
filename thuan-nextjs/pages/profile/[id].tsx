import { useRouter } from "next/router";

 function ProfilePage({userProfile}:any){
    const router = useRouter()
    const userId = router.query.id as string
    return (
        <>
        <h1>User ID: {userId} </h1>
        <br/>
        <h3>Email: {userProfile.email}</h3>
        <h3>User Name: {userProfile.username}</h3>
        <h3>Phone: {userProfile.phone}</h3>

        </>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://l11ee.mocklab.io/profile/2b42udh8")
    const userProfile = await res.json()
    return {props: { userProfile }}
}

export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/profile/[id]',
        // Object variant:
        { params: { id: "userId" } },
      ],
      fallback: "blocking",
    }
  }


export default ProfilePage