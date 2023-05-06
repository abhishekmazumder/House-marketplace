import { Link } from 'react-router-dom';
import rentCategoryImg from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImg from "../assets/jpg/sellCategoryImage.jpg";
import Slider from '../components/Slider';

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* SLIDER */}
        <Slider />
        
        <p className="exploreCategoryHeading">
          Categories
        </p>
        <div className='exploreCategories'>
          <Link to="/category/rent">
            <img src={rentCategoryImg} className='exploreCategoryImg' alt="Rent" />
            <p className="exploreCategoryName">Places For Rent</p>

          </Link>
          <Link to="/category/sale">
            <img src={sellCategoryImg} className='exploreCategoryImg' alt="Rent" />
            <p className="exploreCategoryName">Places For Sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;