import { useState } from "react"
import logo from '../img/taskio.jpg';
import '../App.css';
import ss from '../img/screenshot.png';
import teams from '../img/team.png';
import support from '../img/support.jpeg';
import calendar from '../img/calendar.png';
function Home() {
  const [isDarkMode,setIsDarkMode] = useState(false);
  const handleDark=()=>{
    setIsDarkMode(!isDarkMode);
  }
  return (
    <>
    <div className={isDarkMode?"bg-gray-800 text-white text-xl":"text-xl"}>
    <div className='flex justify-between p-5'>
            <div className=''>
            <button className="fixed-corner" onClick={handleDark}>{isDarkMode?(
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
    
     ):(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
    
    )}</button>
            </div>
            <div className='flex gap-5'>
              <div>
             
              </div>
              <div>
                  <a href="/privacypolicy">
                    Privacy Policy
                    </a>
                </div>
                <div>
                  <a href="/documentation">
                    Documentation
                    </a>
                </div>
                <div>
                    Contact Support
                </div>
                <div>
                    About Us
                </div>
            </div>
        </div>



        <div className="flex p-36 gap-20 items-center">
          <div className="floating">
            <img src={logo} height={400} width={400} className="rounded-full"/>
          </div>
          <div className="font-thin text-5xl">
            Organize without the overwhelm
            <br/>
            <div className="text-3xl font-thin m-10 italic text-center">
              Boost productivity, Boost growth
            </div>
            <br/>
            
          </div>
        </div>

        <div className="text-3xl pb-48 font-thin m-10 italic text-center">
              Building a business is already complicated enough,<br/>
               but managing your day-to-day tasks<br/> shouldn't have to be !
            </div>
       
            <div className="text-center font-thin text-2xl p-5"
>Stay on the same page with your Team</div> 
<div className="text-center place-items-center">
               <img className="rounded-lg" src={ss} height={700} width={900}/>
        </div>
        <div className="text-center font-thin text-2xl p-5 pt-24"
>Get a bird eye's view on your business goals</div> 
<div className="place-items-center">
               <img className="rounded-lg" src={calendar} height={700} width={900}/>
        </div>
        <div className="text-center font-thin text-2xl p-5 pt-24"
>Manage teams, users, labels, deadlines and more !</div> 
<div className="text-center place-items-center">
               <img className="rounded-lg" src={teams} height={700} width={900}/>
        </div>
        <div className="text-center font-thin text-2xl p-5 pt-24"
>Friendly and dedicated support team at your assistance</div> 
<div className="text-center place-items-center">
               <img className="rounded-lg" src={support} height={500} width={500}/>
        </div>
        
     

        <div className='text-sm pt-72 text-center'>
            Made by Wolf Tech. © Wolf Tech Ltd. All rights reserved | Help : taskioshopify@gmail.com
            </div>
     
     </div>
    </>
  )
}

export default Home
