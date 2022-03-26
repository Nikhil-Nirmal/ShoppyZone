import React from 'react';
import img1 from '../../Images/img1.png'
import img2 from '../../Images/img2.png'
import img3 from '../../Images/img3.png'
import img4 from '../../Images/img4.png'
import Card1 from '../Card1/Card1';
// import img5 from '../../Images/img5.jpg'
// import img6 from '../../Images/img6.jpg'
// import img7 from '../../Images/img7.jpg'
import img8 from '../../Images/img8.jpg'
import './Home.css'
import Header from '../Header/Header';
// import CardEcom1 from '../CardEcom/CardEcom1';
const Home = () => {
    return(
        <>
        <Header/>
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
                <Card1 title='H & M' text='Premium Jackets' />
            </div>


            <div className="item2">
                <Card1 title='ZARA MEN' text='Beautiful Jacket'/>
            </div>

            <div className="item3">
                <Card1  title='Jockey' text=' Jacket'/>
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