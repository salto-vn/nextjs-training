import styles from '../styles/modules/nav.module.css'
import Link from 'next/link'

export default function LayoutComponent(){
    return (
        <>
        <div>
            <h1 className={styles.description}>Nav</h1>
            <button className='btn btn-primary'>Submit</button>
        </div>

        <header>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/post">Post</Link>
                </li>
                <li>
                    <Link href="/post/first">First Post</Link>
                </li>
                <li>
                    <Link href="/post/second">Second Post</Link>
                </li>
                <li>
                    <Link href="/post/demo">Demo</Link>
                </li>
                <li>
                    <Link href="/font">Font</Link>
                </li>
                <li>
                    <Link href="/image">Image</Link>
                </li>
            </ul>
        </header>
        </>
    )
}