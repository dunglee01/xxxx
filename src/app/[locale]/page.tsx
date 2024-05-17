import { useTranslations } from "next-intl";
import MyLayout from "../../components/Layout/Layout";
import Intro from "@/components/Intro/Intro";
import ValueIntro from "@/components/ValueIntro/ValueIntro";
import Process from "@/components/Process/Process";
import ServiceCustom from "@/components/Service/Service";
import News from "@/components/News/News";

export default function Home() {
  const t = useTranslations('')
  return (
    <>
     <Intro />
      <MyLayout>
        <ValueIntro />
      </MyLayout>
      <Process />
      <ServiceCustom />
      <News />
    </>

  );
}
