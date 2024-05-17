'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChutiemIMG from '../../../public/chutiem.jpg'
import ChatIMG from '../../../public/chatgpt.jpg'
import SecuIMG from '../../../public/security_data.jpg'
import ProcessingIcon from '../../../public/processing.svg'
import Image from "next/image";
import { Modal } from "antd";
import { useState } from "react";

export default function SlickNews({ content2,
    content3,
    content4,
    content5,
    content6,content7,content8,content9 }: any) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 2,
        nextArrow: <></>,
        autoplaySpeed: 6000,
        prevArrow: <></>,
        variableWidth: true,
        className: "slider variable-width",
    };
    const [isModalVisible, setIsModalVisible] = useState(false)


    const handleOk = () => {
        setIsModalVisible(false)
        window.open('https://chutiem.vn/', '_blank', 'noopener,noreferrer');
    }

    const handleModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const renderItemsSlick = (img: any, content: any, des: any) => {
        return <div className="pr-[10px] cursor-pointer " onClick={() => handleModal()}>
            <div className=" rounded-[20px] overflow-hidden">
                <Image src={img} alt="EmptyIMG" />
            </div>
            <div className="mt-[5px]">{content}</div>
            <div className="text-[14px] text-[#555555] font-normal">{des}</div>
        </div>
    }

    return <div className="slider-container mt-[20px]">
        <Slider {...settings}>
            <div style={{ width: 270 }}>
                {renderItemsSlick(ChutiemIMG, content2, content5)}
            </div>
            <div style={{ width: 270 }}>
                {renderItemsSlick(ChatIMG, content3, content6)}
            </div>
            <div style={{ width: 270 }}>
                {renderItemsSlick(SecuIMG, content4, content5)}
            </div>
            <div style={{ width: 270 }}>
                {renderItemsSlick(ChutiemIMG, content2, content5)}

            </div>
            <div style={{ width: 270 }}>
                {renderItemsSlick(ChatIMG, content3, content6)}

            </div>
            <div style={{ width: 270 }}>
                {renderItemsSlick(SecuIMG, content4, content5)}
            </div>
        </Slider>
        <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText={content8}
            cancelText={content9}
            centered
            closeIcon={false}
        >
            <div className="flex justify-center">
                <Image src={ProcessingIcon} alt="ProcessingIcon" className=" w-[400px]" />
            </div>
            <div className="text-[18px] font-bold mt-[20px]">{content7}</div>
        </Modal>
    </div>
}