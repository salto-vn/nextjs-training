import  {useRef , useEffect, useCallback, useState } from "react"
import { useRouter } from "next/router"
import { signInWithGoogle } from "../../lib/firebase";

export default function loginModal(){
    const [user, setUser] = useState<UserData | null>(null);
    const router = useRouter()
    const initialRef: any = null;
    const  modalRef = useRef(initialRef)

    interface UserData {
        id: string
        username: string
        password: string
        phone: number
        email: string
        token: string 
      }[]

    const style = {
        "text-decoration" : "underline",
        "display" : "flex"
    }

    const handleLogIn =  async(e:any)=>{
        e.preventDefault()
        const modal = modalRef.current;
        modal!.className = "modal fade"
        modal!.style = "display: none"
        const modalBackDrop = document.getElementsByClassName("modal-backdrop fade show") as HTMLCollectionOf<HTMLElement>
        for (let i = 0; i < modalBackDrop.length; i++) {
            modalBackDrop[i].style.display = "none";
          }
        
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const request = await fetch("https://l11ee.mocklab.io/login",{
                method: "POST",
                headers: {"Content-type":"application/json",
                            "Authorization": "Bearer 914c22330559de02c1e2ba2317a09e0f"},
                body: JSON.stringify(data)
            })
        const user: UserData = await request.json()
        window.localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
        router.push(`/profile/${user.id}`)

        return {props: { user }}

    }  
    return (
        <>
        <div
        className="modal fade"
        ref={modalRef}
        id="loginModal"
        // tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
            <form onSubmit={handleLogIn}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" autoComplete="off" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
                </div>
                <div className="mb-3" style={style}>
                    <label className="form-check-label" htmlFor="exampleCheck1" > Don't have an account?  </label>
                    <a      
                            className="nav-link"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#regisModal"
                            
                        >
                            Sign Up Now
                    </a>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button className="btn btn-primary" onClick={signInWithGoogle}>
            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
            <span> Continue with Google</span>
            </button>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}