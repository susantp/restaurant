import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi"
function NavigationItems({items}: any): JSX.Element {
    return (
        <>
            <div className={`flex justify-evenly space-x-10 hidden md:flex `}>
                {items.map((item: any) =>
                    <div
                        className={item.divStyle}
                        key={item.slug}>
                        {item.title}
                    </div>)
                }
            </div>
            <div className={`flex justify-evenly space-x-10 md:hidden`}>
                <GiHamburgerMenu className={`text-4xl`}></GiHamburgerMenu>
            </div>
        </>
    );
}

export default NavigationItems;