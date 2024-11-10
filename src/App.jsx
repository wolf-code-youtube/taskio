import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documentation from "./pages/Documentation";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Teams from "./pages/teams";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Calendar from "./pages/Calendar";
import Faqs from './pages/faqs';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/documentation" element={<Documentation/>}/>
      <Route path="/overview" element={<Overview/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
      <Route path="/teams" element={<Teams/>}/>
      <Route path="/faqs" element={<Faqs/>}/>
      
      
      
      </Routes></BrowserRouter>
    </>
  )
}

export default App
