import React from "react";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
    </div>
  );
}

export default CategoryFilter;
