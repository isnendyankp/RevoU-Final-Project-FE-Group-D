import { Footer } from '../components';
import { ReactNode } from 'react';
import { FAQ } from '../components';

interface Prop{
    children:ReactNode
}

const Layout = ({children}:Prop)=>{
    return (
        <>
        <FAQ/>
        {children}
        <Footer/>
        </>
    )
}

export default Layout;