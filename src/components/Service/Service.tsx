import Image from "next/image";
import Code from '../../../public/code.png'
import Cycle from '../../../public/cycle.png'
import Group from '../../../public/group.png'
import Chutiem from '../../../public/chutiem.png'

export default function ServiceCustom() {
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
                    <div className="text-[24px] xl:text-[32px] font-bold text-[#554AF0]">Sản phẩm & Dịch vụ</div>
                    <div className="mt-[15px] lg:w-[400px] xl:w-[273px]">Với đội ngũ nhân sự năng động và đầy nhiệt huyết, DTak không ngừng giới thiệu các sản phẩm dịch vụ, tính năng mới để đáp ứng những thay đổi không ngừng về công nghệ trong lĩnh vực hỗ trợ chuyển đổi số doanh nghiệp. </div>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap  gap-6 xl:gap-6 justify-around mt-[35px]">
                    {renderTag(Code, 'Outsource', 'DTak đảm nhận thiết kế, phát triển Mobile app, xây dựng Website doanh nghiệp, thương mại điện tử, xây dựng hạ tầng hệ thống về công nghệ, bảo mật dữ liệu. Doanh nghiệp chỉ cần đưa ra bài toán, DTak sẽ giúp bạn hoàn thành.')}
                    {renderTag(Cycle, 'Quy trình & Giải pháp', 'Chuyển đổi từ mô hình vận hành thủ cộng, tài liệu giấy, Excel sang bộ quy trình chuẩn hóa với dữ liệu được số hóa 100% dễ dàng phân tích, báo cáo, tìm kiếm và tối ưu cho việc áp dụng các công cụ AI về sau.')}
                    {renderTag(Group, 'Thuê chuyên gia & kỹ sư CNTT', 'Thay vì phải đầu tư và duy trì 1 đội nhóm CNTT tốn rất nhiều chi phí, thì việc thuê chuyên gia và kỹ sư CNTT từ DTak sẽ giúp doanh nghiệp bạn không những tiết kiệm mà còn lại mang lại hiệu quả cao hơn rất nhiều.')}
                    {renderTag(Chutiem, 'Chủ Tiệm POS Quản lý bán hàng', 'Hệ thống phần mềm quản lý bán hàng cho các mô hình F&B Nhà hàng, Cafe, Bán lẻ, Bán buôn, Siêu thị, Thời trang, Karaoke, Giặt là, Spa, v.v')}
                </div>
            </div>
        </div>
    </>
}