import React, {FC} from 'react';
import Image from "next/image";

interface IntroPageBlock {
    title: string,
    slug : string,
    image : string
}

interface IntroComponentProps {
    title: string,
    description: string,
    pages:Array<IntroPageBlock>
}

const IntroComponent: FC<IntroComponentProps> = ({title, description, pages }): JSX.Element => {

    const SingleIntroComponent: FC<IntroPageBlock> = ({title,  slug, image}): JSX.Element =>
        <div className={`flex flex-col gap-y-7 items-center`}>
            <div>
                <Image className={`rounded-full`} src={image} width={150} height={150} alt={slug}/>
            </div>
            <div>
                <p className={`text-4xl text-slate-600`}>{title}</p>
            </div>
        </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv `}>
                <h2 className={`headerText text-4xl`}>{title}</h2>
                <p className={`text-center`} dangerouslySetInnerHTML={{ __html: description }}></p>
                <div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  gap-y-16 mt-5 `}>
                    {pages.map((page) =>
                        <SingleIntroComponent
                            key={page.slug}
                            slug={page.slug}
                            title={page.title}
                            image={page.image}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default IntroComponent;