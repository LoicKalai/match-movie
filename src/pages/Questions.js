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

        <div className="bloc-questions w-full h-[36.5rem] border-[red] border-[1px]">
            <h2 className='font-[Oswald] font-bold text-[24px] pl-[25px] pb-[20px]'>Trouvez le film que vous voulez voir 🎥</h2>
            
            {/*Placer le bloc question*/}
            <div className="place-contain-questions flex flex-col items-center h-[33rem]">

                {/* Question */}
                <p className='text-question text-[20px] pb-[20px]'>Lorem lorem lorem lorem??</p>
                {/* Question */}

                <div className="contain-questions w-[70%] border-[blue] border-[2px] h-[80%]">
                    <ul className='border-[1px] border-[green] flex flex-col h-full'>
                        <li className='border-[yellow] border-[1px] flex-1'>lorem</li>
                        <li className='border-[yellow] border-[1px] flex-1'>lorem</li>
                        <li className='border-[yellow] border-[1px] flex-1'>lorem</li>
                        <li className='border-[yellow] border-[1px] flex-1'>lorem</li>
                    </ul>
                </div> 
            </div>
        </div>

        <Footer />  
        </>
    );
}

export default Questions;