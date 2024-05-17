'use client'

import Image from "next/image";
import MyLayout from "../Layout/Layout";
import Logo from '../../../public/logo.svg'
import FB from '../../../public/fb.svg'
import YT from '../../../public/yt.svg'
import Link from '../../../public/link.svg'
import Email from '../../../public/email.svg'
import { Modal } from "antd";
import { useState } from "react";
import ProcessingIcon from '../../../public/processing.svg'

export default function MyFooter({contentFooter}:any) {
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
  
  return (
    <MyLayout>
      <div className="xl:px-[150px] lg:px-[40px] pt-[30px] pb-[60px] px-4">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mt-[30px]">
            <div className="text-[32px] font-bold">{contentFooter.footer1}</div>
            <div>{contentFooter.footer2}</div>
            <div>Phone:(+84) 9146.123.88</div>
            <div>Email: <a href="mailto:ducbt@dtak.vn">ducbt@dtak.vn</a></div>
            <div>Website: <a href="https://dtak.vn" className=":hover:color-[red]" target="_blank">https://dtak.vn</a> | <a target="_blank" href="https://chutiem.vn">https://chutiem.vn</a></div>
          </div>

          <div className="mt-[30px] lg:mt-[-20px] flex flex-col">
            <div className="text-[32px] font-bold">{contentFooter.footer3}</div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer14}</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer4}</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer5}</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer6}</a>
            </div>
          </div>

          <div className="mt-[30px] lg:mt-[-20px]">
            <div className="text-[32px] font-bold">Sản phẩm & Dịch vụ</div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>Chủ Tiệm POS</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>Outsource</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer8}</a>
            </div>
            <div>
            <a className="cool-link" onClick={() => handleModal()}>{contentFooter.footer9}</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex gap-2 items-center">
            <a href="https://www.facebook.com/groups/chutiem.vn" target="_blank">
            <Image src={FB} alt="FB" style={{width: '25px', height:'35px'}} />
            </a>
            <a href="https://www.youtube.com/channel/UCaByHU0cFVT9VaLy3X1LNFQ" target="_blank">
            <Image src={YT} alt="FB" style={{width: '25px', height:'35px'}} />
            </a>
            <a href="https://zalo.me/g/mmnrnb345" target="_blank">
            <Image src={Link} alt="FB" style={{width: '25px', height:'20px'}} />
            </a>
            <a href="mailto:chutiem@chutiem.vn" target="_blank">
            <Image src={Email} alt="FB"  style={{width: '25px', height:'17px'}}/>
            </a>
          </div>

          <div className="mt-[30px] lg:mt-0 text-right">
            <div className="text-[#555555] font-normal">© {new Date().getFullYear()} DTAK DIGITAL SOLUTIONS CO.,LTD. All rights reserved</div>
            <div className="text-[#555555] font-normal">{contentFooter.footer10} | MST: 0110696855</div>
          </div>
        </div>
      </div>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={contentFooter.footer13}
        cancelText={contentFooter.footer12}
        centered
        closeIcon={false}
      >
        <div className="flex justify-center">
          <Image src={ProcessingIcon} alt="ProcessingIcon" className=" w-[400px]"/>
        </div>
        <div className="text-[18px] font-bold mt-[20px]">{contentFooter.footer11}</div>
      </Modal>
    </MyLayout>
  );
}
