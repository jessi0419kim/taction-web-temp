import Link from 'next/link'
import useTranslation from '@/hooks/useTranslation'

const Authentication = () => {
    const {t} = useTranslation()

    return(
     <div className='grid grid-cols-2  justify-between'>
        <Link href="/signin">
            <div className='py-3 flex justify-center items-center'>
                <p className='text-sm leading-none'>{t.Nav.signIn}</p>
            </div>
        </Link>
        <Link href="/signup">
            <div className='px-5 py-3 rounded-md bg-blue-600 hover:bg-white hover:border hover:border-blue-600  text-white hover:text-blue-600 flex justify-center items-center'>
                <p className=' text-sm leading-none'>{t.Nav.signUp}</p>
            </div> 
        </Link> 
    </div>
    )
}

export default Authentication