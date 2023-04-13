import NavDeskTop from './NavDeskTop';
import NavMobile from './NavMobile';

const NavBar = () => {

    return(
        <div className="sticky top-0 ">
            <div className='hidden lg:block'>
               <NavDeskTop />
            </div>
            <div className='block lg:hidden'>
                 <NavMobile />
            </div>
        </div>
    )
}


export default NavBar