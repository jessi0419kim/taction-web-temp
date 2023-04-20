import {  useUser } from '@supabase/auth-helpers-react'

const Asset = () => {

        const user = useUser()


        return(
            <div className="w-full max-w-5xl">
                <h1 className="font-bold text-5xl py-8">Asset</h1>
                {/* table index */}
                <div className="grid grid-cols-5 text-xs py-1 border-b gap-2">
                    <div className="col-span-2">ASSET</div>
                    <div>PRICE</div>
                    <div>BALANCE</div>
                    <div>VALUE</div>
                </div>
                {/* table */}
                <div className="grid grid-cols-5 py-2 border-b gap-2">
                    <div className="col-span-2">
                        <div className="font-sm">Ethereum</div>
                        <div className="font-sm">Ethereum</div>
                    </div>	
                    <div className="flex items-center">$1.63</div>
                    <div className="flex items-center">5,875</div>
                    <div className="flex items-center">$9,573.23</div>
                </div>
                <div className="grid grid-cols-5 py-2 border-b gap-2">
                    <div className="col-span-2">
                        <div className="font-sm">Ethereum</div>
                        <div className="font-sm">Arbitrum</div>
                    </div>	
                    <div className="flex items-center">$1.63</div>
                    <div className="flex items-center">5,875</div>
                    <div className="flex items-center">$9,573.23</div>
                </div>
                <div className="grid grid-cols-5 py-2 border-b gap-2">
                    <div className="col-span-2">
                        <div className="font-sm">TAC</div>
                        <div className="font-sm">Ethereum</div>
                    </div>	
                    <div className="flex items-center">$1.63</div>
                    <div className="flex items-center">5,875</div>
                    <div className="flex items-center">$9,573.23</div>
                </div>
                <div className="grid grid-cols-5 py-2 border-b gap-2">
                    <div className="col-span-2">
                        <div className="font-sm">TAC</div>
                        <div className="font-sm">Arbitrum</div>
                    </div>	
                    <div className="flex items-center">$1.63</div>
                    <div className="flex items-center">5,875</div>
                    <div className="flex items-center">$9,573.23</div>
                </div>
            </div>  
        )
}

export default Asset