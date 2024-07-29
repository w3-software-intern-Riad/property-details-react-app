import React from 'react';
import styles from '../../style/Review.module.css'
import StarIcon from "../../assets/icons/star.png"
import Person from "../../assets/images/person.jpeg"
import Door from "../../assets/icons/door.png"
import Host from "../../assets/icons/host.png"
import RightArrow from "../../assets/icons/right.png"
import Bedroom from "../../assets/images/bedroom.jpg"
import Kitchen from "../../assets/icons/kitchen.png"
import TvIcon from "../../assets/icons/tv.png"
import WasherIcon from "../../assets/icons/washer.png"
import HairDryer from "../../assets/icons/hairdryer.png"
import CarbonIcon from "../../assets/icons/carbon.png"
import WifiIcon from "../../assets/icons/wifi.png"
import ElevetorIcon from "../../assets/icons/elevator.png"
import DryerIcon from "../../assets/icons/dryer.png"
import RefrigeratorIcon from "../../assets/icons/refrigerator.png"
import SmokeIcon from "../../assets/icons/smoke.png"
import KeyboardIcon from "../../assets/icons/keyboard.png"
import IconDownArrow from "../../assets/icons/icons8-down-arrow-52.png"
import ReportIcon from "../../assets/icons/red-flag.png"


import RoomDetails from './RoomDetails';

const Review = ({hotelData}) => {
  return (
    <>

      {hotelData ? (<><div className={styles.reviewSection}>
        <div className={styles.reviewSectionLeft}>
          <div className={styles.reviewTitle}>
            <h2>{hotelData.hotelData.address}</h2>
            <h4 className={styles.bedroomDetail}>{hotelData.hotelData.guestCount} guests . {hotelData.hotelData.bedroomCount} bedroom . {hotelData.hotelData.bedroomCount} bed . {hotelData.hotelData.bathroomCount} bath</h4>
            <div className={styles.starIconDiv}>
              <img className={styles.starIcon} src={StarIcon} alt="starIcon" />
              <h3>New</h3>
            </div>
          </div>
          <hr className={styles.horizontalLine} />
          <div className={styles.hosted}>
            <img className={styles.hostedPerson} src={Person} alt="hostedUser" />
            <div className={styles.hostedDetails}>
              <h3>Hosted by {hotelData.hotelData.host.name}</h3>
              <h4 className={styles.hostedDetail}>Superhosted . {hotelData.hotelData.host.yearsOfHosting} years hosting</h4>
            </div>
          </div>
          <hr className={styles.horizontalLine} />
          <div className={styles.hosted}>
            <img className={styles.hostedIcon} src={Door} alt="hostedUser" />
            <div className={styles.hostedDetails}>
              <h3>Self check-in</h3>
              <h4 className={styles.hostedDetail}>Check yourself in with the smart lock</h4>
            </div>
          </div>
          <div className={styles.hosted}>
            <img className={styles.hostedIcon} src={Host} alt="hostedUser" />
            <div className={styles.hostedDetails}>
              <h3>{hotelData.hotelData.host.name} is a Superhost</h3>
              <h4 className={styles.hostedDetail}>Superhosts are experienced, highly rated Hosts.</h4>
            </div>
          </div>
          <hr className={styles.horizontalLine} />
          <br />
          <div className={styles.footerTitle1}>
            <h3 className={styles.bedroomDetail}>Some info has been automatically translated.</h3>
            <u className={styles.showMoreText}>Show original</u>
          </div>
          <p>
            Welcome to our brand-new 1 bedroom apartment, in a quiet and central location next to a park! <br />
            <br />
            It's conveniently located in Pueblo Libre, just 25min. away from the airport. Steps away from Clínica Stella Maris, Universidad Antonio Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru and Alas Peruanas University. It's also very close to La ...
          </p>
          <div className={styles.showMore}>
            <u className={styles.showMoreText}>Show More</u>
            <img className={styles.starIcon} src={RightArrow} alt="rightArrow" />
          </div>
          <br />
          <hr />
          <h2>Where you'll sleep</h2>
          <div className={styles.RoomDetailsDiv}>
            {hotelData.roomData.map((roomDetails, index) => (
              <RoomDetails key={index} roomDetails={roomDetails} />
            ))}
          </div>
          <br />
          <hr />
          <br />
          <div className={styles.placeOffer}>
            <h2>What this place offers</h2>
            <div className={styles.offerList}>
              <div className={styles.leftList}>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={Kitchen} alt="" />
                  <h4 className={styles.secondaryTextColor}>Kitchen</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={TvIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Tv</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={WasherIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Washer</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={HairDryer} alt="" />
                  <h4 className={styles.secondaryTextColor}>Hair dryer</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={CarbonIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>
                    <s>Carbon monoxide alarm</s>
                  </h4>
                </div>
              </div>
              <div className={styles.rightList}>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={WifiIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Wifi</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={ElevetorIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Elevator</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={DryerIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Dryer</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={RefrigeratorIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>Refrigerator</h4>
                </div>
                <div className={styles.listTitleIcon}>
                  <img className={styles.commonListIcon} src={SmokeIcon} alt="" />
                  <h4 className={styles.secondaryTextColor}>
                    <s>Smoke alarm</s>
                  </h4>
                </div>
              </div>
            </div>
            <button className={styles.btnShowAmenities}>Show all {hotelData.hotelData.amenitiesCount} amenities</button>
          </div>
          <br />
          <hr />
          <br />
          <div className={styles.checkInDate}>
            <h2>Select check-in date</h2>
            <h4 className={styles.secondaryTextColor}>Add your travel dates for exact pricing</h4>
            <div className={styles.calendarContainer}>
              <div className={styles.calendarHeader}>
                <button className={styles.prevMonth}>&lt;</button>
                <h2>July 2024</h2>
                <h2 >August 2024</h2>
                <button >&gt;</button>
              </div>
              <div className={styles.calendars}>
                <div className={styles.month}>
                  <div className={styles.weekdays}>
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className={styles.days}>
                    <span></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
                    <span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
                    <span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span>
                    <span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span>
                    <span>28</span><span>29</span><span>30</span><span>31</span>
                  </div>
                </div>
                <div className={styles.augustMonth}>
                  <div className={styles.weekdays}>
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div className={styles.days}>
                    <span></span><span></span><span></span><span></span><span>1</span><span>2</span><span>3</span>
                    <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                    <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
                    <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
                    <span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
                  </div>
                </div>
              </div>
              <div className={styles.calendarFooter}>
                <img className={styles.hostedIcon} src={KeyboardIcon} alt="keyboard" />
                <u className={styles.thirdTextColor}>Clear dates</u>
              </div>
            </div>
          </div>
          <br />
        </div>

        <div className={styles.reviewRightSection}>
          <h2>Add dates for prices</h2>
          <table className={styles.table1}>
            <tr>
              <td>
                <div className={styles.tableDiv}>
                  <h3>check-in</h3>
                  <h5 className={styles.addDate}>Add date</h5>
                </div>
              </td>
              <td>
                <div className={styles.tableDiv}>
                  <h3>check-Out</h3>
                  <h5 className={styles.addDate}>Add date</h5>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className={styles.secondRow}>
                  <div className={styles.secondRowE1}>
                    <h3>Guests</h3>
                    <h5>1 guest</h5>
                  </div>
                  <img className={styles.starIcon} src={IconDownArrow} alt="" />
                </div>
              </td>
            </tr>
          </table>
          <button className={styles.checkButton}>Check availability</button>
          <div className={styles.reportIcon}>
            <img className={styles.hostedIcon} src={ReportIcon} alt="report-icon" />
            <u className={styles.secondaryTextColor}>Report this listing</u>
          </div>
        </div>
        <br />



      </div>
        <hr />
      </>) : (<div>Loading.........</div>)}

    </>
  );
};

export default Review;