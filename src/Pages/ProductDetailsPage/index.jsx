import { useEffect, useState } from "react"
import Footer from "../../Common/Footer"
import Header from "../../Common/Header"
import Loader from "../../Common/Loader"
import ProductDetail from "../../Common/ProductDetail"
import TrustBadges from "../../Components/TrustBadges"

const ProductDetailPage = () => {
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
        <>
            {isLoading ? <Loader /> : (
                <>
                    <Header />
                    <ProductDetail />
                    <Footer />
                </>
            )}
            {/* <TrustBadges/> */}
        </>
    )
}

export default ProductDetailPage;