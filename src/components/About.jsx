import React, { useState,useEffect } from 'react';
import Modal from './PopUps/Modal';
import AboutPopup from '../components/PopUps/AboutPopup';
import axios from 'axios';

const About = () => {
    const [aboutPopUp, setAboutPopUp] = useState(false);
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
	}, []);

    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                setAboutPopUp(true)
            }}>
                About Modal Open
            </button>
            <Modal isOpen={aboutPopUp}>
                <AboutPopup handleClose={setAboutPopUp} data={data}  />
            </Modal>
        </div>
    )
}

export default About
