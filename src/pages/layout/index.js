import React, { useRef, useEffect, useState } from 'react';


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout() {

  const containerRef = useRef(null);
  const contetnsAreaRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [contentsAreaWidth, setContentsAreaWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
     
      setContentsAreaWidth(contetnsAreaRef.current.offsetWidth)
      setContainerWidth(containerRef.current.offsetWidth)
      // Do something with the container width
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function initially to get the container width
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="mx-auto my-40">
       <div className="w-full  xl:max-w-[1280px] " >
          <div className="flex justify-between my-4 border-x " ref={containerRef}>
              <div className='grid grid-rows-2 w-full'>
                <div className='border-b border-blue-400 border-dashed'></div>
                <div></div>
              </div>
              <p className='text-center px-4 text-blue-400 text-3xl md:text-5xl lg:text-7xl'>{containerWidth}px</p>
              <div className='grid grid-rows-2 w-full'>
                <div className='border-b border-blue-400 border-dashed'></div>
                <div></div>
              </div>
            </div>
       </div>
      <div className="w-full  border
                      px-5
                     
                      md:max-w-[1280px] md:px-8" >
        {/* 컨테이너 보더 */}
        <div className="flex justify-between my-10 border-x " ref={contetnsAreaRef}>
           <div className='grid grid-rows-2 w-full'>
             <div className='border-b border-blue-400 border-dashed'></div>
             <div></div>
           </div>
           <p className='text-center px-4 text-blue-400 text-xl  md:text-3xl lg:text-5xl'>{contentsAreaWidth}px</p>
           <div className='grid grid-rows-2 w-full'>
             <div className='border-b border-blue-400 border-dashed'></div>
             <div></div>
           </div>
        </div>
        

         {/* 박스 1개 */}
          <div className='w-full my-10 grid grid-cols-1' >
             <div className='bg-blue-200 min-h-[400px] flex flex-col justify-center items-center'>
               <p className="text-2xl p-4">{`Screen Width > md(768px) => padding = 32px`}</p>
               <p className="text-2xl p-4">{`Screen Width < md(768px) => padding = 24px`}</p>
             </div>
          </div>

          <div className='w-full my-10 grid grid-cols-1' >
             <div className='bg-blue-200 min-h-[400px] flex flex-col justify-center '>
               <h1 className="text-4xl font-bold text-neutral-900 hidden sm:block">{`Title: Screen Width > sm(640px) => 36px bold`}</h1>
               <h1 className="text-3xl font-bold text-neutral-900 sm:hidden">{`Title: Screen Width < sm(640px) => 30px bold`}</h1>
               <p className='mt-4 text-neutral-500 max-w-3xl'> {`Contents: 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl 16px  text-neutral-500 max-w-3xl`}</p>
  
             </div>
          </div>


        {/* 박스 2개 */}
          <div className='w-full my-10  
                        grid  gap-4
                        sm:gap-6
                        lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='aspect-video bg-violet-300 flex flex-col justify-center items-center'>
              <p className="text-2xl p-4">{`Screen Width > lg(1024px) => cols-2`}</p>
              <p className="text-2xl p-4">{`Screen Width < lg(1024px) => rows-2`}</p>
            </div>
            <div className='aspect-video bg-violet-300 flex flex-col justify-center items-center'>
              <p className="text-2xl p-4">{`Screen Width > lg(1024px) => gap-[32px]`}</p>
              <p className="text-2xl p-4">{`Screen Width < lg(1024px) =>  gap-[24px]`}</p>
              <p className="text-2xl p-4">{`Screen Width < sm(640) =>  gap-[16px]`}</p>
            </div>
        </div>

        {/* 박스 3개 */}
            <div className='w-full my-10  
                        grid  gap-4
                        sm:gap-6
                        lg:grid lg:grid-cols-3'>
              <div className='aspect-video bg-teal-200 flex flex-col justify-center items-center'>
                <p className="text-2xl p-4">{`Screen Width > lg(1024px) => cols-3`}</p>
                <p className="text-2xl p-4">{`Screen Width < lg(1024px) => rows-3`}</p>
              </div>
              <div className='aspect-video bg-teal-200 flex flex-col justify-center items-center'>
                <p className="text-2xl p-4">{`Screen Width > sm(640) =>  gap-[16px]`}</p>
                <p className="text-2xl p-4">{`Screen Width < sm(640) =>  gap-[16px]`}</p>
              </div>
              <div className='aspect-video bg-teal-200 flex flex-col justify-center items-center'>
              </div>
        </div>



      </div>

      {/* padding 비교: 16px, 20px, 24px */}
       <div className='w-full my-10  
                        grid  gap-4
                        sm:gap-6
                        lg:grid lg:grid-cols-3'>
                <div className='mx-6 aspect-video bg-teal-200 flex flex-col justify-center items-center'>
                  <p className="text-2xl p-4">{`mx-6`}</p>
                </div>
                <div className='mx-5 aspect-video bg-teal-200 flex flex-col justify-center items-center'>
                  <p className="text-2xl p-4">{`mx-5`}</p>
                </div>
                <div className='mx-4 aspect-video bg-teal-200 flex flex-col justify-center items-center'>
                <p className="text-2xl p-4">{`mx-4`}</p>
                </div>
        </div>
    </div>
  )
}
