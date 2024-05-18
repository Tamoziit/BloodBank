import Carousel from "../../components/carousel/Carousel";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";
import { slides } from "../../data/carouselData.json";

const Home = () => {

    return (
        <div className="container">
            <Navbar />
            <div className="home">
            <Carousel data={slides} />
                <UpcomingEvent />
                <News />
            </div>
        </div>
    )
}

export default Home