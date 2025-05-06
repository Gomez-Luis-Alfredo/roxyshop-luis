import ProductsCart from "../layouts/ProductsCart";


export default function Features() {
    const data = [
        {
          id: 6,
          img: "/img/product7.png",
          name: "FrostFire Outerlayers",
          price: "398.00",
          discount: "24% Off",
        },
        {
          id: 7,
          img: "/img/product8.png",
          name: "DaintyDoll Dresses",
          price: "258.00",
          discount: "40% Off",
        },
        {
          id: 8,
          img: "/img/product9.png",
          name: "TrendTraverse Bag",
          price: "104.00",
          discount: "35% Off",
        },
        {
          id: 9,
          img: "/img/product10.png",
          name: "Fitness Footgear",
          price: "299.00",
          discount: "40% Off",
        },
        {
          id: 10,
          img: "/img/product11.png",
          name: "UrbanBelle Hoodies",
          price: "129.00",
          discount: "28% Off",
        },
        {
          id: 11,
          img: "/img/product12.png",
          name: "Elite Handbags",
          price: "189.00",
          discount: "30% Off",
        },
      ];
    
  return (
    <div className="min-h-screen flex flex-col justify-center pt-24">
        {/*Heading section*/}
        <h1 className="text-4xl text-center font-semibold text-ExtraDarkColor">Exclusive Products</h1>
        {/*Card Section*/}
        <div className="flex flex-wrap justify-center gap-5 pt-8">
            {data.map((item)=>(
                <div className="md:w-2/4 lg:w-1/4">
                <ProductsCart 
                key={item.id} id={item.id} 
                name={item.name} 
                img={item.img} 
                price={item.price} 
                discount={item.discount} />
                </div>
            ))}
        </div>
    </div>
  )
}
