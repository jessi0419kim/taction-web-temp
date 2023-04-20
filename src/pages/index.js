import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {



  return (
    <div className="w-full">
      <div className='relative w-full aspect-[9/16] lg:aspect-video max-h-screen'>
        <video autoPlay playsInline loop muted className='w-full h-full object-fill'>
          <source src="https://firebasestorage.googleapis.com/v0/b/tkd-coop.appspot.com/o/istockphoto-1097631594-640_adpp_is.mp4?alt=media&token=ea8eec1b-91a5-49fc-9eaf-6f7a01a62203"/>
        </video>
        <div className='absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-center px-32'>
            <h1 className='text-8xl font-bold mb-10 text-center'>The Global Blockchain Platform</h1>
            <h2 className='text-3xl font-bold mb-6 text-center'>Access the World's Largest Selection of 10,000+ Cryptocurrencies</h2>
            <p className='max-w-[800px] text-2xl text-neutral-500 text-center'>Blockchain is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.</p>
        </div>
      </div>


       <div className="w-full min-h-screen xl:max-w-xl " >
    
        </div>
    </div>
  )
}
