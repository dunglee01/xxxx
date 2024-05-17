import React, { useRef, useState } from "react";
import Slider from "react-slick";
import ArrowIcon from '../../assets/icons/arrow.svg'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function SlickCustom() {
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
            <div className=" absolute w-full h-[250px] md:h-[336px] md:w-[500px] lg:w-[700px] lg:h-[420px] img-slider1 lg:img-slider1Des border-4 border-[#fff] rounded-lg z-0" />
            <div className="info-slider absolute top-[100px] h-[386px] md:w-[468px] md:right-0 w-full z-1 rounded-lg pt-[28px] pl-[20px] pr-[34px]">
                <div className="text-[24px] lg:text-[32px] font-bold text-[#554AF0]">Chuyển đổi số...</div>
                <div className="text-[24px] lg:text-[32px] font-bold text-[#554AF0]">có quá muộn để bắt đầu?</div>
                <div className="text-[14px] text-[#111827] mt-[15px]">
                    - Trí tuệ nhận tạo (AI) và máy học, các công nghệ hiện hữu đang giúp rất nhiều doanh nghiệp tiết kiệm 70% chi phí bộ máy nhân sự và vận hành!
                </div>
                <div className="text-[14px] text-[#111827]">
                    - Tuy nhiên chúng sẽ vô dụng nếu doanh nghiệp của bạn vẫn đang dùng giấy tờ, Excel thủ công với các quy trình và dữ liệu không được chuẩn hóa.
                </div>
                <div className="text-[14px] text-[#111827]">
                    *Câu hỏi? Thay đổi để phát triển hay chấp nhận tụt lại phía sau?
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