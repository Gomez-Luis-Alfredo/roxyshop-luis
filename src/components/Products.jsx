import ProductsCart from "../layouts/ProductsCart"


export default function Products() {
    const data = [
        {
            id: 12,
            img: "/src/assets/img/product13.jpg",
            name: "Canvas Sneakers",
            price: "298.00",
            discount: "28% Off",
          },
          {
            id: 13,
            img: "/src/assets/img/product14.jpg",
            name: "shirt combo pack ",
            price: "199.00",
            discount: "40% Off",
          },
          {
            id: 14,
            img: "/src/assets/img/product15.jpg",
            name: "Hublot watch",
            price: "198.00",
            discount: "26% Off",
          }
    ]
    
  return (
    <div className="min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
        {/*Heading Products*/}
        <div>
            <h1 className="text-4xl text-center text-ExtraDarkColor font-semibold">New Arrivals</h1>
        </div>
        {/*cart Section*/}
        <div className="flex flex-wrap justify-center gap-5 pt-8">
            {data.map((item)=>(
                <ProductsCart 
                key={item.id} id={item.id} 
                name={item.name} 
                img={item.img} 
                price={item.price} 
                discount={item.discount} />
            ))}
        </div>
    </div>
  )
}
