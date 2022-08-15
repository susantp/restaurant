import React from 'react';

function NavigationItems({items}: any): JSX.Element {
    return (
        <div className={`flex justify-evenly space-x-10`}>
            {items.map((item: any) => <div className={item.divStyle}
                                           key={item.slug}>{item.title} </div>)}
        </div>
    );
}

export default NavigationItems;