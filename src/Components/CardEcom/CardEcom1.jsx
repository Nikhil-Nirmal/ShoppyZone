import img9 from '../../Images/img9.jpg'
import './CardEcom1.css'
const CardEcom1 = (props) => {
    return(
//         <>
//             <div class="card-ecommerce">

//             <img class="product-image" src={img9} alt="product" />

//             <div class="card-title">

//                 ZARA MEN
    
//             </div>

//             <div class="card-text">

//                 ZARA MEN EXCLUSIVE RED VELVET JACKET

//             </div>

//             <div class="prices">

//             <span class="current-price">

//                 ₹ 2000 

//             </span>

//             <span class="before-price">

//                 ₹ 2700

//             </span>

//             <span class="discount">

//                 (5%)

//             </span>

//             </div>

//             <button class="btn">Add to cart</button>
//             <i class="fas fa-heart" id="heart" onclick="change()"></i>
                    
// </div>
//         </>
<>
            <div class="card-ecommerce">

            <img class="product-image" src={img9} alt="product" />

            <div class="card-title">

                {props.title}
    
            </div>

            <div class="card-text">

                {props.text}

            </div>

            <div class="prices">

            <span class="current-price">

                ₹ {props.currentPrice} 

            </span>

            <span class="before-price">

                ₹ {props.actualPrice}

            </span>

            <span class="discount">

                ({props.discount}%)

            </span>

            </div>

            <button class="btn">Add to cart</button>
            <i class="fas fa-heart" id="heart" onclick="change()"></i>
                    
</div>
        </>
    )
}

export default CardEcom1