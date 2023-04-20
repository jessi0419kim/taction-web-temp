import Footer from "./Footer"
import TopNav from "./topNav"
import BottomNav from "./bottomNav"
import { useRouter } from "next/router"


const RootLayout = ({children}) => {
    const {asPath, query, pathname} = useRouter()
	


    return(
        <div className="flex">
            <div className="flex flex-col flex-1">
                 <TopNav />
                 <div className="h-full flex mt-[64px] lg:mt-[72px] ">
                           {children}
                 </div>
                { pathname == '/' ? <Footer /> : null}
                <BottomNav />
            </div>
        </div>    
    )
}


export default RootLayout

