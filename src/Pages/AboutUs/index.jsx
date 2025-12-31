import { useEffect, useState } from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Banner from "../../Components/Banner";
import LacasidoUI from "../../Components/LacasidoUI";
import OurTeam from "../../Components/OurTeam";
import OurVision from "../../Components/OurVision";
import Loader from "../../Common/Loader";

const AboutUs= () =>{
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            // Simulate a data fetch
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsLoading(false);
        };
        loadData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <Banner />
                    <LacasidoUI />
                    <OurVision />
                    <OurTeam />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default AboutUs;