import Product from "./Product";
import iphoneback from '../../../public/img/iphoneback.png'
import buds from '../../../public/img/buds.png'
import image from '../../../public/img/image.png'

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "iPhone 14",
      specs: "Kapacita: 256 GB, Farba: Silver",
      price: "1299 €",
      originalPrice: "1799 €",
      discount: "ušetríte 17% oproti pôvodnej sume",
      image: iphoneback,
    },
    {
      id: 2,
      name: "iPhone 14 PRO",
      specs: "Kapacita: 256 GB, Farba: Silver",
      price: "1299 €",
       image: image
    },
    {
      id: 3,
      name: "Apple AirPods 2 GEN",
      specs: "Kapacita: 256 GB, Farba: Silver",
      price: "1299 €",
     
      image: buds
    }
  ];

  return (
    <div className="w-[90%] mx-auto p-6 ">
      <div className="space-y-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}