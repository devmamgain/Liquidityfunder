import star from "../assets/star.svg"
import greenprofit from "../assets/greenprofit.svg"
import { useEffect } from "react"
const LeaderBoard = () => {

const data = [{
  id:1,
  country:"🇧🇪",
  user : "Anouar H",
accountsize : "25,000",
profit : "14,052.42",
profitpercent : "56.21%"},
{
  id:2,
  country:"🇺🇸",
  user : "Ahmad M",
accountsize : "100,000",
profit : "54,859.12",
profitpercent : "54.86%"},
{
  id:3,
  country:"🇮🇳",
  user : "NIKHIL K",
accountsize : "25,000",
profit : "12,763.12",
profitpercent : "51.05%"},
{
  id:4,
  country:"🇬🇧",
  user : "Denzel C",
accountsize : "10,000",
profit : "5,012.58",
profitpercent : "50.13%"},
{
  id:5,
  country:"🇲🇱",
  user : "Arawani S",
accountsize : "100,000",
profit : "45,573.05",
profitpercent : "45.57%"}]
useEffect(()=>{
console.log
},[])
  return (
    <div className="bg-[#1F1F1E] flex flex-grow min-h-screen">
      <div className="flex gap-4 ml-28 flex-grow ">
        <div className='mt-16 flex-grow'>
          <h1 className="pt-7 flex text-[#9AA0AF]">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="currentColor"
              class="w-6 h-6 mr-2"><path fill-rule="evenodd"
                d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
                clip-rule="evenodd"></path></svg>
            Leaderboard
          </h1>

          <div className="flex gap-4 mt-3 flex-grow mr-3">
            <div className=" flex mt-3 rounded-xl w-[33%] h-56 bg-gradient-to-r from-rgba-blue-300 via-rgba-blue-500 to-rgba-blue-600">
              <div className="mt-10 ml-8">
                <div className="flex"><img src={star} al={"nostar"} />
                  <h1 className="text-gray-100 font-semibold text-xl ">Highest Payout</h1>
                </div>

                <h1 className="text-gray-100 font-semibold text-2xl mt-4 ml-1">Jagroop D</h1>
                <h1 className="text-gray-100 font-semibold text-sm mt-2 ml-1">$100,000</h1>
                <h1 className=" text-green-500 font-semibold text-xl ml-1">$140,354.4(140.35%)</h1>


              </div>
              <img src="https://app.fundingpips.com/static/media/badge_1.52f27201c652bb8168e2.png" alt="" className="h-[38%] w-[24%] mt-24 ml-auto mr-10" />

            </div>
            <div className=" flex mt-3 rounded-xl w-[33%] h-56 bg-gradient-to-r from-rgba-blue-300 via-rgba-blue-500 to-rgba-blue-600">
              <div className="mt-10 ml-8">
                <div className="flex"><img src={star} al={"nostar"} />
                  <h1 className="text-gray-100 font-semibold text-xl ">Best Win Ratio</h1>
                </div>

                <h1 className="text-gray-100 font-semibold text-2xl mt-4 ml-1">Blackie a</h1>
                <h1 className="text-gray-100 font-semibold text-sm mt-2 ml-1">$5,000</h1>
                <h1 className=" text-green-500 font-semibold text-xl ml-1">100%</h1>


              </div>
              <img src="https://app.fundingpips.com/static/media/badge_1.52f27201c652bb8168e2.png" alt="" className="h-[38%] w-[24%] mt-24 ml-auto mr-10" />

            </div>
            <div className=" flex mt-3 rounded-xl w-[33%] h-56 bg-gradient-to-r from-rgba-blue-300 via-rgba-blue-500 to-rgba-blue-600">
              <div className="mt-10 ml-8">
                <div className="flex"><img src={star} al={"nostar"} />
                  <h1 className="text-gray-100 font-semibold text-xl ">Fastest Evaluation</h1>
                </div>

                <h1 className="text-gray-100 font-semibold text-2xl mt-4 ml-1">Federica T</h1>
                <h1 className="text-gray-100 font-semibold text-sm mt-2 ml-1">$5,000</h1>
                <h1 className=" text-green-500 font-semibold text-xl ml-1">1d
                  0h
                  1m
                  17s</h1>


              </div>
              <img src="https://app.fundingpips.com/static/media/badge_1.52f27201c652bb8168e2.png" alt="" className="h-[38%] w-[24%] mt-24 ml-auto mr-10" />

            </div>
          </div>
          <div className="flex gap-4 mt-3 flex-grow mr-3 mb-3 ">
            <div className="mt-12 rounded-3xl w-[33%] h-80 bg-gradient-to-b from-rgba-blue-400 via-white to-white">
              <div className="flex">
                <div className="flex">
                  <img src="https://app.fundingpips.com/static/media/badge_2.a75063babe5056291940.png" alt="" className="h-20 w-24 mt-20 ml-5" />
                  <div>
                    <h1 className="mt-24 font-semibold text-xl">Samuel O</h1>
                    <h1 className="font-bold mt-1">US</h1>
                  </div>
                </div>
                <div class="flex justify-end font-bold text-[70px] text-[#44CFF8] rounded-xl ml-auto pr-10 pb-10">2<span class="text-[40px]">nd</span></div>          </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-semibold"> XAUUSD
                  <p className="text-sm text-gray-400  font-normal">3 hours ago</p></h1>
                <h1 className="text-2xl font-bold text-green-700 ml-auto mr-5">$9,376
                  <p className="text-sm text-gray-400 font-normal ml-8">$100,000</p>
                </h1>

              </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-bold"> 2216.42
                  <p className="text-sm text-gray-400  font-normal">Open Price</p>
                </h1>
                <h1 className="text-xl font-bold  ml-auto mr-5">2263.3
                  <p className="text-sm text-gray-400  font-normal">Close Price</p>

                </h1>

              </div>
            </div>
            <div className="mt-5  rounded-3xl w-[33%] h-80 bg-gradient-to-b from-rgba-yellow-400 via-white to-white">
              <div className="flex">
                <div className="flex">
                  <img src="https://app.fundingpips.com/static/media/badge_1.52f27201c652bb8168e2.png" alt="" className="h-20 w-24 mt-20 ml-5" />
                  <div>
                    <h1 className="mt-24 font-semibold text-xl">Van Cuong N</h1>
                    <h1 className="font-bold mt-1">JP</h1>
                  </div>
                </div>
                <div class="flex ml-auto justify-end font-bold text-[70px] text-[#d4af37] rounded-xl pr-10 pb-10">1<span class="text-[40px]">st</span></div>
              </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-semibold"> NDX100
                  <p className="text-sm text-gray-400  font-normal">7 hours ago</p></h1>
                <h1 className="text-2xl font-bold text-green-700 ml-auto mr-5">$11,880
                  <p className="text-sm text-gray-400 font-normal ml-8">$100,000</p>
                </h1>

              </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-bold"> 18284.85
                  <p className="text-sm text-gray-400  font-normal">Open Price</p>
                </h1>
                <h1 className="text-xl font-bold  ml-auto mr-5">18403.65
                  <p className="text-sm text-gray-400  font-normal">Close Price</p>

                </h1>

              </div>
            </div>
            <div className="mt-12 rounded-3xl w-[33%] h-80 bg-gradient-to-b from-rgba-green-400 via-white to-white">
              <div className="flex">
                <div className="flex">
                  <img src="https://app.fundingpips.com/static/media/badge_2.a75063babe5056291940.png" alt="" className="h-20 w-24 mt-20 ml-5" />
                  <div>
                    <h1 className="mt-24 font-semibold text-xl">Mustafa Eren A</h1>
                    <h1 className="font-bold mt-1">TR</h1>
                  </div>
                </div>
                <div class="flex justify-end font-bold text-[70px] ml-auto text-[#438922] rounded-xl pr-10 pb-10">3<span class="text-[40px]">rd</span></div>
              </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-semibold"> NDX100
                  <p className="text-sm text-gray-400  font-normal">8 hours ago</p></h1>
                <h1 className="text-2xl font-bold text-green-700 ml-auto mr-5">$9,300
                  <p className="text-sm text-gray-400 font-normal ml-8">$100,000</p>
                </h1>

              </div>
              <div className="mt-5 ml-5 flex">
                <h1 className="text-xl font-bold"> 18275.45
                  <p className="text-sm text-gray-400  font-normal">Open Price</p>
                </h1>
                <h1 className="text-xl font-bold  ml-auto mr-5">18368.45
                  <p className="text-sm text-gray-400  font-normal">Close Price</p>

                </h1>

              </div>
            </div>
          </div>
       <div className="bg-[#303131] mr-5 rounded-xl mb-5">
        <div className="flex ml-5 py-5 gap-1"><svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3327 18.0106C17.0611 18.3031 16.9095 18.8723 16.9959 19.2753L17.4569 21.427C17.8208 23.125 16.9793 23.7878 15.587 22.8998L13.642 21.6593C13.2888 21.434 12.7109 21.434 12.3578 21.6593L10.4127 22.8998C9.02046 23.7878 8.17892 23.1251 8.54281 21.427L9.0039 19.2753C9.09022 18.8723 8.93861 18.3031 8.667 18.0106L7.05348 16.2728C6.1011 15.2472 6.40897 14.2131 7.73728 13.9747L9.80769 13.603C10.1558 13.5405 10.5699 13.2113 10.7276 12.8713L11.8729 10.4044C12.4929 9.06923 13.5072 9.06923 14.127 10.4044L15.2724 12.8713C15.4302 13.2113 15.8442 13.5405 16.1923 13.603L18.2627 13.9747C19.5911 14.2131 19.8989 15.2472 18.9465 16.2728L17.3327 18.0106ZM7.80003 11.9334C8.15884 11.9334 8.45003 11.6198 8.45003 11.2334V4.70023C8.45003 4.31382 8.15884 4.00023 7.80003 4.00023C7.44123 4.00007 7.15003 4.31366 7.15003 4.70007V11.2333C7.15003 11.6198 7.44123 11.9334 7.80003 11.9334ZM18.2 11.9334C18.5588 11.9334 18.85 11.6198 18.85 11.2334V4.70023C18.85 4.31382 18.5588 4.00023 18.2 4.00023C17.8412 4.00023 17.55 4.31382 17.55 4.70023V11.2334C17.55 11.6198 17.8412 11.9334 18.2 11.9334ZM13 7.26663C13.3588 7.26663 13.65 6.95304 13.65 6.56663V4.69991C13.65 4.3135 13.3588 3.99991 13 3.99991C12.6412 3.99991 12.35 4.3135 12.35 4.69991V6.56663C12.35 6.95304 12.6412 7.26663 13 7.26663Z" 
        fill="white" ></path></svg>
         <h1 className="font-semibold text-xl text-gray-100 ">
        
        Best Accounts In Profit</h1>
        </div>
        <div class="flex justif-start items-center gap-6 mt-3 flex-wrap ml-5">
          <div class=" p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white 
           text-slate-200  bg-blue-500 ">All</div>
           <div class="bg-[#1F1F1E] p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-black-light text-slate-200 dark:hover:bg-blue-500 false">$5,000</div><div class="bg-[#1F1F1E] p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-black-light text-slate-200 dark:hover:bg-blue-500 false">$10,000</div><div class="bg-[#1F1F1E] p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-black-light text-slate-200 dark:hover:bg-blue-500 false">$25,000</div><div class="bg-[#1F1F1E] p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-black-light text-slate-200 dark:hover:bg-blue-500 false">$50,000</div><div class="bg-[#1F1F1E] p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white dark:bg-black-light text-slate-200 dark:hover:bg-blue-500 false">$100,000</div></div>
           
           <div className=" flex flex-grow mt-4 ml-10">
            <h1 className="w-[40%] text-slate-200 font-semibold">User</h1>
            <h1 className="w-[40%] text-slate-200 font-semibold ml-20">Account Size</h1>
            <h1 className="w-[40%] text-slate-200 font-semibold">Profit</h1>
            <h1 className="w-[40%] text-slate-200 font-semibold">Profit%</h1>

            </div>
           <div className="flex ml-5 flex-col flex-grow mt-5">
           {data.map(data =><div className="flex flex-grow mb-3 rounded-xl border-2 mr-5 p-3  border-[#505559]">
           <h1 className="ml-3 mt-3 text-3xl font-bold text-slate-200"> {data.id}</h1>
           {data.id === 1 ?  <img src="https://app.fundingpips.com/static/media/badge_1.52f27201c652bb8168e2.png" alt="" className="h-16 w-20 ml-5" /> : <img src="https://app.fundingpips.com/static/media/badge_2.a75063babe5056291940.png" alt="" className="h-16 w-20 ml-5" />}
          <div className="flex flex-grow my-auto">
            <div className="flex flex-grow w-[40%] ">
            <h1 className=" text-xl font-semibold gap-5 text-slate-200"> 
           {data.user}</h1>
           <span className="p-1 text-xl font-semibold text-slate-200">{data.country}</span>
           </div>
            <h1 className=" flex flex-grow w-[40%] font-semibold text-slate-200"> 
           ${data.accountsize} </h1>
            <h1 className=" flex flex-grow w-[40%] font-bold text-green-600 gap-1"> 
            <img src={greenprofit} alt="" className="w-6 h-6 " />

           ${data.profit} </h1>
            <h1 className=" flex flex-grow w-[40%] font-bold text-green-600 gap-1"> 
            <img src={greenprofit} alt="" className="w-6 h-6 " />

            {data.profitpercent} </h1>
            </div>
            </div>)}
           </div>
         </div>
                 </div>
                
      </div>
    </div>
  )
}
export default LeaderBoard