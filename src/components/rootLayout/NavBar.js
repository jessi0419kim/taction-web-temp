import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const NavBar = () => {

    return(
        <div className="sticky top-0 w-full h-[74px] lg:h-20 px-6 lg:px-[72px] backdrop-blur-md flex justify-between items-center">
            <Link href="/">
               <div>로고</div>
            </Link>
            


            {/* 와이드 메뉴 */}
            <div className="hidden lg:grid grid-flow-col auto-cols-max gap-6 text-[#666666]">
               <Link href="/trade">
                     <p>Trade</p>
                </Link>
                <Link href="/history">
                     <p>History</p>
                </Link>
                <Link href="/wallet">
                     <p>Wallet</p>
                </Link>
                <div>KO</div>
            </div>

            {/* 계정관련 메뉴 */}
            <div className="hidden lg:grid  grid-flow-col auto-cols-max gap-6">
                <div>로그인</div>
                <div>회원가입</div>
            </div>

            {/* 모바일 메뉴버튼 */}
                <div className="lg:hidden">
                      <AiOutlineMenu size={24}/>
                </div>
        </div>
    )
}


export default NavBar