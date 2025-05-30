import CheckoutSummary from "./Checkout/CheckoutSummary"
import ProductGrid from "./products/ProductGrid"
import ProductList from "./products/ProductList"


const ProductWithSummary = () => {
    return(
    
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
          <ProductList/>
          <CheckoutSummary/>
        </div>
     
    )
}

export default ProductWithSummary