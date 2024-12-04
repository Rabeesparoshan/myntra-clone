import React, { useState } from 'react';
import Navbar from './Navbar.js';
import Categories from './Categories.js';
import ProductGrid from './ProductGrid.js';
import Footer from './Footer.js';
import Cart  from './Cart.js'
import './App.css';
import Wishlist from './Whishlist.js';
import Menpage from './menpage.js';
import Women from './women.js';
import Kid from './kid.js';
import HL from './HL.js';
import Beauty from './beauty.js'
import Studio from './studio.js';

const App = () => {
  const [contentState, setContentState] = useState("content");

  let wishlist = [];

  let contentPage = <>
    <Categories />    
    <ProductGrid />
    <Footer/>
  </>

  
  return (
      <>
        <Navbar changeState={setContentState}/>
        <div className="fixed-error-fixer"></div>
        {
          
          contentState == "content" ? contentPage :
          (contentState == "wishlist" ? <Wishlist wishlist={wishlist}/> : (
            contentState == "cart" ? <Cart/> : (
              contentState == "men" ? <Menpage wishlist={wishlist}/> : (
                contentState == "women" ? <Women/> : (
                  contentState == "kid" ? <Kid/> : (
                    contentState == "hl" ? <HL/> : (
                      contentState == "beauty" ? <Beauty/> : (
                        contentState == "studio" ? <Studio/> : null
                      )
                    )
                  )
                )
              )
            )
          ))

        }
      </>
  );
};

export default App;

