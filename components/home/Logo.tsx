import React from 'react';
import Image from "next/image";

function Logo({title, imagePath}: any): JSX.Element {
    return (
        <Image src={imagePath} alt={title} width={30*6} height={8*6}></Image>
    );
}

export default Logo;