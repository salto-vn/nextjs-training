 function Profile(){
    
    return(
        <>
        <h1>Profile</h1>
        </>
    )
}

export async function getStaticProps(){
    const res = await fetch("")
    const profile = res.json()
}

export default Profile