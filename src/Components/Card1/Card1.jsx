import React from "react";

 import img5 from '../../Images/img5.jpg'
// import img6 from '../../Images/img6.jpg'
// import img7 from '../../Images/img7.jpg'

const Card1 = (props) => {
    return(
        <>
            <div class="card-ecommerce">

                <img class="product-image" src={img5} alt="product" />

                <div class="card-title">

                    {props.title}

                </div>

                <div class="card-text">

                    {props.text}

                </div>
        
            </div>
        </>
    )
}

export default Card1