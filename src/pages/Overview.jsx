import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
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
                      <Link to="/documentation">
                        Documentation
                        </Link>
                    </div>
                   
                </div>
                
            </div>
            
            <div className='text-5xl p-16'>
                Taskio - Overview
            </div>
            <div className='text-md   pl-36 pr-36'>
                Taskio is a Task Management and Team Productivity tracking application built within the Shopify Admin. 
                It provides you with a minimalistic and user-friendly interface to help the team members catch-up with the tasks and goals
                happening throughout your organisation. It provides very well detailed view of each task or goal including properties
                like Task Deadline, Task Assignee, Label, ID, created At, etc.Each task can be viewed in the table on the home page, 
                but users need to use the slider to view all the properties for a 
                particular task. 
            </div>
            <div className=' text-3xl pl-36 pb-3 pt-8'>
                Title
            </div>
            <div className='text-md   pl-36 pr-36'>
                The first column "Title" is frozen in its place to provide a better interface. This should ideally be a short
                word or group of words for the task or goal.
            </div>
            <div className=' text-3xl pl-36 pb-3 pt-8'>
                Priority
            </div>
            <div className='text-md   pl-36 pr-36'>
                Priority depicts the importance or the urgency of the task. It can have three values: low, medium or high. 
                Each value has a color in its background for a better User Experience.         
                </div>
                <div className=' text-3xl pl-36 pb-3 pt-8'>
                Description
            </div>
            <div className='text-md   pl-36 pr-36'>
                Each task can have a description to add more about the details of the task.
                Note : Description has the word range of 1 to 100 words. So, while creating a task, this must be kept in mind.   
                </div>
                <div className='  text-3xl pl-36 pb-3 pt-8'>
                Deadline
            </div>
            <div className='text-md   pl-36 pr-36'>
                Each task is created with a Deadline to keep better track of the progress. We intend to add mutliple features like filtering 
                using Deadline dates in the future.
                </div>
                <div className=' text-3xl pl-36 pb-3 pt-8'>
                Label
            </div>
            <div className='text-md   pl-36 pr-36'>
                Users can add a label to each task in order to categorise them. A search bar is provided to search for tasks under a common label.
                Some examples for labels are : Shipping, Subscription, Inventory, Marketing, etc.
                </div>
                <div className=' text-3xl pl-36 pb-3 pt-8'>
                Description
            </div>
            <div className='text-md   pl-36 pr-36'>
                Each task can have a description to add more about the details of the task.
                Note : Description has the word range of 1 to 100 words. So, while creating a task, this must be kept in mind.   
                </div>
                <div className=' text-3xl pl-36 pb-3 pt-8'>
                Team Name
            </div>
            <div className='text-md pl-36 pr-36'>
                Each task is associated to a particular team. You can read more about Teams here.   
                </div>
                <div className=' text-3xl pl-36 pb-3 pt-8'>
                Assigned By and Assigned To
            </div>
            <div className='text-md pl-36 pr-36'>
                This shows who assigned the task and to whom. While creating a task, the assigner has the choice to type the input, this is done
                to give the choice to make the assigner anonymous, or writing a team name as the assigner.
                Assigned To is a member from the team fetched from the users database. You can read more about users here.
                </div>
                <div className='text-sm pt-72 text-center'>
            Made by Wolf Tech. © Wolf Tech Ltd. All rights reserved | Help : sswolfgang69@gmail.com
            </div>
        </div>

       

        </div>
    );
}

export default Overview;
