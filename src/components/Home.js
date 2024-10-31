import React, { Fragment } from 'react'
import "./home.css"
import logo from './xenon-removebg-preview.png'
const Home = () =>{
    return(
        <Fragment>
            <div className='home text-center bg-blue'>
                <div className=' mt-4 x-logo text-center mb-4' style={{border:"0px"}}>
                    <img src={logo}  />
                    <p className='x-body-p '>
                        عدسات ذات جودة عالية بمواصفات قياسية
                    </p>
                </div>
                
            </div>
        </Fragment>
    )
}

export default Home