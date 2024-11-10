import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
             <Link to="/">Home</Link>
             </div>
               <div>
                 <Link to="/documentation">
                   Documentation
                   </Link>
               </div>
              
           </div>
           </div>
           
        <div className='text-4xl pl-24 font-bold'>
            Privacy Policy
        </div>
       
        <div className='p-24'>
            This Privacy Policy explains how we, as a developers of the Shopify app that collect, use, disclose, and safeguard the personal data of users. We understand the importance of protecting user privacy and are committed to ensuring that the information collected is handled securely and in compliance with applicable data protection laws. By using our app, you consent to the practices outlined in this Privacy Policy.
Information about the collection and use of your personal data<br/>
<div className='font-bold text-xl pt-5 pb-5'>
1. Who is the controller of your personal data?<br/>
</div>
The Company is a controller of personal data. Who, alone or together with others, determines the purpose of collection and decides how the personal data will be processed.
<br/>
<div className='font-bold text-xl pt-5 pb-5'>
2. What type of data do we process?<br/>
</div>
Personal Data: We may collect certain personal data such as customer name, email address, and location when users install and use our app. This information is used to provide the app's functionality and to enhance the user experience.
<br/>
Order Details: Our app displays orders detail information. This includes information about ordered items, price, tax, discount etc.
<br/>
Shop Details: Our app also displays shop details like shop name, email, phone, address etc.
<br/>
<div className='font-bold text-xl pt-5 pb-5'>
3. Data Storage and Security:<br/>
</div>
Data Retention: We retain user, customer and order data for as long as necessary to provide the app's services and as required by applicable laws and regulations.
<br/>
Data Security: We implement reasonable security measures to protect user data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
<br/>
<div className='font-bold text-xl pt-5 pb-5'>
4. Data Sharing and Disclosure:<br/>
</div>
Third-Party Service Providers: We may engage trusted third-party service providers to assist us in delivering and improving our app's functionality. These providers have access to user data only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
<br/>
Legal Requirements: We may disclose user data if required to do so by law or in response to valid legal requests, such as court orders or government regulations.
<br/>
<div className='font-bold text-xl pt-5 pb-5'>
5. User Rights:<br/>
</div>
Access, Correction, and Deletion: Users have the right to access, correct, or delete their personal data collected through our app. Requests for such actions should be directed to our contact information provided below.
<br/>
Opt-Out: Users can uninstall our app to discontinue its use and prevent further data collection.
<br/>
Updates to this Privacy Policy<br/>
We reserve the right to update or modify this Privacy Policy at any time. Users will be notified of any changes by posting the updated version on our website or within the app. It is advised to review this Privacy Policy periodically for any updates.
<br/>
<div className='font-bold text-xl pt-5 pb-5'>
Contact Us<br/>
</div>
In case of any questions about this Privacy Policy, please contact us by email at: taskioshopify@gmail.com<br/>


        </div>
        </div>
        </>
    );
}

export default PrivacyPolicy;
