import React from 'react'
import styles from '../../style/Review.module.css'
import ImageWithFallback from '../ImageShimmer'
const RoomDetails = ({roomDetails}) => {
   
    return (
        <>
        {roomDetails?(<>
            <div className={styles.sleepSpaceDiv}>
               
               <ImageWithFallback className={styles.sleepSpaceImage} src={roomDetails.roomImage} alt="bedroom" />
               <h3>{roomDetails.roomTitle}</h3>
               <h4 className={styles.secondaryTextColor}>{roomDetails.bedroomCount} bed</h4>
           </div></>):(<div>Loading....</div>)}
           
        </>
    )
}

export default RoomDetails