import { Button } from "antd";
import MyLayout from "../Layout/Layout";

import SlickNews from "./SlickNews";

export default function News({contentNew}:any) {
    return <div className="news-container  mt-[-100px] h-[500px] pt-[130px] px-[10px]">
        <MyLayout>
            <div className="xl:px-[150px] lg:px-[40px] ">
                <div className="text-[24px] xl:text-[32px] font-bold text-[#FE6D00] items-center flex justify-between">
                    {contentNew.new1}
                    {/* <Button className="xl:hidden bg-[#FE6D00] text-[#fff] h-[40px]">Xem thêm</Button> */}
                </div>
                <SlickNews content1={contentNew.new2}
                content2={contentNew.new3}
                content3={contentNew.new4}
                content4={contentNew.new5}
                content5={contentNew.new6}
                content6={contentNew.new7}
                content7={contentNew.new8}
                content8={contentNew.new9}
                content9={contentNew.new10}
                />
            </div>
        </MyLayout>
    </div>
}