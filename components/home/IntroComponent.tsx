import React, {FC} from 'react';

// interface SingleIntroComponentProps {
//     title: string,
//     icon: JSX.Element,
//     image:string,
//     slug: string,
// }

interface IntroComponentProps {
    title: string,
    description: string,
    pages:Array<any>
}

const IntroComponent: FC<IntroComponentProps> = ({title, description, pages }): JSX.Element => {
    // const SingleIntroComponent: FC<SingleIntroComponentProps> = ({title, icon, slug, image}): JSX.Element =>
    //     <div className={`flex flex-col gap-y-7 items-center`}>
    //         <div>
    //             {icon}
    //             {/*<Image src={icon} width={150} height={150} alt={slug}/>*/}
    //         </div>
    //         <div>
    //             <p className={`text-4xl text-slate-600`}>{title}</p>
    //         </div>
    //     </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv `}>
                <h2 className={`headerText text-4xl`}>{title}</h2>
                <p className={`text-center`} dangerouslySetInnerHTML={{ __html: description }}></p>
                {/*<div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  gap-y-16 mt-5 `}>*/}
                {/*    {processes.map((item) =>*/}
                {/*        <SingleIntroComponent*/}
                {/*            key={item.slug}*/}
                {/*            slug={item.slug}*/}
                {/*            title={item.title}*/}
                {/*            image={item.image}*/}
                {/*            icon={item.icon}*/}
                {/*        />*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default IntroComponent;