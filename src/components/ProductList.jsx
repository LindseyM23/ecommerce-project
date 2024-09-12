// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import watchProduct from '../Assets/watchProduct.png';
// import blackphone from '../Assets/blackphone.png';
// import bluephone from '../Assets/bluephone.png';
// import headsets from '../Assets/headsets.png';
// import redphone from '../Assets/redphone.png';
// import whitephone from '../Assets/whitephone.png';
// import Dashboard from '../pages/Dashboard';
// import { addToCartPage } from '../pages/CartPage';
// import '../styles/ProductList.css';



// const ProductPage = () => {
//     const navigate = useNavigate();
//     const [searchQuery, setSearchQuery] = useState('');

//     const products = [
//         {
//             id: 1,
//             image: watchProduct,
//             name: "Apple Watch",
//             description: 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces.',
//             fullDescription: 'Stay connected and active with the Apple Watch Series 5 SE, featuring advanced health tracking and customizable watch faces. The Series 5 SE offers a Retina display, ECG app, fall detection, and built-in compass. It also includes an always-on altimeter and a variety of workout modes to monitor your fitness activities. The watch is swim-proof, making it ideal for all kinds of water activities.',
//             price: 529.99,
//             rating: 4
//         },
//         {
//             id: 2,
//             image: headsets,
//             name: "Sony ZX330BT",
//             description: "Light Grey",
//             smallDescription: 'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones.',
//             fullDescription: 'Experience wireless freedom and superior sound quality with the light grey Sony ZX33OBT headphones. These headphones offer Bluetooth connectivity, 30mm driver units for dynamic sound, and a swivel design for easy portability. The built-in microphone and NFC one-touch connection provide convenience for hands-free calls and music streaming.',
//             price: 39.99,
//             rating: 4
//         },
//         {
//             id: 3,
//             image: blackphone,
//             name: "iPhone 11",
//             description: "Serious Black",
//             smallDescription: 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life.',
//             fullDescription: 'The iPhone 11 in Serious Black offers stunning photos, powerful performance, and all-day battery life. It features a 6.1-inch Liquid Retina HD display, dual-camera system with 12MP Ultra Wide and Wide cameras, and Night mode for impressive low-light photography. Powered by the A13 Bionic chip, the iPhone 11 provides smooth performance and efficient multitasking.',
//             price: 619.99,
//             rating: 4
//         },
//         {
//             id: 4,
//             image: bluephone,
//             name: "iPhone 11",
//             description: "Subway Blue",
//             smallDescription: 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue.',
//             fullDescription: 'Enjoy the sleek design and robust features of the iPhone 11, now available in the eye-catching Subway Blue. This model includes a 6.1-inch Liquid Retina HD display, dual-camera system with Ultra Wide and Wide lenses, and all the advanced features of iOS. The A13 Bionic chip ensures powerful performance for all your apps and games.',
//             price: 619.99,
//             rating: 4
//         },
//         {
//             id: 5,
//             image: redphone,
//             name: "iPhone 11",
//             description: "Product RED",
//             smallDescription: 'Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color.',
//             fullDescription: 'Make a statement with the iPhone 11 in Product RED, combining cutting-edge technology with a bold color. This edition supports the global fight against AIDS with a portion of proceeds going to the Global Fund. It features the same powerful A13 Bionic chip, dual-camera system, and long battery life as other iPhone 11 models.',
//             price: 619.99,
//             rating: 4
//         },
//         {
//             id: 6,
//             image: whitephone,
//             name: "iPhone 13",
//             description: "Milky White",
//             smallDescription: 'The iPhone 13 in Milky White provides a clean, classic look with the power and performance you expect from Apple.',
//             fullDescription: 'The iPhone 13 in Milky White provides a clean, classic look with the power and performance you expect from Apple. This model includes a 6.1-inch Liquid Retina HD display, dual 12MP cameras with 4K video recording, and Night mode. With its robust design and water resistance, it is built to last in any environment.',
//             price: 619.99,
//             rating: 4
//         },
//         {
//             id: 7,
//             image: redphone,
//             name: "iPhone 14",
//             description: "Product RED",
//             smallDescription: 'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design.',
//             fullDescription: 'The latest iPhone 14 in Product RED delivers unmatched performance, cutting-edge features, and a striking design. Powered by the A16 Bionic chip, it provides extraordinary speed and efficiency. The iPhone 14 includes an advanced camera system with ProRAW capabilities and enhanced battery life for all-day use.',
//             price: 619.99,
//             rating: 4
//         }
//     ];

//     const handleItemView = (product) => {
//         navigate('/item-view', { state: { product } });
//     };

//     const handleAddToBag = (product) => {
//         addToDashboardBag(product);
//         addToCartPage(product);
//     };

//     const filteredProducts = products.filter(product =>
//         product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     return (
//         <>
//             <div className='container'>
//                 <div className="search-bar mb-4 mx-auto" style={{ maxWidth: '50%' }}>
//                     <label className="search-label" htmlFor="search">Search Item</label>
//                     <input type="text" id="search" className="form-control" placeholder="Apple Watch, Samsung 21, Macbook Pro" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//                 </div>
//                 <div className='row'>
//                     {filteredProducts.length > 0 ? (
//                         filteredProducts.map(product => (
//                             <div key={product.id} className='col-lg-3 col-md-12 col-sm-12 mb-4'>
//                                 <div className='card w-50 border-0 bg-transparent'>
//                                     <img src={product.image} alt={product.name} className="card-image mx-auto d-block" height='230' width='190' onClick={() => handleItemView(product)} />
//                                     <div className="card-content d-flex flex-column">
//                                         <div className="card-title">{product.name}</div>
//                                         <div className="card-description">{product.smallDescription}</div>
//                                         <div className="mt-auto d-flex action">
//                                             <span className="card-price">$ {product.price}</span>
//                                             <button className='btn' onClick={() => handleAddToBag(product)}>
//                                                 <i className='bi bi-bag-plus-fill'></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <div className="col-12">
//                             <p>No results</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductList;

import React from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Dashboard/sidebag.css';
import '../Styles/sidebar.css';
import '../Styles/product-page.css';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebag from '../components/Sidebag';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from '../redux/slices/cartSlice' // Import addToCart action
import '../Styles/Dashboard.css';

const ProductList = () => {
  const { id } = useParams(); // Get product ID from the URL parameter
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  ); // Find the product based on the ID
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle adding product to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch the addToCart action with the current product
  };

  // If the product is not found, return an error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="detail-page">
       <Sidebar className='sidebar'/>
      <div className="product-page-section">
        <div className="product-img">
          <span className="back-text">
            <FaArrowLeft className="back-icon" />
            <a href="/">Back</a> <br />
          </span>
          <div className="side-images">
            {/* Side images, these could be different angles of the product */}
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>

          {/* Main product image */}
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h1 className="product-h1">{product.name}</h1>
            <h3 className="product-h3">{product.description}</h3>
            <div className="star-rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <h4 className="product-price">{`$${product.price.toFixed(2)}`}</h4>
            <p className="product-p">{product.detailedDescription}</p>
          </div>
        </div>

        {/* Add to bag button */}
        <button className="add-to-bag" onClick={handleAddToCart}>
          <i className="fa-solid fa-bag-shopping-plus"></i> Add to bag
        </button>
        
        <hr />
        <h2>Description</h2>
        <p>{product.longDescription}</p>
      </div>
      <Sidebag className='sidebag'/>
    </div>
  );
};

export default ProductList;
