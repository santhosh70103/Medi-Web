import MainImage from '../Asserts/pexels-pixabay-268533.jpg'
import SampleImg from '../Asserts/SampleImg..png'
import { MdVerified } from "react-icons/md";
import chair from '../Asserts/chair.png'
import AlbertImg from '../Asserts/Albert.jpg'
import { IoIosMail } from "react-icons/io";




function MainPage() {




    return (
        <>
            <div className='flex justify-center items-center pt-10 text-[35px]'>Current Top Sellers</div>
            <div className='flex justify-center font-thin'>Our Top Selling Products</div>
            <div className='flex justify-center items-center pt-8'>

                <div className='flex flex-col gap-28 w-[65%] '>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-3 justify-center items-center border-2 boder-inherit '>
                            <img className='w-1/2' src={chair} alt="" />
                            <span>rating</span>
                            <span>ItemNo1</span>
                            <span>price</span>
                            <button>more details</button>
                        </div>
                        <div className='flex flex-col gap-3 justify-center items-center border-2 boder-inherit '>
                            <img className='w-1/2' src={chair} alt="" />
                            <span>rating</span>
                            <span>ItemNo1</span>
                            <span>price</span>
                            <button>more details</button>
                        </div><div className='flex flex-col  gap-3 justify-center items-center border-2 boder-inherit '>
                            <img className='w-1/2' src={chair} alt="" />
                            <span>rating</span>
                            <span>ItemNo1</span>
                            <span>price</span>
                            <button>more details</button>
                        </div><div className='flex flex-col gap-3 justify-center items-center border-2 boder-inherit '>
                            <img className='w-1/2' src={chair} alt="" />
                            <span>rating</span>
                            <span>ItemNo1</span>
                            <span>price</span>
                            <button>more details</button>
                        </div>
                    </div>
                    <div>
                        <span className='text-[35px]'>Medicinal Mushrooms, Tonic Herbs</span><br />
                        <span>Herbs have played a crucial role in human history,
                            serving not only as culinary delights but also as remedies in traditional medicine.
                            These versatile plants, valued for their aromatic and flavorful qualities, are often
                            used to enhance the taste of various dishes. Beyond the kitchen, herbs have been employed for their medicinal
                            properties for centuries, with cultures worldwide developing unique herbal remedies. Herbal medicine, also known as phytotherapy, harnesses the therapeutic potential of plants to address a range of ailments</span>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div className='w-[40%]'>
                                <img className='rounded-full hover:rounded-none' src={SampleImg} alt="no imnage found" />
                            </div>
                            <div className='w-[60%]  '>
                                <span className='block text-[35px] text-center'>
                                    Tonic Herbs
                                </span>
                                <span className='block text-center text-red-300 font-bold' >FUEL,BOOST,SUPERCHARGE,VIBE</span><br />
                                <span className='block text-center font-thin '>
                                    Tonic herbs hold a special place in the realm of herbalism,
                                    recognized for their ability to promote overall health and
                                    well-being. Unlike specific remedies that target particular ailments,
                                    tonic herbs
                                </span>
                                <br />
                                <span className='flex justify-center items-center'>
                                    <button className='text-[10px] bg-red-200 rounded-full pl-8 pr-8 p-2 '>SHOP NOW</button>
                                </span>
                            </div>
                        </div>
                        <div className='flex justify-between'>

                            <div className='w-[60%]  '>
                                <span className='block text-[35px] text-center'>
                                    Tonic Herbs
                                </span>
                                <span className='block text-center text-blue-300 font-bold' >FUEL,BOOST,SUPERCHARGE,VIBE</span><br />
                                <span className='block text-center font-thin'>
                                    Tonic herbs hold a special place in the realm of herbalism,
                                    recognized for their ability to promote overall health and
                                    well-being. Unlike specific remedies that target particular ailments,
                                    tonic herbs
                                </span>
                                <br />
                                <span className='flex justify-center items-center'>
                                    <button className='text-[10px] bg-green-200 rounded-full pl-8 pr-8 p-2 '>SHOP NOW</button>
                                </span>
                            </div>
                            <div className='flex w-[40%] justify-end'>
                                <img className='rounded-full ' src={SampleImg} alt="no imnage found" />
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between w-[98%]'>
                        <div className='flex '>
                            <div><MdVerified style={{ "color": "#f15f24", "fontSize": "50px" }} /></div>
                            <div>
                                <span className='text-lg text-orange-600 font-bold'>NOW STOCKED</span>
                                <br />
                                <span className='text-sm font-semibold'>THROUGHOUT LOS ANGELS</span>
                            </div>
                        </div>
                        <div className='flex  justify-end  '>
                            <div><MdVerified style={{ "color": "#f15f24", "fontSize": "50px" }} /></div>
                            <div className=''>
                                <span className='text-lg text-orange-600 font-bold'>NOW STOCKED</span>
                                <br />
                                <span className='text-sm font-semibold'>THROUGHOUT LOS ANGELS</span>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full' src={AlbertImg} alt="image not found" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span>
                                Albert Einstein
                            </span>
                        </div>
                        <div className='text-center'>
                            <span className='text-sm font-thin '> Albert Einstein was a famous physicist. His research spanned
                                from quantum mechanics to theories about
                                gravity and motion. After publishing some groundbreaking papers,
                                Einstein toured the world and gave speeches about his discoveries
                                Einstein toured the world and gave speeches about his discoveries
                            </span>
                        </div>

                    </div>
                    <div className='flex border-t-2 border-t-inherit border-b-2 border-b-inherit pt-3 pb-3'>
                        <div className='w-[65%] font-bold text-xl'>
                            <span className=''>SIGN UP FOR <span className='text-green-300'>15% OFF</span> AND EXCLUSIVE CONTENT</span>
                            <div>
                                <span className='text-sm font-thin'>
                                    short description goes right here
                                </span>
                            </div>
                        </div>
                        <div className='flex'>
                            <span className=''><IoIosMail style={{ "fontSize": "25px" }} /></span>
                            <input type="text" placeholder='Enter e-mail' className='relative h-[50%] border border-inherit focus:outline-none' />
                            <div className='pl-5'><button className='text-sm p-1 pl-5 pr-5 bg-green-400 rounded-full'>submit</button></div>
                        </div>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;