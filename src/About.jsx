import React, { useState,useEffect } from 'react';
import Modal from './Modal';
import AboutPopup from './AboutPopup';
import axios from 'axios';

const About = () => {
    const [isVideoPlayerPopUpOpen, setIsVideoPlayerPopUpOpen] = useState(false);
    const [data, setData] = useState([])
    const getData = async ()=>{
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
		getData();
	}, [isVideoPlayerPopUpOpen]);

    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                setIsVideoPlayerPopUpOpen(true)
            }}>
                Modal Open
            </button>
            <Modal isOpen={isVideoPlayerPopUpOpen}>
                <AboutPopup handleClose={setIsVideoPlayerPopUpOpen} data={data}  />
            </Modal>
        </div>
    )
}

export default About
