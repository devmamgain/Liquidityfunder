import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../assets/Logout.svg"

import HomePage from "../assets/HomePage.svg";
import Payouts from "../assets/Payouts.svg";
import LeaderBoards from "../assets/LeaderBoard.svg";
import competition from "../assets/competition.svg";
import affiliate from "../assets/affiliate.svg";

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const Menus = [
        { title: "Home Page", src: HomePage, routes: "/" },
        { title: "Payouts", src: Payouts, routes: "/Payouts" },
        { title: "LeaderBoards", src: LeaderBoards, routes: "/LeaderBoard" },
        { title: "Competition", src: competition, routes: "/featuredcompetition" },
        { title: "Affiliate", src: affiliate, routes: "/affiliate" },

        { title: "Logout", src: Logout },
    ];

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="flex fixed z-10">
            
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${open ? "w-72" : "w-20"} bg-[#303131] h-screen  pl-4 mt-14 border-t-2 relative duration-300 border-r border-[#1F1F1E]`}
            >
              
                <ul className="">
                    {Menus.map((menu, index) => (
                        <Fragment key={index}>
                            {menu.title === "Logout" ? (
                                <li
                                    key={index}
                                    onClick={handleLogout}
                                    className={`flex ${!open && 'justify-center'} rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                                        ${menu.gap ? "mt-9" : "mt-2"} transition-all`}
                                >
                                    <Link to={menu.routes} className="flex items-center gap-x-4 w-full">
                                        <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                                        <span className={`origin-left duration-200 transition-opacity ${!open && "hidden"
                                            }`}>
                                            {menu.title}
                                        </span>
                                    </Link>
                                </li>
                            ) : (
                                <li
                                    key={index}
                                    className={`flex ${!open && 'justify-center'}  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                                        ${menu.gap ? "mt-9" : "mt-2"} transition-all`}
                                >
                                    <Link to={menu.routes} className="flex items-center gap-x-4 w-full">
                                        <img src={menu.src} alt={menu.title} className="w-6 h-6 " />
                                        <span className={`origin-left duration-200 transition-opacity ${!open && "hidden"
                                            }`}>
                                            {menu.title}
                                        </span>
                                    </Link>
                                </li>
                            )}
                        </Fragment>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
