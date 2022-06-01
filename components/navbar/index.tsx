import Link from "next/link";

export default function Navbar() {
  return <div>
    <div className="me-1">
      <Link href="/about" >
        <a>About Me</a>
      </Link>
    </div>
    <div className="me-1">
      <Link href="/about/detail" >
        <a>Detail</a>
      </Link>
    </div>
    <div className="me-1">
      <Link href="/contact" >
        <a>Contact Us</a>
      </Link>
    </div>
    <div className="me-1">
      <Link href={{ pathname: '/about/[slug]', query: { id: 10 } }} as="/about/my-slug" >
        <a>Test Dynamic Route</a>
      </Link>
    </div>
    <div className="me-1">
      <Link href="/[dynamic]/[id]" as="/customized/content" >
        <a>Test Dynamic Nested Route</a>
      </Link>
    </div>
  </div>
}