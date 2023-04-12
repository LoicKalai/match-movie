import React from 'react';
import "../../src/index.css";
import Footer from "../components/Footer";
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';


function Questions() {
    return (
        <>
        <div className="place-nav flex">
            <Logo />

            <Link to="/">
                <button className="border-[1px] border-[black] bg-[#0880C3] text-[whitesmoke] hover:text-[black] px-[10px] py-[5px] rounded-[10px] font-[Oswald] font-bold mt-[10px] mr-[10px]">
                Home
                </button>
            </Link> 
        </div>

        <div className="place-contain-questions w-full h-[38.5rem] flex flex-col items-center justify-center">

        <h2 className='font-[Oswald] font-bold text-[25px] pb-[40px]'>Quelques questions pour nous aider 🙂</h2>

            <div className="contain-questions w-[50%] h-[75%]  border-[1px] border-[grey]">
                <p className='text-[20px] pb-[70px]'>Quel genre de film voulez-vous regarder?</p>

                <form className='flex justify-around'>
                    <div className="contain-1">
                        <label htmlFor="comedy" className="flex">
                            <input type="checkbox" name='comedy' id='comedy' value="comédie"/>
                            <p className='pl-[5px]'>Comédie</p>
                        </label><br/>

                        <label htmlFor="drama" className="flex">
                            <input type="checkbox" name='drama' id='drama' value="drame"/>
                            <p className='pl-[5px]'>Drame</p>
                        </label><br/>

                        <label htmlFor="action" className="flex">
                            <input type="checkbox" name='action' id='action' value="action"/>
                            <p className='pl-[5px]'>Action</p>
                        </label><br/>

                        <label htmlFor="horror" className="flex">
                            <input type="checkbox" name='horror' id='horror' value="horreur"/>
                            <p className='pl-[5px]'>Horreur</p>
                        </label><br/>
                    </div>

                    <div className="contain-2">
                        <label htmlFor="fantastic" className="flex">
                            <input type="checkbox" name='fantastic' id='fantastic' value="fantastique"/>
                            <p className='pl-[5px]'>Fantastique</p>
                        </label><br/>

                        <label htmlFor="science-fi" className="flex">
                            <input type="checkbox" name='science-fi' id='science-fi' value="science-fiction"/>
                            <p className='pl-[5px]'>Science-Fiction</p>
                        </label><br/>

                        <label htmlFor="documentaire" className="flex">
                            <input type="checkbox" name='documentary' id='documentaire' value="documentaire"/>
                            <p className='pl-[5px]'>Documentaire</p>
                        </label><br/>

                        <label htmlFor="romance" className="flex">
                            <input type="checkbox" name='romance' id='romance' value="romance"/>
                            <p className='pl-[5px]'>Romance</p>
                        </label><br/>
                    </div>
                </form>
                <div className="place-btn flex justify-center mt-[50px]">
                    <button className='border-[1px] border-[black] bg-[#0880C3] text-[whitesmoke] hover:text-[black] px-[25px] py-[5px] rounded-[10px] font-[Oswald] font-bold'>Suivant</button>
                </div>
            </div>
        </div>

        <Footer />  
        </>
    );
}

export default Questions;