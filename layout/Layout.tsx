import React, {FC} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import GoTop from "./GoTop";
import Content from "./Content";

const Layout: FC<any> = ({children, navBarContent}): JSX.Element => {
    return (
        <div className={`bg-slate-100 `}>
            <Navbar content={navBarContent}></Navbar>
            <Content>{children}</Content>
            <GoTop></GoTop>
            <Footer></Footer>
        </div>
    );
}

export default Layout;