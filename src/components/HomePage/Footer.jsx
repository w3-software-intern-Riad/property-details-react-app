import React from 'react';
import styles from '../../style/Footer.module.css';
import StarIcon from "../../assets/icons/star.png"
import MapImage from "../../assets/images/map.png"
import RightArrow from "../../assets/icons/right.png"
import Person from "../../assets/images/person.jpeg"
import Host from "../../assets/icons/host.png"

import Calendar from "../../assets/icons/calendar.png"
import WorkIcon from "../../assets/icons/work.png"
import RightIcon from "../../assets/icons/right.png"
import UserIcon from "../../assets/images/user.jpeg"
import RUser from "../../assets/icons/R--icon.png"
import ReportIcon from "../../assets/icons/red-flag.png"

const Footer = ({hotelData}) => {
    return (
        <div className={styles.lastSection}>
            <div className={styles.noReview}>
                <h2>No reviews (yet)</h2>
                <div className={styles.noReviewSubsec}>
                    <img className={styles.hostedIcon} src={StarIcon} alt="star" />
                    <p>
                        This host has 310 reviews for other places to <br /> stay.
                        <a href="#" className={styles.showReviewsLink}>Show other reviews</a>
                    </p>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className={styles.mapSection}>
                <h2>Where you'll be</h2>
                <h4>{hotelData.hotelData.address}</h4>
                <h4>Longitude:{hotelData.hotelData.longitude} <br /> <br />Latitude:{hotelData.hotelData.latitude}</h4>
                <img className={styles.mapImage} src={MapImage} alt="map" />
                <div className={styles.showMore}>
                    <u className={styles.showMoreText}>Show More</u>
                    <img className={styles.starIcon} src={RightArrow} alt="rightArrow" />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <h2>Meet your Host</h2>
            <div className={styles.meetOurHost}>
                <div className={styles.leftDetails}>
                    <div className={styles.superHost}>
                        <div className={styles.shLeftPortion}>
                            <img className={styles.hostedPerson} src={Person} alt="super-host" />
                            <h3>{hotelData.hotelData.host.name}</h3>
                            <div className={styles.superHostPerson}>
                                <img className={styles.hostedIcon} src={Host} alt="keyboard" />
                                <h4>Superhost</h4>
                            </div>
                        </div>
                        <div className={styles.shRightPortion}>
                            <h2>{hotelData.hotelData.host.reviewsCount}</h2>
                            <h4>Reviews</h4>
                           <hr />
                            <div className={styles.ratingText}>
                                <h2>{hotelData.hotelData.host.rating}</h2>
                                <img className={styles.hostedIcon} src={StarIcon} alt="star" />
                            </div>
                            <h4>Rating</h4>
                          <hr />
                            <h2>{hotelData.hotelData.host.yearsOfHosting}</h2>
                            <h4>Year hosting</h4>
                        </div>
                    </div>
                    <div className={styles.bornDetail}>
                        <img className={styles.hostedIcon} src={Calendar} alt="" />
                        <h4>Born in the 80s</h4>
                    </div>
                    <div className={styles.workDetail}>
                        <img className={styles.hostedIcon} src={WorkIcon} alt="" />
                        <h4>My work: Hospitality</h4>
                    </div>
                    <p>
                        Hello world! I love traveling and I also love welcoming <br />
                        guests in my home country, Perú, meeting new...
                    </p>
                    <div className={styles.showMore}>
                        <u className={styles.showMoreText}>Show More</u>
                        <img className={styles.starIcon} src={RightIcon} alt="rightArrow" />
                    </div>
                </div>
                <hr className={styles.dummyLine} />
                <div className={styles.rightDetails}>
                    <h3>{hotelData.hotelData.host.name} is a Superhost</h3>
                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great <br /> stay for guests</p>
                    <br />
                    <h3>Co-hosts</h3>
                    <div className={styles.coHosts}>
                        <img className={styles.userImage} src={UserIcon} alt="user" />
                        <h4>Percy</h4>
                        <img className={styles.userImage} src={RUser} alt="user" />
                        <h4>Raul</h4>
                    </div>
                    <br />
                    <br />
                    <h3>Host Details</h3>
                    <h4 className={styles.thirdTextColor}>Response rate: 100%</h4>
                    <h4 className={styles.thirdTextColor}>Responds within an hour</h4>
                    <button className={styles.messageHost}>Message Host</button>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <h2 className={styles.thingsToKnowTitle}>Things to know</h2>
            <br />
            <div className={styles.thingsToKnow}>
                <div className={styles.firstCol}>
                    <h4>House rules</h4>
                    <h4 className={styles.thirdTextColor}>Check-in after 4:00 PM</h4>
                    <h4 className={styles.thirdTextColor}>Checkout before 11:00 AM</h4>
                    <h4 className={styles.thirdTextColor}>2 guests maximum</h4>
                    <div className={styles.showMore}>
                        <u className={styles.showMoreText}>Show More</u>
                        <img className={styles.starIcon} src={RightIcon} alt="rightArrow" />
                    </div>
                </div>
                <hr className={styles.dummyLine} />
                <div className={styles.secondCol}>
                    <h4>Safety & property</h4>
                    <h4 className={styles.thirdTextColor}>Carbon monoxide alarm not reported</h4>
                    <h4 className={styles.thirdTextColor}>Smoke alarm not reported</h4>
                    <h4 className={styles.thirdTextColor}>Not suitable for children and infants</h4>
                    <div className={styles.showMore}>
                        <u className={styles.showMoreText}>Show More</u>
                        <img className={styles.starIcon} src={RightIcon} alt="rightArrow" />
                    </div>
                </div>
                <hr className={styles.dummyLine} />
                <div className={styles.thirdCol}>
                    <h4>Cancellation policy</h4>
                    <h4 className={styles.thirdTextColor}>Add your trip dates to get the Cancellation details for this stay</h4>
                    <div className={styles.showMore}>
                        <u className={styles.showMoreText}>Add dates</u>
                        <img className={styles.starIcon} src={RightIcon} alt="rightArrow" />
                    </div>
                </div>
            </div>
            <div className={styles.reportIconSecond}>
                <img className={styles.hostedIcon} src={ReportIcon} alt="report-icon" />
                <u className={styles.secondaryTextColor}>Report this listing</u>
            </div>
            <br />
            <br />
            <div className={styles.paginationPortion}>
                <h4>Peru &gt; Lima Province &gt; Jesus Maria</h4>
            </div>
            <h2>Explore other options in and around Lima</h2>
            <div className={styles.footerPortion1}>
                {/* Footer columns content */}
                <div >
                    <h4>Cieneguilla</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>

                    <h4>Chaclacayo</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                    <h4>San Isidro</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                </div>
                <div >
                    <h4>Punta Hermosa</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>

                    <h4>Barranco</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                    <h4>San Miguel</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                </div>
                <div >
                    <h4>Asia</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>

                    <h4>Santiago da Surco</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                    <h4>Lunahuana</h4>
                    <h4 id={styles.secondary_text_color}>Vacation rentals</h4>


                </div>

            </div>
            <br />
            <h3 className={styles.disableFooter}>
                Other types of stays on Airbnb
            </h3>
            <div className={styles.footerPortion2}>
                <div className={styles.firstTextFooter}>
                    <h4>Jesus Maria vacation rentals</h4>
                    <h4>Jesus Maria monthly stays</h4>
                    <h4>Apartment vacation rentals in Jesus Maria</h4>
                </div>
                <h4>Apartment vacation rentals in Lima Province</h4>
            </div>
        </div>
    );
}

export default Footer;