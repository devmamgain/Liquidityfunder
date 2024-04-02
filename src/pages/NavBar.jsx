const NavBar = () =>{
    return(
        <header className="bg-[#303131] text-[#DFE6F0] h-14 fixed w-full z-20">
            <nav className="flex ml-5">
            <div className="flex mt-3 gap-5">
            <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="-7 -7 38 38" fill="currentColor" 
             aria-hidden="true" class="w-8 h-8 bg-[#1F1F1E] rounded-md"><path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path></svg>
            <h1 className="font-semibold mt-1">LIQUIDITY FUNDER</h1>
            </div>
            </nav>
        </header>
    )
    
    }
    export default NavBar