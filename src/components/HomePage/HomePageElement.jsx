import React from 'react'
import Banner from './Banner'

import Footer from './Footer'
import Header from './Header'
import Review from './Review'
import axios from "axios"
import serverUrl from '../../../data';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'

const HomePageElement = () => {
    const [hotelData, setHotelData] = useState();

    const { hotel_slug } = useParams(); // Extract hotelName from URL
    const navigate = useNavigate();
    const getHotelData = async () => {
        try {
            const response = await axios.get(`${serverUrl}/${hotel_slug}`);

            if (response.status === 200) {
               
                setHotelData(response.data);

            }
        } catch (error) {
            console.log(error);
            navigate('/not-found');
        }
    }
    useEffect(() => {
        getHotelData();


    }, [])
    return (
        <>
            {hotelData ? (
                <div>
                    <Header />
                    <Banner hotelData={hotelData}/>
                    <Review hotelData={hotelData}/>
                    <Footer hotelData={hotelData}/>
                </div>

            ) : (<div>Loading..........</div>)}
        </>


    )
}

export default HomePageElement