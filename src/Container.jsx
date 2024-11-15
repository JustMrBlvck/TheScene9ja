import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './PrimaryComponent/Header'
import NewsComponent from './UI/NewsComponents/NewsComponent'
import SportsComponent from './UI/SportsComponents/SportsComponent'
import SideNav from './PrimaryComponent/SideNav'
import GeneralComponent from './UI/GeneralUserInterface/GeneralComponent'
import EntertainmentComponent from './UI/EntertainmentComponent.jsx/EntertainmentComponent'
import PoliticsComponent from './UI/PoliticsComponent/PoliticsComponent'

function Container() {
  return (
    <div>
         
          <BrowserRouter>
        
                        <Header/>
                        
                 <Routes>
 
                        <Route path='*' element={<GeneralComponent/>}/>
                        <Route path='/entertainment' element={<EntertainmentComponent/>}/>
                        <Route path='/news' element={<NewsComponent/>}/>
                        <Route/>
                        <Route path='/politics' element={<PoliticsComponent/>}/>
                        <Route path='/sports' element={<SportsComponent/>}/>

                 </Routes>
          
          </BrowserRouter>

    </div>
  )
}

export default Container
