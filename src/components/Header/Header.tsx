'use client'

import Image from "next/image";
import Logo from '../../app/logo1.png'
import Link from "next/link";
import SeachIcon from '@/assets/icons/search.svg'
import { Modal, Select } from "antd";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import ProcessingIcon from '../../../public/processing.svg'

const { Option } = Select;

export default function MyHeader({t}: any) {
  console.log(t)
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { value: '1', label: 'Vietnam', img: 'https://media.istockphoto.com/id/864417828/vi/vec-to/c%E1%BB%9D-vi%E1%BB%87t-nam.jpg?s=612x612&w=0&k=20&c=4wqSdySA6JkSO6Xw6m4255maL3mqQx4m0tTH3Q14u_U=' },
    { value: '2', label: 'English', img: 'https://media.istockphoto.com/id/955320026/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-c%E1%BB%9D-hoa-k%E1%BB%B3.jpg?s=612x612&w=0&k=20&c=6JyiGEwHoAFF62Dn0LHz0SQg5nDDTxI6BH9odrrJhoo=' },
  ];
  const router = useRouter()
  const { locale } = useParams()

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

  const handleChangeLocale = (value: string) => {
    if (value === '1') {
      router.push(`/vi`)
    } else {
      router.push('/en')
    }
  }

  return (
    <section className="px-[20px] xl:px-[150px] lg:px-[40px] flex justify-between  py-[24.5px]">
      {/* LOGO */}
      <div className="flex items-center gap-[40px]">
        <div style={{ cursor: 'pointer' }}>
          <Image src={Logo} width={131} height={30} alt="LOGO" />
        </div>

        {/* MENU DESKTOP */}
        <div className="text-[18px] gap-[40px] text-[#111827] hidden lg:flex">
          <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu1}</Link>
          <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu2}</Link>
          <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu3}</Link>
          <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu4}</Link>
          <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu5}</Link>
        </div> 
      </div>

      {/* MENU MOBILE */}
      <div className="flex flex-row-reverse gap-8">
        <div className="hamburger-menu-container lg:hidden">
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <div style={{ cursor: 'pointer' }} className="flex justify-center my-[40px]">
              <Image src={Logo} width={131} height={30} alt="LOGO" />
            </div>
            <ul>
              <li ><Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu1}</Link></li>
              <li ><Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu2}</Link></li>
              <li ><Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu3}</Link></li>
              <li > <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu4}</Link></li>
              <li > <Link className="cool-link" href={'#'} onClick={() => handleModal()}>{t.menu5}</Link></li>
            </ul>
          </div>
        </div>

        <div className="hidden gap-[10px] md:flex">
          <Image onClick={() => handleModal()} src={SeachIcon} width={23} height={23} alt="LOGO" className=" cursor-pointer" />

          <Select
            placeholder="Select a fruit"
            className="w-[120px]"
            defaultValue={locale === 'vi' ? '1' : '2'}
            onChange={(e) => handleChangeLocale(e)}
          >
            {items.map(item => (
              <Option key={item.value} value={item.value}>
                <div className="flex items-center">
                  <img src={item.img} alt={item.label} style={{ width: 20, height: 20, marginRight: 8, borderRadius: '50%' }} />
                  {item.label}
                </div>
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={t.goto}
        cancelText={t.cancel}
        centered
        closeIcon={false}
      >
        <div className="flex justify-center">
          <Image src={ProcessingIcon} alt="ProcessingIcon" className=" w-[400px]"/>
        </div>
        <div className="text-[18px] font-bold mt-[20px]">{t.warning}</div>
      </Modal>
    </section>
  );
}
