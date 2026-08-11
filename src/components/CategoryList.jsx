import { memo } from "react";
function CategoryList({ categories, selected, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-3 bg-indigo-900">
      {categories.map((category) => (                                 
        <button key={category} onClick={() => onSelect(category)} className={`p-3 rounded-lg border ${selected===category ? "bg-green-500 text-white" : "bg-gray-100"}`} > {category} </button>
      ))}
    </div>
  );
};
export default memo(CategoryList);