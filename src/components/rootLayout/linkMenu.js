import Link from 'next/link'
import SelectLang from './SelectLang'

const LinkMenu = () => {

    return(
        <div className="h-10 my-1 grid grid-flow-col auto-cols-max gap-6 font-medium text-[#111111]">
            <Link href="/wallet" className='flex items-center'>
                <p >Wallet</p>
            </Link>
            <Link href="/layout" className='flex items-center'>
                <p >Layout</p>
            </Link>
        </div>
    )
}


export default LinkMenu