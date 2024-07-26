import React, { useState, useEffect, useContext } from 'react'
import styles from "../../style/Banner.module.css"
import ShareIcon from "../../assets/icons/share.png"
import Bedroom from "../../assets/images/bedroom.jpg"

import B3 from "../../assets/images/b-3.jpeg"
import Menu from "../../assets/icons/3dotmenu.png"


const Banner = ({ hotelData }) => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = () => setIsGalleryOpen(true);
    const closeGallery = () => setIsGalleryOpen(false);

    const handlePrev = () => {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + hotelData.hotelData.images.length) % hotelData.hotelData.images.length);
    };

    const handleNext = () => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % hotelData.hotelData.images.length);
    };



    return (
        <>
            {hotelData ? (<>
                <h3 className={styles.MobileHeading} >{hotelData.hotelData.title}</h3>
                <div className={styles.room_image}>
                    <img id={styles.mobile_banner} src={Bedroom} className={styles.background_image} />
                    <div className={styles.navigation}>
                        <img onClick={openGallery} id={styles.show_all_photos} src={Menu} alt="show all icon" />
                        <div className={styles.banner_button}>
                            <button className={styles.share}>
                                <img id={styles.hostedIcon} src={ShareIcon} alt="Share" />
                            </button>
                            <button className="favorite">♡</button>
                        </div>

                    </div>
                    <div className={styles.image_count}>1 / {hotelData.hotelData.images.length}</div>
                </div>

                <div className={styles.titlebar}>
                    <h1 >{hotelData.hotelData.title}</h1>
                    <div className={styles.rightSideTitlebar}>
                        <div className={styles.shareDiv}>
                            <img id={styles.shareIcon} src={ShareIcon} alt="share" />
                            <h4 id={styles.shareButton}><u id={styles.cursor_pointer}>Share</u></h4>

                        </div>
                        <div className={styles.saveDiv}>
                            <i id={styles.saveIcon} className="fas fa-heart"></i>
                            <h4 id={styles.saveButton}><u id={styles.cursor_pointer}>Save</u></h4>

                        </div>
                    </div>

                </div>

                <div className={styles.gallerySection}>
                    <img id={styles.bedroomImages1} src={hotelData.hotelData.images[0]} alt="bedroom" />
                    <div className={styles.secondImageSection}>
                        <div className={styles.secondImageSection1}>
                            <img id={styles.bedroomImages} src={hotelData.hotelData.images[1]} alt="bedroom2" />
                            <img id={styles.bedroomImages} src={hotelData.hotelData.images[2]} alt="bedroom3" />
                        </div>
                        <div className={styles.secondImageSection1}>
                            <img id={styles.bedroomImages} src={hotelData.hotelData.images[3]} alt="bedroom4" />
                            <div className={styles.overlay_container}>
                                <img id={styles.bedroomImages} src={B3} alt="bedroom5" />
                                <div className={styles.overlay}>

                                    <span onClick={openGallery} className={styles.overlay_text}>Show all photos</span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {isGalleryOpen && (
                    <div className={styles.fullGallery} id="fullGallery">
                        <button className={styles.close} id="closeGallery" onClick={closeGallery}>Close</button>
                        <div className={styles.navigation_buttons}>
                            <button onClick={handlePrev} id="prevButton">Previous</button>
                            <button onClick={handleNext} id="nextButton">Next</button>
                        </div>
                        <img src={hotelData.hotelData.images[currentImageIndex]} alt={`Full view ${currentImageIndex + 1}`} />
                    </div>
                )}
            </>) : <div>Loading....</div>}

        </>
    )
}

export default Banner