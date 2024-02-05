import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/header-logo.png";

// Video Imports
import bgMp4 from '../../assets/ezgif.com-gif-maker.mp4'
import bgWebM from '../../assets/ezgif.com-gif-maker.webm'

function HomePage(props) {
    return (
        <>
            <main className="homepage">
                <section className="header padding ">
                    <video id="bg-video" autoPlay loop muted playsInline>
                        <source src={bgWebM} type="video/webm" />
                        <source src={bgMp4} type="video/mp4" />
                    </video>
                    <div className="header__brand " id="tsparticles">
                        <h1 className="hidden-title">CodeWothMe Team</h1>
                        <img
                            src={headerLogo}
                            alt=""
                            className="header__brand__icon"
                        />
                        <p className="header__brand__description">
                        Are you a small business owner looking to establish a powerful online presence without breaking the bank? 
                        Look no further! CodeWithMe is here to revolutionize your digital journey. </p>
                    </div>
                </section>
                
                   {/* Call to Action Section
             <section className="cta padding">
                <h2 className="cta__heading">Ready to Boost Your Business Online?</h2>
                <p className="cta__description">
                    Book a personalized Zoom session with our experts to discuss your business needs and explore how we can elevate your online presence.
                </p>
                <a
                    href="YOUR_BOOKING_LINK_HERE"  // Replace with your actual booking link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Book Zoom Session
                </a>
            </section> */}
            {/*  <div className="centered-button">
                                 <a
                                     href="https://discord.com"
                                        target="_blank"
                                     className="btn btn-primary"
                                        >
                                        Book the zoom session
                                  </a>
                                 </div> */}
                <section className="btn-section">
                <a
                        href="https://discord.com"
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Book the Zoom Session for Free
                    </a>
                </section>

                /* Wrapper for background
                <div className="wrapper-top">
                    /* Stats Section */

                
                    {/* Services Section */}
                    <section className="services padding">
                        <h2 className="services__heading">OUR SERVICES</h2>
                        <div className="services__container">
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./web development.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Web Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Let our expert designers create a visually stunning and functional website tailored to your brand.
                                     From user-friendly interfaces to mobile optimization, we've got your website needs covered.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./plugin.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    Affordable Packages
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Choose from our range of affordable packages designed to suit businesses of all sizes.
                                     Whether you're just starting or looking to revamp your current site, we have the perfect solution for you.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft configuration.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    E-commerce Solutions
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Take your business online with our e-commerce solutions. 
                                    Our platforms are equipped with robust features to enhance your online store, 
                                    from secure payment gateways to inventory management.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./Discord Bot.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Telegram Bot Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    web also Develop bots according to the coustomers need.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    User Training:
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Not familiar with managing a website? No worries!
                                     Our user training ensures you have the knowledge to navigate and update your site with confidence.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                    Rapid Deployment
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Need a website fast? Our streamlined processes enable us to deploy your site quickly, 
                                    getting you online and visible to your audience in no time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                <section className="features padding">
                    <h2 className="features__heading">OUR FEATURES</h2>
                    <div className="features__container">
                        <div className="features__container__item card-hover">
                            <img
                                src="./quality.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                            Affordable Web Solutions
                            </h3>
                            <p className="features__container__item__details">
                            We understand the budget constraints of small businesses.
                             Our cost-effective packages ensure you get a professional website without compromising quality.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./AFFORDABLE.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                            Expert Support and Maintenance
                            </h3>
                            <p className="features__container__item__details">
                            Enjoy peace of mind with our dedicated support and maintenance team. 
                            From technical glitches to updates, we've got you covered, 
                            so you can focus on what you do best - running your business.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./EFFICIENT.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                            Tailored for Small Businesses:
                            </h3>
                            <p className="features__container__item__details">
                            Our solutions are crafted with small businesses in mind. Whether you're a local store, a service provider,
                             or a startup, our customizable templates and features are designed to suit your unique needs.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="PROFESSIONAL.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                            Modern Designs, Mobile-Optimized:
                            </h3>
                            <p className="features__container__item__details">
                            Make a lasting impression with our modern, mobile-responsive designs.
                             Your website will look stunning and function seamlessly on any device.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews padding">
                    <h2 className="reviews__heading">OUR REVIEWS</h2>

                    <div className="reviews__carousel">
                        <img
                            src="./btn-prev.png"
                            alt="btn-prev"
                            className="prev"
                        />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to form a great text body.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jason Mark
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jason Mark
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jason Mark
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                        Jason Mark
                                    </h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <img src="./btn-next.png" alt="" className="next" />
                    </div>
                    <a
                        href="https://discord.com"
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Join Our Discord
                    </a>
                    
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
