import Image from 'next/image'
import ValueIntroMb from '../../../public/valueIntro.png'
import ValueIntrox from '../../../public/valueIntroDesk.png'

export default function ValueIntro() {

    return <>
        <div className="pt-[38px] px-[20px] xl:px-[150px] lg:flex lg:justify-between xl:justify-between xl:flex xl:gap-[80px] lg:px-[40px]">
            <div>
                <div className="text-[24px] font-bold text-[#554AF0] md:text-[32px]">Giá trị cốt lõi</div>
                <div className="mt-[10px] font-normal md:text-[16px] lg:w-[600px] xl:w-[398px]">
                    Giống như mọi doanh nghiệp khác, bản thân DTak cũng đang xây dựng lên chiếc bánh đà phù hợp cho riêng mình và ngày đêm nỗ lực đẩy chiếc bánh đà đó xoay tròn, xoay tròn không ngừng để tạo thành vòng quay quan tính trong một ngày không xa tới.
                </div>
            </div>
            <div className='flex justify-center mt-[30px] md:hidden'>
                <Image src={ValueIntroMb} alt='zxc' />
            </div>

            <div className='justify-center mt-[60px] hidden md:flex'>
                <Image src={ValueIntrox} alt='zxc' />
            </div>
        </div>
    </>
}