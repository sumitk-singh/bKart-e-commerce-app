import ProductNavigator from '../../components/ProductsNavigator/ProductsNavigator.jsx';
import OfferBanner from '../../components/OfferBanner/OfferBanner.jsx';
import PriceCard from '../../components/PriceCard/PriceCard.jsx';

const HomePage = () => {
    return (
      <>
    <ProductNavigator/>
    <OfferBanner/>
   <PriceCard/>
    </>
    );
  };
  
  export default HomePage ;