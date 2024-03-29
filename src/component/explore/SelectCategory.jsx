import "./SelectCategory.css"
import {useState} from "react";

const SelectCategory = ({checkBoxState, handleCheckBox}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="select-category_container">
    <h4 onClick={handleCategoryClick}>Category</h4>
    <div className={isOpen ? "open" : ""}>
        <span className="category-option">
          <input
            type="checkbox"
            id="category-men"
            name="men"
            checked={checkBoxState.men}
            onChange={handleCheckBox}
          />
          <label className="category-men">Men</label>
        </span>
      <span className="category-option">
      <input
        type="checkbox"
        id="category-women"
        name="women"
        checked={checkBoxState.women}
        onChange={handleCheckBox}
      />
      <label className="category-women">Women</label>
    </span>
    </div>
  </div>
  )
}

export default SelectCategory;