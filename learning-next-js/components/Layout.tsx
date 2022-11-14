import styles from '../styles/modules/nav.module.css'

export default function LayoutComponent(){
    return (
        <>
        <div>
            <h1 className={styles.description}>Nav</h1>
            <button className='btn btn-primary'>Submit</button>
        </div>
        </>
    )
}