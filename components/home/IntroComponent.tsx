import React, {FC} from 'react';
import Image from "next/image";

interface IntroPageBlock {
    title: string,
    slug: string,
    image: string,
    thumbnail: string
}

interface IntroComponentProps {
    title: string,
    description: string,
    pages: Array<IntroPageBlock>
}

const IntroComponent: FC<IntroComponentProps> = ({title, description, pages}): JSX.Element => {

    const SingleIntroComponent: FC<IntroPageBlock> = ({title, slug, thumbnail}): JSX.Element =>
        <div className={`flex flex-col gap-y-7 items-center cursor-pointer transition ease-in-out delay-150  `}>
            <div className={`w-80 transition ease-in-out blur-sm hover:blur-none hover:scale-110`}>
                <Image className={`rounded-full `}
                       src={thumbnail}
                       width={300}
                       height={300}
                       layout={"responsive"}
                       quality={20}

                       alt={thumbnail}/>
            </div>
            <div className={`relative bottom-1/2 `}>
                <p className={`text-4xl sm:text-3xl md:text-md text-white p-4 rounded-tl-2xl rounded-br-2xl bg-orange-400 `}>{title}</p>
            </div>
        </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv item`}>
                <div className={`flex flex-col gap-y-16`}>
                    <h2 className={`headerText text-4xl`}>{title}</h2>
                    <p className={`text-center`} dangerouslySetInnerHTML={{__html: description}}></p>
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3`}>
                    {pages.map((page) =>
                        <SingleIntroComponent
                            key={page.slug}
                            slug={page.slug}
                            title={page.title}
                            image={page.image}
                            thumbnail={page.thumbnail}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default IntroComponent;