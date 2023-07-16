import React from "react";
// import Footer from "../components/features/Footer";
import {ReactComponent as ClockLogo} from '../pictures/logos/clockicon.svg';
import { ReactComponent as Stars} from '../pictures/logos/Stars.svg';
import {ReactComponent as Wrench} from '../pictures/logos/logo1.svg';
import {ReactComponent as Serviceman} from '../pictures/logos/logo4.svg';
import {ReactComponent as Dollares} from '../pictures/logos/logo5.svg';
import {ReactComponent as Diagnostics} from '../pictures/logos/logo6.svg';
import {ReactComponent as EngineRepair} from '../pictures/logos/logo7.svg';
import {ReactComponent as Wheelrepair} from '../pictures/logos/logo8.svg';
import {ReactComponent as OilFilter} from '../pictures/logos/logo9.svg';
import {ReactComponent as BodyWork} from '../pictures/logos/logo10.svg';
import {ReactComponent as Batteries} from '../pictures/logos/logo11.svg';
import {ReactComponent as InsuranceClaim} from '../pictures/logos/logo12.svg';
import {ReactComponent as CustomService} from '../pictures/logos/logo13.svg';
import whiteCar from '../pictures/cars/picture13.png'
import krokodil from '../pictures/cars/picture20.png'
import {ReactComponent as Logo1} from '../pictures/logos/logo18.svg'
import {ReactComponent as Logo2} from '../pictures/logos/logo16.svg'
import {ReactComponent as Logo3} from '../pictures/logos/logo17.svg'
import {ReactComponent as Logo4} from '../pictures/logos/logo15.svg'
import {ReactComponent as Logo5} from '../pictures/logos/logo14.svg'
import avatar1 from '../pictures/avatars/picture16.png'
import avatar2 from '../pictures/avatars/picture1.png'
import MyButton from "../components/atoms/Button/Button";
import FooterTop from "../components/features/footerTop/FooterTop";



const Home = () => {
	return (
		<div className="home-container">
			<div className="header">
				<div className="header-left">
					<h1>Get your vehicle service done online at one place</h1>
					<MyButton title='Book a Service'/>
					<div className="header-left-bottom">
						<ClockLogo/>
						<div className="header-left-bottom-right">
							<p>We are open</p>
							<p>Monday to Friday 9:00 AM to  10:00  AM</p>
						</div>
					</div>
				</div>
				<div className="header-right">
					<div className="quick-service">
						<div className="green-circle">
							<p>24</p>
							<p>hr</p>
						</div>
						<p>Quick service</p>
					</div>
					<div className="rating-container">
						<div className="rating">
							<p>4.5/5</p>
							<p>Rating</p>
						</div>
						<Stars/>
					</div>
				</div>
			</div>

			<div className="quote-container">
				<div className="quote-left">
					<h2>We are taking car servicing seriously</h2>
					<div className="feature">
						<Wrench/>
						<div className="feature-heading">
							<p>Convenient service</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="feature">
						<Serviceman/>
						<div className="feature-heading">
							<p>Expert mechanics</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="feature">
						<Dollares/>
						<div className="feature-heading">
							<p>Transparent pricing</p>
							<p>Through True Rich Attended does no end it his mother since real had half every him.</p>
						</div>
					</div>
					<div className="quote-link">
						<p>Know more about us ⟶</p>
					</div>
				</div>
				<div className="quote-right">
					<h3>Get a quote for the car service</h3>
					<div className="quote-inputs">
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Enter your location"></input>
						<input type="text" placeholder="Your phone number"></input>
					</div>
					<button>Get your quote</button>
				</div>
			</div>

			<div className="process-section">
				<div className="process-left">
					<h2>We follow a clear process to help you out.</h2>
					<p>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire</p>
					<button>Learn more</button>
				</div>
				<div className="process-right">
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>01</p>
					</div>
					<div className="process-right-text">
						<p>Get a Quote</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>02</p>
					</div>
					<div className="process-right-text">
						<p>Book an Appointment</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
					<div className="process-right-feature">
					<div className="process-right-logo">
						<p>03</p>
					</div>
					<div className="process-right-text">
						<p>Get your Service Done</p>
						<p>Through True Rich Attended does no end it his mother since real had half every.</p>
					</div>
					</div>
				</div>
			</div>

			<div className="offer">
				<p>What we Offer</p>
				<h2>We offer full service auto repair & maintenance</h2>
				<div className="offer-grid">
					<div className="offer-grid-top">
						<div className="offer-grid-single">
							<Diagnostics/>
							<p>Diagnostics</p>
						</div>
						<div className="offer-grid-single">
							<EngineRepair/>
							<p>Engine Repair</p>
						</div>
						<div className="offer-grid-single">
							<Wheelrepair/>
							<p>Wheel Repair</p>
						</div>
						<div className="offer-grid-single">
							<OilFilter/>
							<p>Oil Filter</p>
						</div>
					</div>
					<div className="offer-grid-top">
						<div className="offer-grid-single">
							<BodyWork/>
							<p>Body Work</p>
						</div>
						<div className="offer-grid-single">
							<Batteries/>
							<p>Batteries</p>
						</div>
						<div className="offer-grid-single">
							<InsuranceClaim/>
							<p>Insurance Claim</p>
						</div>
						<div className="offer-grid-single">
							<CustomService/>
							<p>Custom Service</p>
						</div>
					</div>
				</div>
				<p className="last-p">Learn about services ⟶</p>
			</div>

			<div className="cta">
				<div className="first-cta">
					<img src={whiteCar} alt="white car"/>
				</div>
				<div className="second-cta">
					<h3>Get in touch with us for your service related query</h3>
					<button>Contact Us</button>
				</div>
				<div className="last-cta">
					<img src={krokodil} alt="jump leads"/>
				</div>
			</div>

			<div className="experience">
				<div className="experience-number">
					<h2>20+</h2>
					<p>Proffesional</p>
				</div>
				<div className="experience-number">
					<h2>10+</h2>
					<p>Years Experience</p>
				</div>
				<div className="experience-number">
					<h2>12K+</h2>
					<p>Service Closed</p>
				</div>
				<div className="experience-number">
					<h2>100%</h2>
					<p>Customer Satisfaction</p>
				</div>
			</div>

			<div className="brands">
				<h3>Brands we Serve</h3>
				<div className="brands-logo">
					<Logo1/>
					<Logo2/>					
					<Logo3/>					
					<Logo4/>					
					<Logo5/>					
				</div>
				<div className="brands-logo">
					<Logo1/>
					<Logo2/>					
					<Logo3/>					
					<Logo4/>					
					<Logo5/>					
				</div>
			</div>

			<div className="testimonials">
				<h3>Our customers say the nicest things about our service</h3>
				<div className="testimonials-sliders-container">
					<div className="testimonials-sliders">
						<div className="testimonials-sliders-top">
							<img src={avatar1} alt="avatar"/>
							<div className="testimonials-sliders-top-right">
								<p>Jonathan Vallem</p>
								<p>New York</p>
							</div>
						</div>
						<p className="testimonials-p">I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</p>
					</div>
					<div className="testimonials-sliders">
						<div className="testimonials-sliders-top">
							<img src={avatar2} alt="avatar"/>
							<div className="testimonials-sliders-top-right">
								<p>Smith Johnson</p>
								<p>New York</p>
							</div>
						</div>
						<p className="testimonials-p">I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car in a short comprehensive look on all the working</p>
					</div>
				</div>
			</div>

			<div className="faq">
				<h3>Frequently Asked Questions</h3>
				<div className="faq-container">
					<div className="faq-left">
						<p>How long should a car repair take?</p>
						<p>I have got my car repaired at Finsweet many times before, they are good at what they do. Not only did they repair my car I have got my car repaired at Finsweet I have got my car repaired at Finsweet</p>
					</div>
					<div className="faq-right">
						<div className="orange">-</div>
					</div>
				</div>
				<div className="faq-container">
					<div className="faq-left">
						<p>How long should a car repair take?</p>
					</div>
					<div className="faq-right">
						<div className="orange">+</div>
					</div>
				</div>
				<div className="faq-container">
					<div className="faq-left">
						<p>How do I schedule my car's appointment?</p>
					
					</div>
					<div className="faq-right">
						<div className="orange">+</div>
					</div>
				</div>
				<div className="faq-container">
					<div className="faq-left">
						<p>What are the repair services provided?</p>
					
					</div>
					<div className="faq-right">
						<div className="orange">+</div>
					</div>
				</div>
				<div className="faq-container">
					<div className="faq-left">
						<p>How do I find auto body shops near me?</p>
					</div>
					<div className="faq-right">
						<div className="orange">+</div>
					</div>
				</div>
				<div className="faq-container">
					<div className="faq-left">
						<p>Genuine spare parts during car repair?</p>
					</div>
					<div className="faq-right">
						<div className="orange">+</div>
					</div>
				</div>
			</div>
			<FooterTop/>
            {/* <Footer/> */}

		</div>
	);
};

export default Home;
