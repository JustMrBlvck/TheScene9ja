import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './PrimaryComponent/Header'
import NewsComponent from './UI/NewsComponents/NewsComponent'
import SportsComponent from './UI/SportsComponents/SportsComponent'
import SideNav from './PrimaryComponent/SideNav'

function Container() {
  return (
    <div>
         
          <BrowserRouter>
        
                        <Header/>
                        
                 <Routes>
 
                        <Route/>
                        <Route/>
                        <Route path='/news' element={<NewsComponent/>}/>
                        <Route/>
                        <Route/>
                        <Route path='/sports' element={<SportsComponent/>}/>

                 </Routes>
          
          </BrowserRouter>

    </div>
  )
}

export default Container
