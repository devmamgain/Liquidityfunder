const FeaturedCompetition = () => {
    return (
        <div className="bg-[#1F1F1E] flex flex-grow min-h-screen">
            <div className="flex gap-4 ml-28 flex-grow">
                <div className='mt-16 flex-grow'>
                    <h1 className="pt-7 flex text-[#9AA0AF]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-5 h-5 fill-gray-500 mr-2 mt-1"><path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clip-rule="evenodd"></path></svg>
                        Competitions
                    </h1>
                    <section class="bg-blue-700 mt-3 mr-5 p-4 rounded-2xl flex md:flex-row flex-col col-span-3 justify-between gap-4">
                        <div>
                            <h3 class="text-white text-4xl font-bold">Featured Competition</h3>
                            <div class="flex flex-col justify-start items-start gap-2 my-8">
                                <p class="font-medium text-gray-100 text-lg">This competition has ended</p>
                            </div>
                        </div>
                        <div class="bg-[#303131] w-full p-4 rounded-xl ">
                            <div class="flex items-center gap-2 text-blue-600">
                                <img class="h-14" src="https://app.fundingpips.com/static/media/trophy.b54b074344dd0e9361fd.png" alt="" />
                                <div><h3 class="text-2xl font-bold capitalize">August Competition</h3>
                                    <div class="flex mt-1 gap-2"><p class="font-bold capitalize text-right">
                                        <h4 class="font-light text-[11px] bg-blue-100 rounded-md px-3 py-1 uppercase text-black">mt5</h4>
                                    </p><div class="rounded text-center bg-red-500">
                                            <p class="mx-4 py-1 font-light my-1 text-xs text-white">Ended</p></div>
                                    </div>
                                </div>
                            </div>
                            <h5 class="text-gray-100 text-sm font-light mt-5 ">
                                Welcome to the thrilling world of Funding Pips competitions! Get ready to embark on a
                                journey of strategy, skill, and financial expertise as traders from around the globe come
                                together to showcase their abilities and compete for exciting prices.
                            </h5><div class="flex md:flex-row flex-col justify-between md:items-center items-start gap-8">
                                <div class="flex md:flex-row flex-col justify-start my-5 gap-4">
                                    <div class="flex mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                            aria-hidden="true" icon_name="candlestickUp" class="w-12 h-12 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] text-[#cbd5e1]">
                                            <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                        <div>
                                            <p class="font-normal	text-[14px] text-[#9F9F9F] flex ">
                                                Entry</p><h3 class="font-bold lg:text-lg text-sm text-[#cbd5e1]">
                                                Free
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="flex mr-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp"
                                            class="w-12 h-12 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] text-[#cbd5e1]">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd">
                                            </path>
                                        </svg>
                                        <div>
                                            <p class="font-normal text-[14px] text-[#9F9F9F] flex ">Participants</p>
                                            <h3 class="font-bold lg:text-lg text-sm  text-[#cbd5e1]">4999
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <button class="text-white w-24 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-2 text-center">
                                    View
                                </button>
                            </div>
                        </div>
                    </section>
                    <div className="flex mt-20 gap-3">
                        <div className="text-3xl font-bold text-gray-100">All Competitions</div>
                        <select className="rounded-lg mt-1 border-2 border-[#505559] text-[#E3EDF2] h-9 w-40 pl-5 pr-10 bg-[#1F1F1E] hover:border-gray-400 focus:outline-none appearance-none">
                            <option>All</option>
                            <option>Upcoming</option>
                            <option>Ongoing</option>
                            <option>Ended</option>

                        </select>
                    </div>
                    <div className="flex flex-grow gap-4 mt-8 mb-3 mr-5">
                        <div class=" bg-[#303131] rounded-xl p-3 w-[40%]">
                            <div class=" bg-[#303131] flex flex-col justify-between items-stretch h-full p-4 rounded-xl">
                                <div class="flex items-center gap-2 text-gray-800">
                                    <div class="flex items-center gap-2 text-gray-700">
                                        <img class="h-14" src="https://app.fundingpips.com/static/media/trophy.b54b074344dd0e9361fd.png" alt="" />
                                        <div>
                                            <h3 class="text-xl text-gray-100 font-semibold capitalize ">
                                                February Competition
                                            </h3>
                                            <div class="flex"><p class="font-bold capitalize text-right">
                                                <h4 class="font-light text-[11px] bg-blue-100 rounded-md px-3 py-1 uppercase text-black">
                                                    matchtrader
         </h4>
                 </p>
                        </div>
                        <div class="flex mt-1 gap-4">
                                <div class="rounded text-center bg-red-500">
                    <p class="mx-4 py-1 font-light my-1 text-xs text-white">Ended
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div><div>
                        <div class="flex items-center gap-8">
                            <div class="flex justify-start items-center my-5 gap-4">
                                <div class="flex mr-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                        <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" 
                                        clip-rule="evenodd"></path>
                                        </svg><div><p class="font-normal	text-[12px] text-[#9F9F9F] flex ">Entry
                                        </p><h3 class="font-bold lg:text-md text-sm text-slate-200">Free</h3>
                                        </div></div><div class="flex mr-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" 
                                        class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd">
                                                </path></svg><div>
                                                    <p class="font-normal	text-[12px] text-[#9F9F9F] flex ">
                                                        Participants</p><h3 class="font-bold lg:text-md text-sm text-slate-200">5000</h3>
                                                        </div></div></div>
                                                        </div>
                                                        <div class="flex justify-start">
                                                            <button class="text-white w-1/4 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center">
                                            View</button>
                                            </div></div></div></div>
                                            <div class=" bg-[#303131] rounded-xl p-3 w-[40%]">
                            <div class=" bg-[#303131] flex flex-col justify-between items-stretch h-full p-4 rounded-xl">
                                <div class="flex items-center gap-2 text-gray-800">
                                    <div class="flex items-center gap-2 text-gray-700">
                                        <img class="h-14" src="https://app.fundingpips.com/static/media/trophy.b54b074344dd0e9361fd.png" alt="" />
                                        <div>
                                            <h3 class="text-xl text-gray-100 font-semibold capitalize ">
                                                February Competition
                                            </h3>
                                            <div class="flex"><p class="font-bold capitalize text-right">
                                                <h4 class="font-light text-[11px] bg-blue-100 rounded-md px-3 py-1 uppercase text-black">
                                                    matchtrader
         </h4>
                 </p>
                        </div>
                        <div class="flex mt-1 gap-4">
                                <div class="rounded text-center bg-red-500">
                    <p class="mx-4 py-1 font-light my-1 text-xs text-white">Ended
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div><div>
                        <div class="flex items-center gap-8">
                            <div class="flex justify-start items-center my-5 gap-4">
                                <div class="flex mr-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                        <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" 
                                        clip-rule="evenodd"></path>
                                        </svg><div><p class="font-normal	text-[12px] text-[#9F9F9F] flex ">Entry
                                        </p><h3 class="font-bold lg:text-md text-sm text-slate-200">Free</h3>
                                        </div></div><div class="flex mr-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" 
                                        class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd">
                                                </path></svg><div>
                                                    <p class="font-normal	text-[12px] text-[#9F9F9F] flex ">
                                                        Participants</p><h3 class="font-bold lg:text-md text-sm text-slate-200">5000</h3>
                                                        </div></div></div>
                                                        </div>
                                                        <div class="flex justify-start">
                                                            <button class="text-white w-1/4 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center">
                                            View</button>
                                            </div></div></div></div>
                                            <div class=" bg-[#303131] rounded-xl p-3 w-[40%]">
                            <div class=" bg-[#303131] flex flex-col justify-between items-stretch h-full p-4 rounded-xl">
                                <div class="flex items-center gap-2 text-gray-800">
                                    <div class="flex items-center gap-2 text-gray-700">
                                        <img class="h-14" src="https://app.fundingpips.com/static/media/trophy.b54b074344dd0e9361fd.png" alt="" />
                                        <div>
                                            <h3 class="text-xl text-gray-100 font-semibold capitalize ">
                                                February Competition
                                            </h3>
                                            <div class="flex"><p class="font-bold capitalize text-right">
                                                <h4 class="font-light text-[11px] bg-blue-100 rounded-md px-3 py-1 uppercase text-black">
                                                    matchtrader
         </h4>
                 </p>
                        </div>
                        <div class="flex mt-1 gap-4">
                                <div class="rounded text-center bg-red-500">
                    <p class="mx-4 py-1 font-light my-1 text-xs text-white">Ended
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div><div>
                        <div class="flex items-center gap-8">
                            <div class="flex justify-start items-center my-5 gap-4">
                                <div class="flex mr-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                        <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" 
                                        clip-rule="evenodd"></path>
                                        </svg><div><p class="font-normal	text-[12px] text-[#9F9F9F] flex ">Entry
                                        </p><h3 class="font-bold lg:text-md text-sm text-slate-200">Free</h3>
                                        </div></div><div class="flex mr-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" icon_name="candlestickUp" 
                                        class="w-10 h-10 mr-2 rounded-xl px-2 py-1 bg-[#1F1F1E] fill-slate-200">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd">
                                                </path></svg><div>
                                                    <p class="font-normal	text-[12px] text-[#9F9F9F] flex ">
                                                        Participants</p><h3 class="font-bold lg:text-md text-sm text-slate-200">5000</h3>
                                                        </div></div></div>
                                                        </div>
                                                        <div class="flex justify-start">
                                                            <button class="text-white w-1/4 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center">
                                            View</button>
                                            </div></div></div></div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedCompetition