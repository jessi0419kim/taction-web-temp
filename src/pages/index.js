import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1224px] px-6 bg-yellow-300">
        <div className='bg-red-200 '>
          {/* 랜딩페이지 배경 */}
          <div className='py-20 justify-center'>
              <p className='text-[128px] text-center overflow-hidden'>DEVELOP</p>
              <p className='text-[128px] text-center overflow-hidden'>PREVIEW</p>
              <p className='text-[128px] text-center overflow-hidden'>SHIP</p>
          </div>
        </div>
      </div>
    </div>
  )
}
