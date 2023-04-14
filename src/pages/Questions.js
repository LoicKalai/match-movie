import React from 'react';
import "../../src/index.css";

import Logo from '../components/Logo';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

function Questions() {


    return (
        <>

        {/*Nav Logo & Home*/}
        <div className="place-nav flex pb-[35px]">
            <Logo />

            <Link to="/">
                <button className="border-[1px] border-[black] bg-[#0880C3] text-[whitesmoke] hover:text-[black] px-[10px] py-[5px] rounded-[10px] font-[Oswald] font-bold mt-[10px] mr-[10px]">
                Home
                </button>
            </Link> 
        </div>
        {/* /Nav Logo & Home*/}

        <div className="bloc-questions w-full h-[36.5rem]">
            <h2 className='font-[Oswald] font-bold text-[24px] pl-[25px] pb-[20px]'>Trouvez le film que vous voulez voir 🎥</h2>
            
            {/*Placer le bloc question*/}
            <div className="place-contain-questions flex flex-col items-center h-[33rem]">

                {/* Question */}
                <p className='text-question text-[20px] pb-[20px]'>Lorem lorem lorem lorem??</p>
                {/* Question */}

                <div className="contain-questions w-[40%] h-[60%]">
                    <ul className='flex flex-col h-full'>
                        <li className='flex-1 flex items-center cursor-pointer hover:bg-[#0880c3] bg-[whitesmoke] border-b-[#e2e2e2] border-b-[2px]'><span className='pl-[15px]'>lorem</span></li>
                        <li className='flex-1 flex items-center cursor-pointer hover:bg-[#0880c3] bg-[whitesmoke] border-b-[#e2e2e2] border-b-[2px]'><span className='pl-[15px]'>lorem</span></li>
                        <li className='flex-1 flex items-center cursor-pointer hover:bg-[#0880c3] bg-[whitesmoke] border-b-[#e2e2e2] border-b-[2px]'><span className='pl-[15px]'>lorem</span></li>
                        <li className='flex-1 flex items-center cursor-pointer hover:bg-[#0880c3] bg-[whitesmoke] border-b-[#e2e2e2] border-b-[2px]'><span className='pl-[15px]'>lorem</span></li>
                    </ul>
                    <div className="place-btn w-full flex justify-center pt-[45px]">
                        <button type='' className='font-bold font-[Oswald] bg-[#0880c3] text-[whitesmoke] border-[black] border-[1px] px-[20px] py-[5px] rounded-[10px] hover:text-[black]'>Suivant</button>
                    </div>
                </div> 
            </div>
        </div>

        <Footer />  
        </>
    );
}

export default Questions;