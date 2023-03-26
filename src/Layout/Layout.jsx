import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Layout = () => {
    return (
        <>
           <nav><Navbar/></nav>
           <main>
                <Outlet/>
           </main>
        </>
    )
}

export default Layout