import Footer from "../../Common/Footer";
import Header from "../../Common/Header";
import Banner from "../../Components/Banner";

import FooterBanner from "../../Components/Footerbanner";
import GemstoneGuide from "../../Components/GemstoneGuide";
// import FeaturedCategories from "../../Components/FeaturedCategories";
import NewArrivals from "../../Components/NewArrivals";
import PremiumCollection from "../../Components/PremiumCollection";
import ProductsSection from "../../Components/ProductsSection/ProductsSection";
import ReviewPopup from "../../Components/ReviewPopup";
import SaleBanner from "../../Components/SaleBanner";
import TrustBadges from "../../Components/TrustBadges";

const Home= () =>{
    return (
        <>
        <Header/>
        <Banner/>
        {/* <Categories/> */}
        <SaleBanner/>
        <ProductsSection/>
        {/* <FeaturedCategories/> */}
        <NewArrivals/>  
        <FooterBanner/>
        <GemstoneGuide />
        {/* <PremiumCollection/> */}
        {/* <TrustBadges/> */}
        <Footer/>
         {/* <ReviewPopup isOpen={true} /> */}
        </>
    )
}

export default Home;