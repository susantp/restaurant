import React from 'react';

function OrderPromoComponent({title, subTitle, link}: any) {
    return (
        <div className={`bg-orange-300 `}>
            <div className={`sectionDiv rounded-tl-full rounded-br-full bg-violet-700 item`}>
                <div className={`flex flex-col gap-y-6`}>
                    <h2 className={`headerText sm:text-3xl md:text-4xl lg:text-4xl`}>{title}</h2>
                    <p className={`text-center text-white sm:text-sm `}>{subTitle}</p>
                    <a className={`text-center`} href={link}>
                        <button className={`w-32 h-16 text-white font-light rounded-3xl bg-red-600 `}>Order Now</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OrderPromoComponent;