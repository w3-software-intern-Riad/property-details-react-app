import React from 'react'
import Banner from './Banner'

import Footer from './Footer'
import Header from './Header'
import Review from './Review'
import axios from "axios"
import serverUrl from '../../../data';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

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
                    <Banner hotelData={hotelData} />
                    <Review hotelData={hotelData} />
                    <Footer hotelData={hotelData} />
                </div>

            ) : (<div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: '#f0f0f0',
                fontFamily: 'Arial, sans-serif'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{
                        fontSize: '24px',
                        marginRight: '15px',
                        color: '#333'
                    }}>
                        Loading
                    </span>
                    {[0, 1, 2].map((i) => (
                        <div key={i} style={{
                            width: '10px',
                            height: '10px',
                            margin: '0 5px',
                            borderRadius: '50%',
                            backgroundColor: '#333',
                            animation: 'pulse 1.4s infinite ease-in-out both',
                            animationDelay: `${i * 0.16}s`
                        }} />
                    ))}
                </div>
                <style>
                    {`
                    @keyframes pulse {
                      0%, 80%, 100% { transform: scale(0); }
                      40% { transform: scale(1); }
                    }
                  `}
                </style>
            </div>)}
        </>


    )
}

export default HomePageElement