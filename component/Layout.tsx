import Navbar from "./Navbar";

export default function Layout({children}: any) {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Navbar />
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}
