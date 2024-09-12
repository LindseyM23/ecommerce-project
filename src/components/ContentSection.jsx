import React,{ useState } from "react";
import "../styles/ContentSection.css";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import DashboardBag from "../components/DashboardBag";
import watchProduct from '../Assets/watchProduct.png';
import headsets from '../Assets/headsets.png';
import blackphone from '../Assets/blackphone.png';
import bluephone from '../Assets/bluephone.png';
import rephone from '../Assets/redphone.png';
import whitephone from '../Assets/whitephone.png';
import addbagIcon from '../Assets/addbagIcon.png';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const products = [
  {
    name: "Apple Watch",
    description: "Series 5 SE",
    image: watchProduct,
    price: "$529.99",
    alt: "Apple Watch"
  },
  {
    name: "Sony ZX330BT",
    description: "Light Grey",
    image: headsets,
    price: "$39.99",
    alt: "Sony ZX330BT"
  },
  {
    name: "iPhone 11",
    description: "Serious Black",
    image: blackphone,
    price: "$619.99",
    alt: "iPhone 11"
  },
  {
    name: "iPhone 11",
    description: "Subway Blue",
    image: bluephone,
    price: "$619.99",
    alt: "iPhone 11 Subway Blue"
  },
  {
    name: "iPhone 11",
    description: "Product RED",
    image: rephone,
    price: "$619.99",
    alt: "iPhone 11 Product RED"
  },
  {
    name: "iPhone 13",
    description: "Milky White",
    image: whitephone,
    price: "$619.99",
    alt: "iPhone 13 Product Milky white"
  },
  {
    name: "iPhone 14",
    description: "Product RED",
    image: rephone,
    price: "$619.99",
    alt: "iPhone 14 Product RED"
  },
  {
    
    name: "iPhone 14",
    description: "Product RED",
    image: rephone,
    price: "$619.99",
    alt: "iPhone 14 Product RED"
  }
];



function ContentSection(){

  // initiallizing redux ddispach

 // this function helps the search bar filter products too show the ones that fit the description
 const [filteredProducts, setFilteredProducts] = useState(products);
 const dispatch = useDispatch();

  const handleSearchChange = (query) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  // this function helps us show the product image on the dashboard bag when selected
  const [bagItems, setBagItems] = useState([]);

  const handleAddToBag = (product) => {
    dispatch(addItem(product.image)); 
    setBagItems([...bagItems, product.image]);
    
  };


 
  


  return (
    <>
    <SideBar/>
 
    <SearchBar onSearch={handleSearchChange} />
   


    <div className="content-area">
      
    {products.length> 0 ? (
          filteredProducts.map((product, index) =>  (
        <div className="item-card" key={index}>
          <div className="product-image">
            <Link to={`/product/${index}`} state={{product}}>
            <img
              className="product-image-content"
              src={product.image}
              width={150}
              alt={product.alt}
            />
            </Link>
          </div>
          <div className="product-content">
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-action">
              <div className="product-price">{product.price}</div>
              <div className="action-button">
                <img
                  className="action-icon"
                  src={addbagIcon}
                  alt="Buy Now"
                  onClick={() => handleAddToBag(product)}
                />
              </div>
            </div>
          </div>
        </div>
      ))
    ):(
      <p>No Products match your search</p>
    )}            
  </div>
  <DashboardBag bagItems={bagItems} />
     </>
      
        );
      

}
export default ContentSection;
