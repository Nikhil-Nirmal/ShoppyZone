import React from 'react';
import './Header.css'
const Header = () => {
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
        </>
    )
}

export default Header