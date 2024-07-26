import React from 'react'
import styles from '../../style/Review.module.css'
const RoomDetails = ({roomDetails}) => {
    console.log("Room details:",roomDetails)
    return (
        <>
        {roomDetails?(<>
            <div className={styles.sleepSpaceDiv}>
               
               <img className={styles.sleepSpaceImage} src={roomDetails.roomImage} alt="bedroom" />
               <h3>{roomDetails.roomTitle}</h3>
               <h4 className={styles.secondaryTextColor}>{roomDetails.bedroomCount} bed</h4>
           </div></>):(<div>Loading....</div>)}
           
        </>
    )
}

export default RoomDetails