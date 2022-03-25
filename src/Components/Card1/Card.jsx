import React from "react";

const Card = () => {
    return(
        <div class="card-ecommerce">

        <img class="product-image" src="./img/img9.jpg" alt="product" />

        <div class="card-title">

            Zara-Men

        </div>

        <div class="card-text">

            Premium Red Velvet Jacket By Zara-Men

        </div>

        <div class="prices">

        <span class="current-price">

            ₹ 13,990.00

        </span>

        <span class="before-price">

            ₹15,990.00

        </span>

        <span class="discount">

            (5%)

        </span>

        </div>

        <button class="btn">Add to cart</button>
        <i class="fas fa-heart" id="heart" onclick="change()"></i>
                
    </div>
    )
}

export default Card