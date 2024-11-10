import React, { useState } from 'react';
import cal from "../img/calendar2.png";
import { Link } from 'react-router-dom';

const Calendar = () => {
    const [isDarkMode,setIsDarkMode] = useState(false);
    const handleDark=()=>{
      setIsDarkMode(!isDarkMode);
    }
    return (
        <div>
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
             <Link to="/">Home</Link>
             </div>
               <div>
                 <Link href="/documentation">
                   Documentation
                   </Link>
               </div>
             
           </div>
           
       </div>
       <div className='flex justify-center items-center p-16'>
       <div className='text-5xl p-16'>
        Calendar
        </div>
        <div className='place-items-center'>
            <img className='rounded-lg' src={cal} height={500} width={700}/>
        </div>
        </div>
        <div className='text-md   pl-48 pr-48'>
                Calendar provides you with a bird's eye view of all the upcoming task deadlines in the month selected by you. You can traverse through months using the left
                and right pointing arrows at the top. Each task in the date box shows its title and label, to make it easy for the user to search for the task in your list.
                </div>
                <div className='text-sm pt-72 text-center'>
            Made by Wolf Tech. © Wolf Tech Ltd. All rights reserved | Help : taskioshopify@gmail.com
            </div>
</div>
</div>
    );
}

export default Calendar;
