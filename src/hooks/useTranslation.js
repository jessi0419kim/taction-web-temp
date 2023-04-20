import { useRouter } from "next/router";
import ko from "../locale/ko.json"
import en from "../locale/en.json"


const TRANSLATIONS = { en, ko };

const useTranslation = () =>{
    const router = useRouter();
    const { locale, asPath } = router;

    const setLocale = (locale) => router.push(asPath, asPath, { locale });

  const t=TRANSLATIONS[locale]

  return { t, locale, setLocale };

}


export default useTranslation