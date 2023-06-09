import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg';
import bedIcon from "../assets/svg/bedIcon.svg";
import bathTubIcon from "../assets/svg/bathtubIcon.svg";

function ListingItem({ listing, id, onDelete, onEdit }) {
  return (
    <li className='categoryListing'>
      <Link to={`/category/${listing.type}/${id}`} className="categoryListingLink">
        <img src={listing.imgUrls[0]} alt={listing.name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className='categoryListingLocation'>
            {listing.location}
          </p>
          <p className="categoryListingName">
            {listing.name}
          </p>
          <p className="categoryListingPrice">
            $ {listing.offer ? listing.discountedPrice : listing.regularPrice}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <div className="categoryListingInfoText">
              {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : `${listing.bedrooms} bedroom`}
            </div>
            <img src={bathTubIcon} alt="bathtub" />
            <div className="categoryListingInfoText">
              {listing.bathrooms > 1 ? `${listing.bathrooms} Bedrooms` : `${listing.bathrooms} bedroom`}
            </div>
          </div>
        </div>
      </Link>
      {onDelete &&
        <DeleteIcon className='removeIcon' fill="rgb(231, 76, 60)" onClick={() => onDelete(listing.id, listing.name)} />}
      {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
    </li>
  );
}

export default ListingItem;