import React, { useState, useEffect } from 'react';
import Modal from './PopUps/Modal';
import HomePopUp from '../components/PopUps/HomePopUp';
import axios from 'axios';

const Home = () => {
    const [homePopUp, setHomePopUp] = useState(false);
    const [data, setData] = useState([])
    const getData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                setHomePopUp(true)
            }}>Home Modal Open</button>
            <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Home Page</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    </div>
                    <div className="w-full lg:w-8/12 ">
                        <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    </div>
                </div>
            </div>

            <Modal isOpen={homePopUp}>
                <HomePopUp handleClose={setHomePopUp} data={data} />
            </Modal>
        </div>
    )
}

export default Home
