import Link from "next/link"
import LoginForm from "../login"

export default function Navbar() {

  return <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" >
          <a className="navbar-brand" >HOME</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/about" >
                <a className="nav-link" aria-current="page">About Me</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about/detail" >
                <a className="nav-link">Detail</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact" >
                <a className="nav-link">Contact Us</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={{ pathname: '/about/[slug]', query: { id: 10 } }} as="/about/my-slug">
                <a className="nav-link">Dynamic Route</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/[dynamic]/[id]" as="/customized/content" >
                <a className="nav-link">Nested Dynamic Route</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/xx000xxx" >
                <a className="nav-link">Custom Error Page</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/login" >
                <a className="nav-link">Login with form</a>
              </Link>
            </li>
          </ul>
          <LoginForm />
        </div>
      </div>
    </nav>

  </>
}
