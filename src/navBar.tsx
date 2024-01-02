import React,{useState} from "react";
import { Button } from "./components/ui/button";
import {Svg} from './svgs/svg.tsx'
const NavBar = () => {
    const[flyer,setFlyer]=useState<boolean>(false)
    return (
        <div className="nav_bar ">
            <div className="continer">
                <nav className="flex justify-between items-center">
                    <div className="nav_logo">
                        <h2>nav_logo</h2>
                    </div>
                    <div className="nav_menus">
                        <ul className="flex gap-[70px]">
                            <li className="inline-flex items-center cursor-pointer">HOME</li>
                            <li className="inline-flex items-center cursor-pointer" onClick={()=>setFlyer(!flyer)}>ABOUT <Svg
                            flyer={flyer}
                            /> </li>
                            <li className="inline-flex items-center cursor-pointer">SERVICE</li>
                            <li className="inline-flex items-center cursor-pointer">BLOG</li>
                        </ul>
                    </div>
                    <div className="contacts Us">
                        <Button>Contacts Us</Button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default NavBar;