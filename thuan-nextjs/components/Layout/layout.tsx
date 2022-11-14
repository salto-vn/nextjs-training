import Footer  from "../Footer/footer";
import Navbar from "../Navbar/navbar";

export default function Layout({children}:any){
    return(
        <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}