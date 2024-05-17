'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmptyIMG from '../../../public/ImageView.png'
import Image from "next/image";

export default function SlickNews() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        variableWidth: true,
        className: "slider variable-width",
    };

    const renderItemsSlick = () => {
        return <div className="pr-[10px]">
            <Image src={EmptyIMG} alt="EmptyIMG" />
            <div className="mt-[5px]">Nội dung tin tức nổi bật nhất của DTak</div>
            <div className="text-[14px] text-[#555555] font-normal">Category | 01/01/2024</div>
        </div>
    }

    return <div className="slider-container mt-[20px]">
        <Slider {...settings}>
            <div style={{ width: 270 }}>
                {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
            <div style={{ width: 270 }}>
            {renderItemsSlick()}
            </div>
        </Slider>
    </div>
}