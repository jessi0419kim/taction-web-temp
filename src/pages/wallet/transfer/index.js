
import { AiFillCaretDown } from "react-icons/ai";

const Transfer = () => {

    return(
        <div className="mx-auto min-h-screen mt-20">


            <div className="w-full max-w-lg">
                <h1 className="font-bold text-5xl py-8 px-4 sm:px-0">Send</h1>
                <div className="p-4 sm:p-8 sm:border rounded-2xl">
                        <form>
                            {/* 보낼 수량 입력칸 */}
                            <label className="font-semibold">You'll send</label>
                            <div className="flex justify-between items-center border-b  mb-2">
                               <input type="text" id="amount" placeholder="Enter amount" className="w-full  text-2xl py-3  focus:outline-none"/>
                               <div className="flex items-center">
                                            <p className="pr-2 text-xl">ETH</p>
                                            <AiFillCaretDown size={12}/>
                                 </div>
                            </div>
                            <div className="flex justify-between">
                                  <p className="font-semibold text-neutral-400">Balance</p>
                                  <p className="font-semibold text-neutral-400">0</p>
                            </div>
                                 {/* 누가 받을지 입력칸 */}
                            
                            <div className="mt-10 border-b">
                                <p className="font-semibold">Recipient</p>
                                <div className="flex justify-between items-center  ">
                                        <input type="text" id="amount" placeholder="Address 0x000..." className="w-full py-3  text-2xl   focus:outline-none"/>
                                      
                                </div>
                            </div>
                           
        
                            <button className="w-full border rounded-xl p-3 bg-blue-600 mt-12" onClick={()=>console.log('hi')}>
                                <p className="text-white font-semibold">Send</p>
                            </button>
                        </form>
 
                       
                </div>
            </div>
        </div>
    )
}

export default Transfer