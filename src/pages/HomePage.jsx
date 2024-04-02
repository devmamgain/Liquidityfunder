import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
const navigate = useNavigate()
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
            height: "70%",
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
            curve: 'straight'
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            },
        },
        title: {
            text: 'Account Overview',
            align: 'left',
            style: {
                color: '#ffffff' // Set title text color to white
            }
        },
        subtitle: {
            text: '822669',
            align: 'left',
            style: {
                color: '#ffffff' // Set title text color to white
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
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up function
    return () => {
        chart.destroy();
    };
}, []);

    
const toDashboard =()=>{
    navigate("/dashboard")
}
    return (
        <div className="bg-[#1F1F1E] flex flex-grow min-h-screen">
            <div className="flex gap-4 ml-28 flex-grow">
                <div className='mt-16 '>
                    <div className='border-b-2 h-60'>
                    <h1 className="pt-7 flex text-[#9AA0AF]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                        </svg>
                        Home
                    </h1>
                    <div>
                        <select className="mt-3 rounded-lg border-2 border-[#505559] text-[#E3EDF2] h-7 w-96 pl-5 pr-10 bg-[#1F1F1E] hover:border-gray-400 focus:outline-none appearance-none">
                            <option>A-Z</option>
                            <option>Z-A</option>
                        </select>
                        <div className="flex gap-3">
                            <select className="mt-3 rounded-lg border-2 border-[#505559] text-[#E3EDF2] h-7 w-[185px] pl-5 pr-10 bg-[#1F1F1E] hover:border-gray-400 focus:outline-none appearance-none">
                                <option>A-Z</option>
                                <option>Z-A</option>
                            </select>
                            <select className="mt-3 rounded-lg border-2 border-[#505559] text-[#E3EDF2] h-7 w-[185px] pl-5 pr-10 bg-[#1F1F1E] hover:border-gray-400 focus:outline-none appearance-none">
                                <option>A-Z</option>
                                <option>Z-A</option>
                            </select>
                        </div>
                        <button className="w-96 rounded-xl mt-3 bg-[#1D65F3] h-20 text-[#D3ECFE]"> + New Challenge</button>
                    </div>
                    </div>
                    <div className='rounded-xl border mt-3 bg-[#303131] w-96  h-40 border-blue-600 text-[#D3ECFE]' > 
                 <div className='flex border-b-2 ml-2 mr-2 border-[#1F1F1E] h-[105px]'>
                    <div >
                    <h1 className='mt-2 ml-2 font-semibold'>MatchTrader 826699</h1>
                    <div className='flex gap-2'>
                    <h1 className=' ml-2 text-sm'>Student</h1>
                    <span className=' text-black text-xs bg-slate-300 rounded-xl px-2 mt-1'>FP Evaluation</span>
                    </div>
                    </div>
                    <button className='ml-auto mr-3 text-sm bg-blue-600 px-4 rounded-lg h-7 mt-3'>Ongoing</button>
                    </div>
                    <div className='flex gap-2 mt-2'>
                    <button className='h-9 bg-[#4C5564] rounded-lg px-2 py-auto  ml-auto'>Credentials</button>

                    <button className=' h-9 bg-blue-500 rounded-lg px-2 py-auto  mr-3' onClick={toDashboard}>Dashboards</button>
                    </div>
                    </div>
                </div>
                <div className='flex-grow rounded-xl mt-32 bg-[#303131] h-[70%] w-[80%] mr-3 mb-10'>
                    
                <div id="chart"   className='p-5 border-b-2 border-[#1F1F1E] h-[80%]' ></div>
                <div className='flex flex-grow gap-[20%] ml-24 mr-32 text-gray-100 mt-[2%]  '>
                <div >
                <h1 className='text-sm'>Account balance</h1>
                <h1 className='text-xl font-bold'>{12312}</h1>
                </div>
                <div>
                <h1 className='text-sm'>Average win</h1>
                <h1 className='text-xl font-bold'>{9.12}</h1>
                </div>
                <div>
                <h1 className='text-sm'>Average loss</h1>
                <h1 className='text-xl font-bold'>{9.86}</h1>
                </div>
                <div>
                <h1 className='text-sm'>Win ratio</h1>
                <h1 className='text-xl font-bold'>{40}</h1>
                </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
