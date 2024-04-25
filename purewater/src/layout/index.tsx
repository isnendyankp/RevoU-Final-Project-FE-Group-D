import { Footer } from '../components';
import { ReactNode } from 'react';

interface Prop{
    children:ReactNode
}

const Layout = ({children}:Prop)=>{
    return (
        <>
        {children}
        <Footer/>
        </>
    )
}

export default Layout;