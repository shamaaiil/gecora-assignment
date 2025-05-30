import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import ProductWithSummary from "@/components/ProductWithSummary";
import CategorySidebar from "@/components/sidebar/CategorySidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import SubcategorySidebar from "@/components/sidebar/SubcategorySidebar";
import { useState } from "react";

const Homepage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showSubcategorySidebar, setShowSubcategorySidebar] = useState(false);

  const handleMenuClick = () => {
    setShowSidebar(true);
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowCategorySidebar(false);
    setShowSubcategorySidebar(false);
  };

  const handleToggleCategory = () => {
    setShowCategorySidebar(!showCategorySidebar);
  };

  return (
    <div>
      <Navbar onMenuClick={handleMenuClick} />

      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={handleCloseSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full">
          <div className="w-80">
            <Sidebar
              onToggleCategory={handleToggleCategory}
              onClose={handleCloseSidebar}
            />
          </div>

          {showCategorySidebar && (
            <div className="animate-in slide-in-from-left duration-300">
              <CategorySidebar
                onClose={() => {
                  setShowCategorySidebar(false);
                  setShowSubcategorySidebar(false);
                }}
                onShowSubcategory={setShowSubcategorySidebar}
                subcategoryVisible={showSubcategorySidebar}
              />
            </div>
          )}

          {showSubcategorySidebar && (
            <div className="animate-in slide-in-from-left duration-300">
              <SubcategorySidebar
                onClose={() => setShowSubcategorySidebar(false)}
              />
            </div>
          )}
        </div>
      </div>

      <ProductWithSummary />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Homepage;
