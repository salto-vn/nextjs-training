
export default function regisModal(){
    const style = {
        "text-decoration" : "underline",
        "display":"flex"
    }

    return(
       <>
        <div
        className="modal fade"
        id="regisModal"
        // tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="username" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="phone" required/>
                </div>
                <div className="mb-3" style={style}>
                    <label htmlFor="exampleInputPassword1" className="form-label" >You have already exist anccount?
                     <a
                     className="nav-link"
                     type="button"
                     data-bs-toggle="modal"
                     data-bs-target="#loginModal"
                     > Log In now</a>  </label>
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