import { useEffect, useCallback } from "react"
import { useRouter } from "next/router"

export default function Modal(){
    const router = useRouter()
    const handleLogIn =  useCallback((e:any)=>{
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        try {
            fetch("https://l11ee.mocklab.io/login",{
                method: "POST",
                headers: {"Content-type":"application/json",
                            "Authorization": "Bearer 914c22330559de02c1e2ba2317a09e0f"},
                body: JSON.stringify(data)
            })
            .then((response) => {
                if(response.ok){

                    // save in client browser, cannot disappear when close the browser
                    window.localStorage.setItem("user", JSON.stringify(response))
                    // save in client browser but disappear when close the browser
                    window.sessionStorage.setItem("user", JSON.stringify(response))

                    router.push("/")
                }
                response.json()
            })
        } catch (error) {
            console.log(error)
        }

    },[])   
    return (
        <>
        <div
        className="modal fade"
        id="exampleModal"
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
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}