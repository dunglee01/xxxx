import { useTranslations } from "next-intl";
import MyLayout from "../../components/Layout/Layout";
import Intro from "@/components/Intro/Intro";
import ValueIntro from "@/components/ValueIntro/ValueIntro";
import Process from "@/components/Process/Process";
import ServiceCustom from "@/components/Service/Service";
import News from "@/components/News/News";

export default function Home() {
  const t = useTranslations('Index')

  const contentIntro = {
    intro1: t('intro1'),
    intro2: t('intro2'),
    intro3: t('intro3'),
    intro4: t('intro4'),
    intro5: t('intro5'),
  }

  const contentValueInfo = {
    value1: t('value1'),
    value2: t('value2'),
  }

  const contentProcess = {
    process1: t('process1'),
    process2: t('process2'),
  }

  const contentService = {
    service1: t('service1'),
    service2: t('service2'),
    service3: t('service3'),
    service4: t('service4'),
    service5: t('service5'),
    service6: t('service6'),
    service7: t('service7'),
    service8: t('service8'),
    service9: t('service9'),
    service10: t('service10'),
  }

  const contentNew = {
    new1: t('new1'),
    new2: t('new2'),
    new3: t('new3'),
    new4: t('new4'),
    new5: t('new5'),
    new6: t('new6'),
    new7: t('new7'),
    new8: t('new8'),
    new9: t('new9'),
    new10: t('new10'),
  }

  return (
    <>
      <Intro contentIntro={contentIntro}/>
      <MyLayout>
      <ValueIntro contentValueInfo={contentValueInfo}/>
      </MyLayout>
      <Process contentProcess={contentProcess}/>
      <ServiceCustom contentService={contentService}/>
      <News contentNew={contentNew}/>
    </>

  );
}
