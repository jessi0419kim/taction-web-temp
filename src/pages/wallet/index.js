import NoWallet from "@/components/noWallet"
import Asset from "@/components/wallet/Asset"
import WalletInfo from "@/components/wallet/WalletInfo"
import {  useSupabaseClient, useUser, useSession } from '@supabase/auth-helpers-react'
import { useState, useEffect } from "react"

export default function Wallet() {

	// const [isWallet, setIsWallet] = useState(false)
	// const supabase = useSupabaseClient()
	// const user = useUser()


	// const getUserWallet = async() =>{
	// 	try {
	// 		let { data, error, status } = await supabase
	// 		  .from('wallets')
	// 		  .select('walletAddress')
	// 		  .eq('uid', user.id)
	// 		  .single()

	// 		  if (error && status !== 406) {
	// 			throw error
	// 		  }
		
	// 		  if (data) {
	// 				console.log(data)
	// 		  }
	// 	}catch (error) {
	// 		alert('Error loading user data!')
	// 		console.log(error)
	// 	  }
	// }

	// useEffect(()=>{
	// 	user&&console.log(user.id)
	// 	 user&&getUserWallet()
	// },[user])
	
	return(

		<div className="w-full flex flex-col items-center px-5">
			<WalletInfo />
			<Asset />
		</div>
	)
}