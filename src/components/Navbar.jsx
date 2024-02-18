import { FaSearch } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";


function Navbar() {
    return (
        <>
            <div className="flex justify-center items-center space-x-[50px] pt-5">
                <div> <span className="pr-[100px]">HYBRID HERBS</span></div>
                <div className="flex space-x-20">
                    <span>about us</span>
                    <span>Medicinal Mushrooms</span>
                    <span>Tonic Herbs</span>
                    <span>contacts</span>
                </div>
                <div className="flex space-x-5">
                    <button className="pt-1"><FaSearch /></button>
                    <button className="pt-1"><IoBagHandleOutline /></button>
                    <button className="pt-1"><BsPersonCircle /></button>
                    <div className="flex space-x-2">
                        <span>US</span>
                        <span className="font-thin">|</span>
                        <span className="font-thin">UK</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Navbar