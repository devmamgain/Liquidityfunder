import React from 'react';
import ApexCharts from 'apexcharts';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import platform from "../assets/platform.svg"
import accounttype from "../assets/accounttype.svg"
import phase from "../assets/phase.svg"
import accountsize from "../assets/accountsize.svg"
import calendar from "../assets/calendar.svg"
import averagewin from "../assets/averagewin.svg"
import averageloss from "../assets/averageloss.svg"
import balancequity from "../assets/balancequity.svg"
import winratio from "../assets/winratio.svg"
import profit from "../assets/profit.svg"
import secondcalendar from "../assets/secondcalendar.svg"
import historydata from "../assets/historydata.svg"
import clock from "../assets/clock.svg"




const DashBoards =()=>{
    const [date, setDate] = useState(new Date());
    const [calendarData, setCalendarData] = useState({});
    const [dailySummaryData, setDailySummaryData] = useState([]);
    const [openPositionsData, setOpenPositionsData] = useState([]);
    const [tradingHistoryData, setTradingHistoryData] = useState([]);
    useEffect(() => {
        generateCalendarData();
    }, []);

    
    const onChange = (newDate) => {
        setDate(newDate);
    };
    const generateCalendarData = () => {
        const data = {};
        const startDate = new Date('2024-01-01');
        const endDate = new Date();
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dateString = currentDate.toDateString();
            const tradeAmount = Math.floor(Math.random() * 1000); // Generate random trade amount
            data[dateString] = tradeAmount;
            currentDate.setDate(currentDate.getDate() + 1); // Move to the next date
        }
        setCalendarData(data);
    };


    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dateString = date.toDateString();
            const tradeAmount = calendarData[dateString] || 0; // Get trade amount for the date
            const tileClass = tradeAmount === 0 ? 'red' : 'blue';

            return <p className={`bg-${tileClass}-500 rounded-xl`}>${tradeAmount}</p>; // Display trade amount below each date
        }
        return null;
    };

    useEffect(() => {
        const generateRandomData = (count, yrange) => {
            let i = 0;
            const series = [];
            while (i < count) {
                const x = new Date('2024-01-01').getTime() + i * 86400000;
                const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                series.push([x, y]);
                i++;
            }
            return series;
        };

        const seriesData = generateRandomData(30, { min: 10, max: 100 });
        const options = {
            series: [{
                name: "STOCK ABC",
                data: seriesData
            }],
            chart: {
                type: 'area',
                height: "80%",
                width:"100%",
                fontFamily: "Inter, sans-serif",
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width:2
            },
            
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 20,
                    right: 20,
                    top: 0
                },
            },
            
            title: {
                text: 'Account Overview',
                align: 'left',
                style: {
                    color: '#ffffff', // Set title text color to white
                    fontWeight: '600', // semibold font weight
                fontSize: '20px' // increase font size
                }
            },
            subtitle: {
                text: '822669',
                align: 'left',
                style: {
                    color: '#ffffff', // Set title text color to white
                    fontWeight: '600'
                }
            },
            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        colors: '#ffffff' // Set x-axis labels color to white
                    }
                }
            },
            yaxis: {
                opposite: false, // Change y-axis to be on the left
                lines: {
                    show: false // Hide y-axis lines
                },
                labels: {
                    style: {
                        colors: '#ffffff' // Set x-axis labels color to white
                    }
                }
            },
            legend: {
                horizontalAlign: 'left',
                labels: {
                    colors: '#ffffff' // Set legend text color to white
                }
            },
        };
    
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
        document.getElementById("today").addEventListener("click", function() {
            chart.updateOptions({ 
                xaxis: { 
                    min: new Date().setHours(0, 0, 0, 0), 
                    max: new Date().getTime() 
                }
            });
        });
    
        document.getElementById("this-week").addEventListener("click", function() {
            chart.updateOptions({ 
                xaxis: { 
                    min: new Date().setDate(new Date().getDate() - 7), 
                    max: new Date().getTime() 
                }
            });
        });
    
        document.getElementById("this-month").addEventListener("click", function() {
            chart.updateOptions({ 
                xaxis: { 
                    min: new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime(), 
                    max: new Date().getTime() 
                }
            });
        });
        // Clean up function
        return () => {
            chart.destroy();
        };
    }, []);

    const generateDailySummaryData = () => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            const date = new Date().toISOString().slice(0, 10);
            const trades = Math.floor(Math.random() * 100);
            const lots = Math.floor(Math.random() * 10);
            const result = Math.random() < 0.5 ? 'Profit' : 'Loss';
            data.push({ date, trades, lots, result });
        }
        return data;
    };

    // Function to generate random data for open positions table
    const generateOpenPositionsData = () => {
        // Generate random data for open positions table
        // Similar structure as daily summary table
        // Example:
        const data = [];
        for (let i = 0; i < 5; i++) {
            const symbol = `Symbol ${i + 1}`;
            const type = Math.random() < 0.5 ? 'Buy' : 'Sell';
            const entryDate = new Date().toISOString().slice(0, 10);
            const entry = (Math.random() * 100).toFixed(2); // Rounded to two decimal places
            const tp = (parseFloat(entry) + Math.random() * 10).toFixed(2); // Rounded to two decimal places after adding random value
            const sl = (parseFloat(entry) - Math.random() * 10).toFixed(2); // Rounded to two decimal places after subtracting random value
            const lots = Math.floor(Math.random() * 10);
            const swap = (Math.random() * 10).toFixed(2); // Rounded to two decimal places
            const profit = (Math.random() * 100).toFixed(2); // Rounded to two decimal places
            data.push({ symbol, type, entryDate, entry, tp, sl, lots, swap, profit });
        }
        return data;
    };
    

    // Function to generate random data for trading history table
    const generateTradingHistoryData = () => {
        // Generate random data for trading history table
        // Similar structure as daily summary table
        // Example:
        const data = [];
        for (let i = 0; i < 10; i++) {
            const symbol = `Symbol ${i + 1}`;
            const type = Math.random() < 0.5 ? 'Buy' : 'Sell';
            const openDate = new Date().toISOString().slice(0, 10);
            const open = (Math.random() * 100).toFixed(2); // Rounded to two decimal places
            const closeDate = new Date().toISOString().slice(0, 10);
            const close = (Math.random() * 100).toFixed(2); // Rounded to two decimal places
            const tp = (parseFloat(open) + Math.random() * 10).toFixed(2); // Rounded to two decimal places after adding random value
            const sl = (parseFloat(open) - Math.random() * 10).toFixed(2); // Rounded to two decimal places after subtracting random value
            const lots = Math.floor(Math.random() * 10);
            const commission = (Math.random() * 10).toFixed(2); // Rounded to two decimal places
            const profit = (Math.random() * 100).toFixed(2); // Rounded to two decimal places
            data.push({ symbol, type, openDate, open, closeDate, close, tp, sl, lots, commission, profit });
        }
        return data;
    };
    
    const generateTableData = () => {
        const dailySummary = generateDailySummaryData();
        const openPositions = generateOpenPositionsData();
        const tradingHistory = generateTradingHistoryData();

        setDailySummaryData(dailySummary);
        setOpenPositionsData(openPositions);
        setTradingHistoryData(tradingHistory);
    };

    // Call the function to generate table data on component mount
    useEffect(() => {
        generateTableData();
    }, []);

    return(
        <div className="bg-[#1F1F1E] flex flex-grow min-h-screen">
            <div className="flex gap-4 ml-28 flex-grow mt-16 ">
                
                <div className='flex-grow'>
                    <div className="flex flex-col">
                    <h1 className="pt-7 flex text-[#9AA0AF]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                        </svg>
                        Home {`>`} #822669
                    </h1>
                    <div className="flex flex-grow gap-4">
                    <div>
                    <h1 className="mt-7 text-xl font-bold text-gray-100">FP - 822669</h1>
                    <h1 className="mt-2 text-xs  text-gray-100">Created At: Dec 3, 2023</h1>
                    
                    </div>
                
                    <button className='mt-7 text-sm bg-blue-600 px-4 rounded-lg h-8 text-gray-100'>Ongoing</button>
                    <button className='h-9 bg-[#4C5564] rounded-lg px-2 py-auto  ml-auto mr-5 text-gray-100 mt-10'>Credentials</button>
                 
                    </div>
                    <div className='flex'>
                    <div className='flex-grow rounded-xl mt-12 bg-[#303131] mr-3  w-[55%]'>
                    
                    <div id="chart"   className='p-5 border-[#1F1F1E]' ></div>
                    <div className='flex flex-grow mt-5 justify-center text-slate-200'>
                        <div className=' flex gap-5 bg-[#1F1F1E] rounded-lg divide-x border border-[#505559] divide-[#505559]'>
        <button id="today" className=' p-2 '>Today</button>
        <button id="this-week" className=' p-2 '>Week</button>
        <button id="this-month" className=' p-2 '>Month</button>
        <button id="custom" className=' p-2 '>Custom</button>
        </div>
    </div>
                    </div>
                    <div className="ml-auto mt-12 mr-5 bg-[#303131] rounded-lg w-[35.5%]">

                        <div className="flex p-3 ">
                            <img src={platform} alt="noplatform" className='pb-2'/>
                <h1 className="text-sm font-semibold text-gray-100 ml-1">Platform</h1>
                <h1 className="text-xs font-mono bg-slate-300 rounded-md p-1 ml-auto">MATCHTRADER</h1>

                </div>
                <div className="flex px-3 pb-3">
                <img src={accounttype} alt="noaccounttype" className='pb-2'/>

                <h1 className="text-sm font-semibold text-gray-100 ml-1">Account Type</h1>
                <h1 className="text-xs font-mono bg-slate-300 rounded-md p-1 ml-auto">FP EVALUATION</h1>

                </div>
                <div className="flex px-3 pb-3">
                <img src={phase} alt="nophase" className='w-5 pb-2'/>

                <h1 className="text-sm font-semibold text-gray-100 ml-1">Phase</h1>
                <h1 className="text-xs font-semibold text-gray-100 rounded-md p-1 ml-auto">Student</h1>

                </div>
                <div className="flex px-3 pb-3">
                <img src={accountsize} alt="noaccountsize" className='pb-2'/>

                <h1 className="text-sm font-semibold text-gray-100 ml-1">Account size:</h1>
                <h1 className="text-xs font-semibold text-gray-100 rounded-md p-1 ml-auto">$10,000.00</h1>

                </div>
                <div className="flex px-3 pb-3">
                <img src={calendar} alt="nocalendar" className='w-5 pb-2'/>

                <h1 className="text-sm font-semibold text-gray-100 ml-1">Start trade period:</h1>
                <h1 className="text-xs font-semibold text-gray-100 rounded-md p-1 ml-auto">Dec 7,2023</h1>

                </div>
                <div className="flex px-3 pb-3">
                <img src={calendar} alt="nocalendar" className='w-5 pb-2'/>

                <h1 className="text-sm font-semibold text-gray-100 ml-1">End trade period:</h1>
                <h1 className="text-xs font-semibold  rounded-md p-1 ml-auto text-gray-100 ">--</h1>

                </div>
                <div className="flex px-3 pb-3">
                <h1 className=" font-semibold text-gray-100 ">Trading objectives</h1>

      <span className=" bg-orange-100 text-orange-500 text-xs px-3  rounded-md flex ml-2 p-1">
      <img src={clock} alt="noclock" className='w-5 '/>

Pending</span>
                </div>
                <div className="border-2 rounded-xl ml-3 mr-3 mt-3 border-[#505559]">
                <h1 className="font-bold text-sm text-blue-700 px-2 pt-2 ">Daily Loss Limit
                <span className="ml-3 bg-blue-100 text-blue-500 text-xs px-3  rounded-md ">15:11:06</span>
                </h1> 
                <h1 className="font-bold text-sm text-gray-100 p-2">$441.49 Left</h1>
          
                <h1 className=" text-sm text-gray-100 px-2 pt-2 ">Maximum $473.82 daily loss</h1>
                <h1 className=" text-sm text-gray-100 px-2">Today's starting balance/equity: $9,467.46</h1>
                <h1 className=" text-sm text-gray-100 px-2 pb-2">Threshold at:$9,006.64</h1>

                </div>
                <div className="border-2 rounded-xl ml-3 mr-3 mt-3 border-[#505559]">
                <h1 className="font-bold text-sm text-blue-700 px-2 pt-2 ">Max Loss Limit
                </h1> 
                <h1 className="font-bold text-sm text-gray-100 p-2">$444.13 Left</h1>
          
                <h1 className=" text-sm text-gray-100 px-2 pt-2 ">Maximum $473.82 daily loss</h1>
                <h1 className=" text-sm text-gray-100 px-2 pb-2">Threshold at:$9,006.64</h1>

                </div>
                <div className="border-2 rounded-xl ml-3 mr-3 mt-3 mb-3 border-[#505559]">
                <h1 className="font-bold text-sm text-blue-700 px-2 pt-2 ">Profit Target
                </h1> 
                <h1 className="font-bold text-sm text-gray-100 p-2">$1293.40 Left</h1>
          
                <h1 className=" text-sm text-gray-100 px-2 pt-2 pb-2">Maximum $473.82 daily loss</h1>
                 </div>
                </div>
                </div>
                <div className="mt-3 mr-5 flex flex-grow gap-3">
                    <div className="flex flex-col flex-grow gap-3">
                    <div className="flex flex-grow gap-3">
                <div className="rounded-lg bg-[#303131]  w-[50%]">
                    <div className='flex gap-2 ml-3'>
                    <img src={averagewin} alt='noaveragewin' className='w-4'/>
                <h1 className="text-gray-100 py-3 font-semibold">Average Win</h1>
                </div>
                    <h1 className="text-gray-100 p-3 font-semibold">$22.43</h1>
                </div>
                <div className="rounded-lg bg-[#303131]  w-[50%]">
                <div className='flex gap-2 ml-3'>

                <img src={averageloss} alt='noaverageloss' className='w-4'/>

                <h1 className="text-gray-100 py-3 font-semibold">Average Loss</h1>
                </div>

<h1 className="text-gray-100 p-3 font-semibold">-$16.69</h1>

                </div>
                
                </div>
                <div className="flex flex-grow gap-3">
                <div className="rounded-lg bg-[#303131]  w-[50%]">
                <div className='flex gap-2 ml-3'>

                <img src={winratio} alt='nowinratio' className='w-4'/>

                <h1 className="text-gray-100 py-3 font-semibold">Win Ratio</h1>
</div>
                    <h1 className="text-gray-100 p-3 font-semibold">40.89%</h1>
                </div>
                <div className="rounded-lg bg-[#303131]  w-[50%]">
                <div className='flex gap-2 ml-3'>

                <img src={profit} alt='noprofit' className='w-4'/>

                <h1 className="text-gray-100 py-3 font-semibold">Profit Factor</h1>
                </div>

<h1 className="text-gray-100 p-3 font-semibold">0.93</h1>

                </div>
                
                </div>
                </div>
                <div className="rounded-lg bg-[#303131]  w-[36%]">
                <div className='flex gap-2 ml-3 mt-3'>

                <img src={balancequity} alt='nobalancequity' className='w-4'/>

                    <h1 className="font-semibold text-sm text-gray-100">Balance Overview </h1>
                    </div>
                    <div className='flex gap-2 ml-3 mt-20'>

                    <img src={balancequity} alt='nobalancequity' className='w-4'/>
                    <h1 className="font-semibold text-sm text-gray-100">Equity Overview </h1>
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex  gap-3 mr-5">
                <div className="rounded-lg bg-[#303131]  w-[50%] mt-3">
                    <h1 className="p-3 font-semibold text-sm text-gray-100">Daily Summary </h1>
                    <div className="bg-[#303131]  flex flex-col flex-grow gap-3 mr-5 px-5 pt-1">
                        
                    <table className="flex-grow gap-2 w-full mb-3">
                                
                                <thead className=" flex w-full ">
                                    <tr className="text-gray-100 text-sm font-semibold bg-[#1F1F1E] w-full rounded-xl">
                                    <td className="p-4 w-[35%] ">DATE</td>
                                    <td className="p-4 w-[35%]">TRADES</td>
                                    <td className="p-4 w-[35%]">LOTS</td>
                                    <td className="p-4 w-[35%]">RESULT</td> 
                                    </tr>
                                </thead>
                                <tbody className=' block max-h-[280px] overflow-auto '>
                            {dailySummaryData.map((item, index) => (
                                <tr key={index} className="text-gray-100 text-sm bg-[#303131] border-b border-[#505559]">
                                    <td className="p-4 w-[35%]">{item.date}</td>
                                    <td className="p-4 w-[35%]">{item.trades}</td>
                                    <td className="p-4 w-[35%]">{item.lots}</td>
                                    <td className="p-4 w-[35%]">{item.result}</td>
                                </tr>
                            ))}
                        </tbody>
                            </table>
                            </div>
                    </div>
                    <div className="rounded-lg bg-[#303131]  w-[50%] mt-3">
                    <h1 className="p-3 font-semibold text-sm text-gray-100">Account Analysis </h1>
                    <div className='bg-[#1F1F1E] mt-3  ml-5 mr-5 divide-y rounded-lg max-h-[290px] overflow-auto divide-[#505559]'>
                    <div className='flex flex-grow '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Number of days</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>32</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Total trades taken</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>631</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Average trades per day</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>5.39</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Total lots used</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>36.33</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Average lots used</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>1.76</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Biggest win</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'>$206.23</h1>

                        </div>
                        <div className='flex flex-grow  '>
                        <h1 className=' flex-grow  text-slate-200 font-semibold py-2 pl-5 w-[30%]'>Biggest loss</h1>
                        <h1 className=' flex-grow ml-5 text-slate-200 font-semibold p-2 bg-[#303131] w-[6%]'> -$166.23</h1>

                        </div>
                        </div>
                    <div className=" gap-3 mr-5 p-5">                         
                            </div>
                    </div>
                </div>
                <div className='flex gap-3'>
                <div className="rounded-lg bg-[#303131]  w-[63%] mt-3">
                    <div className="gap-3 mr-5 p-5">
                    <Calendar
    onChange={onChange}
    value={date}
    className="flex-grow w-full bg-[#303131] border-none text-gray-100"
    
    tileClassName="flex-grow mt-4 text-slate-200 rounded-lg"
    
    tileContent={tileContent}
/>
                    </div>
                    
                    </div>
                    <div className="rounded-lg bg-[#303131]  w-[40%] mt-3 mr-5">
                    <div className='flex gap-2 ml-3'>

                    <img src={secondcalendar} alt='nosecondcalendar' className='w-4'/>

                    <h1 className="py-3 font-semibold text-sm text-gray-100">Summary for the day </h1>
             </div>
</div>
</div>
<div className="rounded-lg bg-[#303131] flex-grow mt-3 mr-5">
<div className='flex gap-2 ml-3'>

<img src={historydata} alt='nohistorydata' className='w-4'/>

                    <h1 className="py-3 font-semibold text-sm text-gray-100">Open Positions </h1>
                    </div>
                    <div className="bg-[#303131] rounded-xl flex flex-col flex-grow gap-3 mr-5 p-5">
    <table className="flex-grow gap-2 w-full">
        <thead className="flex w-full">
            <tr className="text-gray-100 text-sm font-semibold bg-[#1F1F1E] w-full">
                                    <td className="p-4 w-[13%]">SYMBOL</td>
                                    <td className="p-4 w-[13%]"> TYPE</td>
                                    <td className="p-4 w-[13%]">ENTRY DATE</td>
                                    <td className="p-4 w-[13%]">ENTRY </td> 
                                    <td className="p-4 w-[13%]">TP</td>
                                    <td className="p-4 w-[13%]">SL</td>
                                    <td className="p-4 w-[13%]">LOTS</td>
                                    <td className="p-4 w-[13%]">SWAP</td>
                                    <td className="p-4 w-[13%]"> PROFIT</td>
                                    </tr>
                                </thead>
                                <tbody className=' block max-h-[220px] overflow-auto'>
                            {openPositionsData.map((item, index) => (
                                <tr key={index} className="text-gray-100 text-sm bg-[#303131] border-b border-[#505559]">
                                <td className="p-4 w-[13%]">{item.symbol}</td>
                                    <td className="p-4 w-[13%]">{item.type}</td>
                                    <td className="p-4 w-[13%]">{item.entryDate}</td>
                                    <td className="p-4 w-[13%]">{item.entry}</td>
                                    <td className="p-4 w-[13%]">{item.tp}</td>
                                    <td className="p-4 w-[13%]">{item.sl}</td>
                                    <td className="p-4 w-[13%]">{item.lots}</td>
                                    <td className="p-4 w-[13%]">{item.swap}</td>
                                    <td className="p-4 w-[13%]">{item.profit}</td>
                                </tr>
                            ))}
                        </tbody>

                            </table>
                            {/* <div className="ml-auto mr-auto text-gray-100">No DATA</div> */}
                 </div>
                 </div>
                 <div className="rounded-lg bg-[#303131] flex-grow mt-3 mr-5 mb-3">
                 <div className='flex gap-2 ml-3'>

<img src={historydata} alt='nohistorydata' className='w-4'/>
                    <h1 className="py-3 font-semibold text-sm text-gray-100">Trading History </h1>
                    </div>
                    <div className="bg-[#303131] rounded-xl flex flex-col flex-grow gap-3 mr-5 p-5">
    <table className="flex-grow gap-2 w-full shadow-lg">
        <thead className="flex w-full">
            <tr className="text-gray-100 text-sm font-semibold bg-[#1F1F1E] w-full">
                <td className="p-4 w-[10%]">SYMBOL</td>
                <td className="p-4 w-[10%]">TYPE</td>
                <td className="p-4 w-[10%]">OPEN DATE</td>
                <td className="p-4 w-[10%]">OPEN</td> 
                <td className="p-4 w-[10%]">CLOSE DATE</td>
                <td className="p-4 w-[10%]">CLOSE</td>
                <td className="p-4 w-[10%]">TP</td>
                <td className="p-4 w-[10%]">SL</td>
                <td className="p-4 w-[10%]">LOTS</td>
                <td className="p-4 w-[10%]">COMMISSION</td>
                <td className="p-4 w-[10%]">PROFIT</td>
            </tr>
        </thead>
        <tbody className=' block max-h-[220px] overflow-auto'>
            {tradingHistoryData.map((item, index) => (
                                <tr key={index} className="text-gray-100 text-sm bg-[#303131] border-b border-[#505559]">
                                <td className="p-4 w-[10%]">{item.symbol}</td>
                    <td className="p-4 w-[10%]">{item.type}</td>
                    <td className="p-4 w-[10%]">{item.openDate}</td>
                    <td className="p-4 w-[10%]">{item.open}</td>
                    <td className="p-4 w-[10%]">{item.closeDate}</td>
                    <td className="p-4 w-[10%]">{item.close}</td>
                    <td className="p-4 w-[10%]">{item.tp}</td>
                    <td className="p-4 w-[10%]">{item.sl}</td>
                    <td className="p-4 w-[10%]">{item.lots}</td>
                    <td className="p-4 w-[10%]">{item.commission}</td>
                    <td className="p-4 w-[10%]">{item.profit}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
</div>
                </div>

            </div>
        </div>
    )
}
export default DashBoards