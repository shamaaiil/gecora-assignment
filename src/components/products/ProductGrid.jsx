import ProductCard from "./ProductCard";
import iphone from '../../../public/img/image.png'
import laptop from '../../../public/img/product card - device photo box.png'
import buds from '../../../public/img/buds.png'

 function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "iPhone 17 PRO (2023)",
      description: "Smartfóny:",
      price: "1299 €",
      badge: "Novinka",
      image: iphone,
    colors: [
        { name: "Space Black", hex: "#F4E8CE" },
        { name: "Silver", hex: "#403E3D" },
        {name : 'gray' , hex : '#594F63'},
        {name : 'light-gray' , hex : '#F0F2F2'}
      ]
    },
    {
      id: 2,
      name: "iPhone 17 PRO (2023)",
      description: "Smartfóny:",
      price: "1299 €",
      badge: "Novinka",
      image: laptop,
      colors: [
        { name: "Space Black", hex: "#F4E8CE" },
        { name: "Silver", hex: "#403E3D" },
        {name : 'gray' , hex : '#594F63'},
        {name : 'light-gray' , hex : '#F0F2F2'}
      ]
    },
    {
      id: 3,
      name: "iPhone 17 PRO (2023)",
      description: "Smartfóny:",
      price: "1299 €",
      image: buds,
       colors: [
        { name: "Space Black", hex: "#F4E8CE" },
        { name: "Silver", hex: "#403E3D" },
        {name : 'gray' , hex : '#594F63'},
        {name : 'light-gray' , hex : '#F0F2F2'}
      ]
    },
    {
      id: 4,
      name: "iPhone 17 PRO (2023)",
      description: "Smartfóny:",
      price: "1299 €",
      image: iphone,
      colors: [
        { name: "Space Black", hex: "#F4E8CE" },
        { name: "Silver", hex: "#403E3D" },
        {name : 'gray' , hex : '#594F63'},
        {name : 'light-gray' , hex : '#F0F2F2'}
      ]
    }
  ];

  return (
    <div className="w-[95%] mx-auto p-6 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid