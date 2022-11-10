import Link from "next/link"
import {useState, useEffect} from "react"
import Firebase from '../../lib/firebase';
import type { User } from "../../type/user";

export default function navbar(){
    const [authUser, setAuthUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    type Status =  {
        token: string ,
        username: string
    }
    const [isLogin, setIsLogin] = useState<Status | null>(null)
    const formatterUser = (user:User) => ({
        email:  "khuuquocthuan@gmail.com",
        password:  "123456"
    })
    const authStateChanged = async (authState:User) => {
        if (!authState) {
          setAuthUser(null)
          setLoading(false)
        }
            setLoading(true)
            var userFormatted : any = formatterUser(authState)
            setAuthUser(userFormatted )
            setLoading(false)
    }
    
    useEffect(()=>{
        const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
        const isLogin : Status = JSON.parse(localStorage.getItem('user') || '')
        setIsLogin(isLogin)
        if(isLogin?.token != null){
            console.log("user login")
        }   
        else {
        console.log("user not login")
        }
        return () => unsubscribe()
    },[])
    
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/link">action/index</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/action/create">action/create</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/action/1">action/1</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="/articles">articles</Link>
                        </li>
                        <li className="nav-item">
                        <a
                            className="nav-link"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#loginModal"
                            
                        >
                            {isLogin?.username || "LogIn/SignUp"}
                        </a>
                        
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
