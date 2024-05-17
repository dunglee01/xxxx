import Image from "next/image";
import Code from '../../../public/code.png'
import Cycle from '../../../public/cycle.png'
import Group from '../../../public/group.png'
import Chutiem from '../../../public/chutiem.png'

export default function ServiceCustom({contentService}: any) {
    const renderTag = (src: any, title: string, des: string) => {
        return <div className="border z-0 bg-[#fff] shadow-box rounded-[20px] w-[45%] lg:w-[188px] pt-[15px] px-[10px] pb-[5px]">
            <div>
                <Image src={src} alt="code" />
            </div>
            <div className="text-[18px] font-semibold mt-[15px]">
                {title}
            </div>
            <div>
                {des}
            </div>
        </div>
    } 

    return <>
        <div className="container md:mx-auto lg:px-[40px] xl:px-0">
            <div className="pt-[30px] xl:px-[150px] lg:justify-between px-[10px] lg:flex lg:gap-[60px]">
                <div>
                    <div className="text-[24px] xl:text-[32px] font-bold text-[#554AF0]">{contentService.service1}</div>
                    <div className="mt-[15px] lg:w-[400px] xl:w-[273px]">{contentService.service2}</div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap  gap-6 xl:gap-6 justify-around mt-[35px]">
                    {renderTag(Code, 'Outsource', contentService.service4)}
                    {renderTag(Cycle,  contentService.service5,  contentService.service6)}
                    {renderTag(Group, contentService.service7, contentService.service8)}
                    {renderTag(Chutiem, contentService.service9, contentService.service10)}
                </div>
            </div>
        </div>
    </>
}