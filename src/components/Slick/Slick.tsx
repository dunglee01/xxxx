import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ArrowIcon from '../../assets/icons/arrow.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider1 from '../../../public/slider1.png'


export default function SlickCustom({contentIntro}: any) {
    let sliderRef: any = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const next = () => {
        sliderRef.slickNext();
    };

    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        customPaging: function (i: any) {
            return (
                <div className="text-[#fff] mr-[200px] w-[25px] h-[5px]  rounded-md" style={{ background: activeSlide === i ? '#FE6D00' : '#E3E3E4' }} />
            );
        },
        afterChange: (current: any) => {
            setActiveSlide(current);
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>
    };

    const RenderSlider = () => {
        return (<div className="h-[500px] relative">
            <div className=" absolute z-0" >
                <Image src={Slider1} alt="Slider1" className="md:h-[336px] md:w-[500px] lg:h-[420px]  lg:w-[700px]"/>
            </div>
            <div className="info-slider absolute top-[100px] h-[386px] md:w-[468px] md:right-0 w-full z-1 rounded-lg pt-[28px] pl-[20px] pr-[34px]">
                <div className="text-[24px] lg:text-[32px] font-bold text-[#554AF0]">{contentIntro.intro1}</div>
                <div className="text-[24px] lg:text-[32px] font-bold text-[#554AF0]">{contentIntro.intro2}</div>
                <div className="text-[14px] md:text-[16px] text-[#111827] mt-[15px]">
                {contentIntro.intro3}
                </div>
                <div className="text-[14px] md:text-[16px] text-[#111827]">
                {contentIntro.intro4}
                </div>
                <div className="text-[14px] md:text-[16px] text-[#111827]">
                {contentIntro.intro5}
                </div>
            </div>
        </div>)
    }

    return <div className="slider-container relative">
        <Slider {...settings} ref={slider => {
            sliderRef = slider;
        }}>
            <RenderSlider />
            <RenderSlider />
        </Slider>

        <div className=" absolute right-[-50px] top-[220px] cursor-pointer hidden md:block" onClick={previous}>
            <Image src={ArrowIcon} width={40} height={40} alt="zxc" />
        </div>
        <div className=" absolute left-[-50px] top-[220px]  cursor-pointer hidden md:block" onClick={next}>
            <Image src={ArrowIcon} width={40} height={40} alt="zxc" style={{ rotate: '180deg' }} />
        </div>
    </div>
}