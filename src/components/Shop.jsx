import ProductsCart from "../layouts/ProductsCart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Shop() {
    const data = [
        {
            id: 0,
            img: "/img/product1.png",
            name: "Nike Air",
            price: "198.00",
            discount: "20% Off",
        },
        {
            id: 1,
            img: "/img/product2.png",
            name: "Sportswear Futura",
            price: "208.00",
            discount: "40% Off",
        },
        {
            id: 2,
            img: "/img/product3.png",
            name: "Royal Collection",
            price: "104.00",
            discount: "35% Off",
        },
        {
            id: 3,
            img: "/img/product4.png",
            name: "t-shirt combo pack",
            price: "299.00",
            discount: "40% Off",
        },
        {
            id: 4,
            img: "/img/product5.png",
            name: "CozyCraze Hoodies",
            price: "159.00",
            discount: "23% Off",
        },
        {
            id: 5,
            img: "img/product6.png",
            name: "LuxeLoom Purses",
            price: "189.00",
            discount: "30% Off",
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrow: 'false',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
            }
        }
        ]

    };
    return (
        <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
            {/*Heading section*/}
            <div>
                <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">Best sellers</h1>
            </div>
            {/*Carrusel section*/}
            <div className="mt-8">
                <Slider {...settings}>
                {data.map((item) => (
                    <ProductsCart key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} discount={item.discount} />
                ))}
                </Slider>    
            </div>
        </div>
    )
}
