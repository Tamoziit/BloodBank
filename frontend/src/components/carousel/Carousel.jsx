import { useState, useEffect } from "react";
import "./Carousel.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        // eslint-disable-next-line react/prop-types
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        // eslint-disable-next-line react/prop-types
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    // Function to change slide automatically
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        // Cleanup function to clear interval when component unmounts or slide changes
        return () => clearInterval(interval);
    }, [slide]); // Re-run effect when slide changes

    return (

        <div className="carousel container">
            <FaCircleArrowLeft className="arrow arrow-left" onClick={prevSlide} />
            {data.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide slide-hidden"} />
            })}
            <FaCircleArrowRight className="arrow arrow-right" onClick={nextSlide} />
            <span className="indicators">
                {data.map((_, idx) => {
                    return <button className={slide === idx ? "indicator" : "indicator indicator-inactive"} key={idx} onClick={() => setSlide(idx)}></button>
                })}
            </span>
        </div>
    )
}

export default Carousel