import React from 'react';
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'
import img5 from '../../Images/img5.jpg'
import img6 from '../../Images/img6.jpg'
import img7 from '../../Images/img7.jpg'
import img8 from '../../Images/img8.jpg'
import './Home.css'
const Home = () => {
    return(
        <>
            <header>
            <section> 
                <div id="container">
                    <div id="shopName"><a href="index.html"> <b>SHOPPY</b>Zone </a></div>
                        <div id="search">
                            <i className="fas fa-search search" id="search"></i>
                            <input type="text" id="input" name="searchBox" placeholder="Search for Clothing and Accessories"/>
                        </div>   
                        <div id="collection">
                            <div id="clothing"><a href="./clothing.html"> Clothing
                            </a></div>
                            <div id="accessories"><a href="./cart.html"> Cart </a></div>
                            <div id="wishlist"><a href="./whislist.html"><i className="far fa-heart"></i></a></div>
                            <div id="Login"><a href="./login.html">Login</a></div>
                        </div>
                        <img className="drawerView" onclick="openNav1()" src="https://zest-ui.netlify.app/Images/drawer2.png" alt="drawer"/>
                        <div id="mySidenav1" className="sideNav">
                        <a href="javascript:void(0)" className="closebtn1" onclick="closeNav1()">×</a>
                        <ul className="list-mobile-new">
                            <div id="search-2">
                                <i className="fas fa-search search" id="search"></i>
                                <input type="text" id="input-2" name="searchBox" placeholder="Search for Clothing and Accessories"/>
                            </div>
                            <div id="clothing"><a href="/"> CLOTHING </a></div>
                            <div id="accessories"><a href="./cart.html"> Cart </a></div>
                            <div id="wishlist"><a href="./whislist.html"><i className="far fa-heart"></i></a></div>
                            <div id="Login"><a href="./login.html">login</a></div>
                            
                        </ul>
                    </div>
                </div>
            </section>
        </header>

        <section>
        <div id="containerSlider">
            <div id="slidingImage"> <img src={img1} alt="image1"/> </div>
            <div id="slidingImage"> <img src={img2} alt="image2"/> </div>
        </div>
    </section>
    <section className="getStarted">
        <img className="banner-img" src={img8} alt=""/>
    </section>
    <div className="button-container">
        <a href="./product.html"><button className="btn-primary">Shop Now</button></a>
    </div>
    <section className="main-hero">
        <div className="exclusive-item">
            <div className="item1">
                <div className="card-ecommerce">

                    <img className="product-image" src={img5} alt="product" />
            
                    <div className="card-title">
            
                        Zara Men Jacket
            
                    </div>
            
                    <div className="card-text">
            
                        Exclusive Jackets
            
                    </div>
                            
                </div>
            </div>


            <div className="item2">
                <div className="card-ecommerce">

                    <img className="product-image" src={img6} alt="product" />
            
                    <div className="card-title">
            
                        Zara Men Jacket
            
                    </div>
            
                    <div className="card-text">
            
                        Exclusive Jackets
            
                    </div>        
                </div>
            </div>

            <div className="item3">
                <div className="card-ecommerce">

                    <img className="product-image" src={img7} alt="product" />
            
                    <div className="card-title">
            
                        Zara Men Jacket
            
                    </div>
            
                    <div className="card-text">
            
                        Exclusive Jackets
            
                    </div>        
                </div>
            </div>
            
        </div>
    </section>
    <div id="containerSlider2">
        <div id="slidingImage"> <img src={img3} alt="image3"/> </div>
        <div id="slidingImage"> <img src={img4} alt="image4"/> </div>
    </div>
    </>
    )
}

export default Home