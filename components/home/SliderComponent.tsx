import React, {FC, useEffect, useState} from 'react';
import {FaRegDotCircle} from "react-icons/fa";

const SliderComponent: FC<any> = ({sliders}): JSX.Element => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [transition, setTransition] = useState('');

    useEffect(() => {
        const id = setInterval(() => {
            setSlideIndex((prevState) => slideIndex === sliders.length - 1 ? 0 : prevState + 1)
            setTransition('')
        }, 8000)
        return () => {
            setTransition(`animate__animated animate__zoomInDown`)
            clearInterval(id)
        }
    }, [slideIndex, sliders.length])

    function increment(n: any) {
        if (n === sliders.length - 1) {
            return 0
        } else {
            return n + 1
        }
    }

    const SingleSlider: FC<any> = ({slide}): JSX.Element => {
        return (
            <div className={`sectionDiv w-full items-center ${transition}`}>
                <p className={`font-bold text-white text-2xl text-center`}>{slide.subTitle}</p>
                <p className={`font-bold text-white text-6xl text-center`}>{slide.title}</p>
                <p className={`text-white  sm:px-16 md:px-6 px-16 xl:px-64 text-sm text-center leading-relaxed`}>{slide.description}</p>
            </div>
        )
    }
    const filterSlider: any = (slider: any) => {
        return slider.position === slideIndex
    }
    const mapSlides: any = (slide: any) => <SingleSlider key={slide.id} slide={slide}/>

    return (
        <div className={`bg-cover`} style={{backgroundImage: `url(/slider.avif)`}}>
            <div className={`bg-black bg-opacity-50 text-center py-4`}>
                {sliders.filter(filterSlider).map(mapSlides)}
                <div className={`flex justify-center gap-x-4`}>
                    {
                        sliders
                            .map(
                                (item: any, key: any) =>
                                    <FaRegDotCircle
                                        key={item.id}
                                        className={`text-2xl text-white cursor-pointer`}
                                        onClick={() => setSlideIndex(increment)}
                                    />
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;