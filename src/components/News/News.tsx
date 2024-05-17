import { Button } from "antd";
import MyLayout from "../Layout/Layout";

import SlickNews from "./SlickNews";

export default function News({contentNew}:any) {
    return <div className="news-container  mt-[-100px] h-[500px] pt-[130px] px-[10px]">
        <MyLayout>
            <div className="xl:px-[150px] lg:px-[40px] ">
                <div className="text-[24px] xl:text-[32px] font-bold text-[#FE6D00] items-center flex justify-between">
                    {contentNew.new1}
                    <Button className="xl:hidden bg-[#FE6D00] text-[#fff] h-[40px]">Xem thêm</Button>
                </div>

                <SlickNews content={contentNew.new2}/>
            </div>
        </MyLayout>
    </div>
}