import React, { useState } from "react";


 function SidebarWrapper() {
  const [showCategorySidebar, setShowCategorySidebar] = useState(false);
  const [showSubcategorySidebar, setShowSubcategorySidebar] = useState(false);

  return (
    <div className="grid grid-cols-4">
      <Sidebar
        onToggleCategory={() => setShowCategorySidebar((prev) => !prev)}
      />
      {showCategorySidebar && (
        <CategorySidebar
          onClose={() => {
            setShowCategorySidebar(false);
            setShowSubcategorySidebar(false); // Close both when CategorySidebar is closed
          }}
          onShowSubcategory={(toggle) => setShowSubcategorySidebar(toggle)}
          subcategoryVisible={showSubcategorySidebar}
        />
      )}
      {showSubcategorySidebar && (
        <SubcategorySidebar onClose={() => setShowSubcategorySidebar(false)} />
      )}
    </div>
  );
}

export default SidebarWrapper
