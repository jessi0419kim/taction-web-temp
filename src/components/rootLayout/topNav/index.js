import NavDeskTop from './NavDeskTop';
import NavMobile from './NavMobile';


const TopNav = () => {

    return(
        <div className="w-full fixed top-0 z-20">
            <div className='hidden md:block'>
               <NavDeskTop />
            </div>
            <div className='block md:hidden'>
                <NavMobile />
            </div>
        </div>
    )
}


export default TopNav