import "./PriceFilter.css"

const PriceFilter = ({priceFilter, handlePriceFilter}) => {

  return (
    <div className="price-filter_wrapper">
      <label className="price-filter">Sort By:</label>
      <select id="price-filter" value={priceFilter} onChange={handlePriceFilter}>
        <option value="default" disabled hidden>
          Select an option
        </option>
        <option value="high-to-low">(Price) Highest to lowest</option>
        <option value="low-to-high">(Price) Lowest to highest</option>
      </select>
    </div>
  );
}

export default PriceFilter;