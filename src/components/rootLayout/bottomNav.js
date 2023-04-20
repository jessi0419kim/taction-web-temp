import LinkMenu from "./linkMenu"


const BottomNav = () =>{

        return(
            <div className="md:hidden w-full h-[52px] px-6 fixed bottom-0 z-20 bg-white border-t">
                <LinkMenu />
            </div>
        )
}

export default BottomNav