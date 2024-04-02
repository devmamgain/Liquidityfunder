const Payouts =()=>{
    return (
        <div className="bg-[#1F1F1E] flex flex-grow min-h-screen">
            <div className="flex flex-grow gap-4 ml-28 ">
                <div className='mt-16 flex-grow'>
                <h1 className="pt-7 flex text-[#9AA0AF]">
                        <svg class="fill-gray-500 mr-2" width="24" height="24" 
                        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.94 4.37C13.94 5.67 12.88 6.74001 11.57 6.74001C10.27 6.74001 9.20996 5.67 9.20996 4.37C9.20996 3.06 10.27 2 11.57 2C12.88 2 13.94 3.06 13.94 4.37Z"></path><path d="M20.87 12.9702C20.15 12.7402 19.53 12.4002 19.07 11.9802C18.87 11.8002 18.6 11.5102 18.31 11.1602C18.17 11.0002 18.05 10.8502 17.95 10.7202C18.17 10.1302 18.36 9.70021 18.52 9.36021C18.6 9.20021 18.84 8.69021 18.57 8.18021C18.45 7.96021 18.14 7.58022 17.43 7.55022C15.98 7.48022 14.69 7.81022 13.62 8.52022C13.42 8.64022 13.29 8.68021 13.08 8.65021C13 8.64021 12.91 8.64022 12.83 8.63022H12.72C11.28 8.58022 9.79001 8.53021 8.29001 8.75021C7.20001 8.91021 6.23999 9.23022 5.45999 9.71022C4.66999 10.1902 4 10.8802 3.5 11.6802C2.92 12.6402 2.60999 13.7302 2.60999 14.8202V14.8702C2.62999 16.3202 3.25999 17.7802 4.54999 19.3302C4.74999 19.5602 4.89999 19.8902 5.01999 20.1802C5.02999 20.2102 5.03999 20.3002 5.04999 20.3602C5.08999 20.5802 5.14001 20.8902 5.32001 21.2402C5.42001 21.4302 5.52 21.5802 5.59 21.6802C5.73 21.8702 5.94999 21.9802 6.17999 21.9802L8.81 22.0002C8.81 22.0002 8.81001 22.0002 8.82001 22.0002C9.13001 22.0002 9.40999 21.8002 9.51999 21.5102C9.56999 21.3902 9.61999 21.2502 9.67999 21.1202L11.81 21.1102C11.9 21.2802 11.98 21.4402 12.07 21.6002C12.2 21.8302 12.45 21.9802 12.72 21.9802L15.35 21.9702C15.72 21.9702 16.04 21.7002 16.09 21.3202C16.13 21.0402 16.21 20.7702 16.33 20.5202C16.41 20.3502 16.51 20.1902 16.63 20.0402C17.4 19.8802 18.05 19.5702 18.56 19.1202C18.87 18.8602 19.07 18.5902 19.25 18.3502C19.48 18.0602 19.65 17.8302 20 17.6102C20.23 17.4702 20.5 17.3602 20.78 17.2902C21.12 17.2002 21.35 16.9102 21.36 16.5602L21.39 13.6902C21.39 13.3702 21.18 13.0702 20.87 12.9702ZM15.16 13.0302C15.16 12.5802 15.53 12.2202 15.98 12.2202C16.44 12.2202 16.8 12.5802 16.8 13.0302C16.8 13.4802 16.44 13.8402 15.98 13.8402C15.53 13.8402 15.16 13.4802 15.16 13.0302ZM9.17999 12.4902C9.17999 12.0802 9.50999 11.7402 9.92999 11.7402H13.22C13.64 11.7402 13.97 12.0802 13.97 12.4902C13.97 12.9002 13.64 13.2402 13.22 13.2402H9.92999C9.50999 13.2402 9.17999 12.9002 9.17999 12.4902Z">
                                </path>
                                </svg>
                        Payouts
                    </h1>
                    <h1 className="ml-3 mt-5 font-semibold text-gray-100 text-2xl">Welcome To The Payout Section</h1>

                    <div className="mt-3  bg-[#303131] rounded-xl flex gap-10 mr-5">
                            <div>
                          <h1  className="font-semibold text-gray-100 p-3">  Ready to request your payout? </h1>
                          <p  className=" text-gray-100 pl-3">  Please click on the request payout button then proceed to fill out the required information, our team will reach out to</p>
                          <p  className=" text-gray-100 pl-3 pb-3">  you for further advancements.</p>
                          </div>
                          <button className=" h-10 my-auto rounded-lg ml-auto bg-blue-500 text-gray-100 p-2 text-sm mr-10">Request Payout</button>
                        </div>
                        <div className="mt-3  bg-[#303131] rounded-xl flex flex-col flex-grow gap-3 mr-5 p-5">
                            <table className="flex-grow gap-2">
                                <thead className="">
                                    <tr className="text-gray-100 text-sm font-semibold bg-[#1F1F1E] ">
                                    <td className="p-4 ">REFERENCE ID</td>
                                    <td className="p-4">PAYOUT TYPE</td>
                                    <td className="p-4">REQUESTED ON</td>
                                    <td className="p-4">METHOD </td> 
                                    <td className="p-4">STATUS</td>
                                    <td className="p-4">AMOUNT</td>
                                    <td className="p-4">ADMIN NOTE</td>
                                    <td className="p-4">CERTIFICATE</td>
                                    <td className="p-4"> INVOICE</td>
                                    </tr>
                                </thead>
                            </table>
                            <div className="ml-auto mr-auto text-gray-100">No Payouts Yet</div>

                        </div>
                    </div>
                    </div>
                    </div>

    )
}
export default Payouts