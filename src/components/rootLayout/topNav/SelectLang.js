import { AiOutlineDown, AiOutlineGlobal} from "react-icons/ai";
import { useState } from "react";
import useTranslation from "@/hooks/useTranslation"


const langs = {
    en: 'EN',
    ko: "KO"
}

const SelectLang = () => {
    const {setLocale, locale} = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

        return(
            <div>
                <div className="peer flex  items-center">
                    <AiOutlineGlobal />
                    <p className="px-2">{langs[locale]}</p>
                    < AiOutlineDown size={12}/>
                </div>
                <div className="hidden peer-hover:flex hover:flex
                                absolute
                                flex-col bg-white drop-shadow-lg">
                    {Object.entries(langs).map((lang, index)=>
                       <button onClick={()=>setLocale(lang[0])} className='h-8 hover:bg-blue-600' key={index}>
                            <p className="px-8">{lang[1]}</p>
                      </button>
                     )}

                </div>
            </div>
        )
}


export default SelectLang