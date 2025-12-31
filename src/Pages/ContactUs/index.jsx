import { useEffect, useState } from "react";
import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Loader from "../../Common/Loader";


const ContactUs = () =>{
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Simulate an API call
                await new Promise((resolve) => setTimeout(resolve, 1000));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <>
        {loading ? <Loader /> : (
          <>
            <Header/>
            <Banner/>
            <Contact/>
            <Footer/>
          </>
        )}
        </>
    )
}

export default ContactUs;