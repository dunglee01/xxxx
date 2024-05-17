import Image from "next/image";
import ProcessMb from '../../../public/processmb.png'
import RightView from '../../../public/RightView.png'

export default function Process({contentProcess}:any) {
    return <div className=" process-container">
        <div className="container lg:px-[40px] xl:px-[150px] md:mx-auto mt-[10px] pt-[30px] px-[10px] pb-[20px] lg:flex lg:flex-row-reverse lg:justify-between">
            <div>
                <div className="text-[24px] xl:text-[32px] font-bold text-[#554AF0]">{contentProcess.process1}</div>
                <div className="mt-[20px] lg:w-[600px] xl:w-[309px] lg:text-end">
                {contentProcess.process2}
                </div>
            </div>

            <div className="mt-[40px] flex justify-center md:hidden">
                <Image src={ProcessMb} alt="process" />
            </div>

            <div className="mt-[40px] hidden justify-center md:flex">
                <Image src={RightView} alt="process"  />
            </div>
        </div>
    </div>

}