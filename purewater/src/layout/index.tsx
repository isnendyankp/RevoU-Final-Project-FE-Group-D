import { Footer, Navbar } from '../components';
import { ReactNode } from 'react';

interface Prop{
    children:ReactNode
}

const Layout = ({children}:Prop)=>{
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout;