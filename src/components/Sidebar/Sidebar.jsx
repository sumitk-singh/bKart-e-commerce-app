import "../../pages-css/products-page-css/layout-handler.css";
import { useFilter } from "../../Contexts/filterContext";





const Sidebar = () => {

    const { filterDispatch, filterState } = useFilter()
    const { byPrice, byCategoryNames, byRating, price } = filterState

    const clickHandler = (item) => {
        const index = byCategoryNames.findIndex(ele => ele === item)
        if (index === -1) filterDispatch({ type: "FILTER_BY_CATEGORY", payload: item })
        else filterDispatch({ type: "REMOVE_BY_CATEGORY", payload: item })
    }

    const resetAll = () => {
        filterDispatch({ type: "CLEAR" })
    }

    const value = (p)=>{
        console.log(p);
        
    }

    return (
        <>
          
                <div className="sidebar">
                    <p className="spacer"></p>
                    <h3 className="sidebar-h2">Filters <span id="filter-clear" onClick={resetAll}>Clear</span></h3>
                    {/* <!-- Category --> */}
                    <h4>Category</h4>
                    <hr />
                    <div className="filter-category">
                        <div>
                            <input 
                                type="checkbox" 
                                id="tshirt" 
                                name="tshirt" 
                                value="tshirt"  
                                onChange={() => clickHandler("T-shirt")}
                                checked={byCategoryNames.includes("T-shirt")}
                                />
                            <label >T-shirt</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="jacket" 
                                name="jacket" 
                                value="jacket" 
                                onChange={() => clickHandler("jacket")}
                                checked={byCategoryNames.includes("jacket")}
                                />
                            <label >Jacket</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="shirt" 
                                name="shirt" 
                                value="shirt"  
                                onChange={() => clickHandler("shirt")}
                                checked={byCategoryNames.includes("shirt")}
                                />
                            <label >Shirt</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="pant" 
                                name="pant" 
                                value="pant"  
                                onChange={() => clickHandler("pant")}
                                checked={byCategoryNames.includes("pant")}
                                />
                            <label >Pant</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="shoes" 
                                name="shoes" 
                                value="shoes"  
                                onChange={() => clickHandler("shoes")}
                                checked={byCategoryNames.includes("shoes")} 
                            />
                            <label >Shoes</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="glass" 
                                name="glass" 
                                value="glass"   
                                onChange={() => clickHandler("goggles")}
                                checked={byCategoryNames.includes("goggles")}
                                />
                            <label > Goggles</label>
                        </div>
                    </div>
                    {/* <!-- end of category --> */}
                    <p className="spacer"></p>
                    {/* <!-- rating --> */}
                    <h4>Rating</h4>
                    <hr />
                    <div className="filter-rating">
                        <div id="rating-in-line">
                            <p>1<span class="fa fa-star checked"></span></p>
                            <p>3<span class="fa fa-star checked"></span></p>
                            <p>5<span class="fa fa-star checked"></span></p>
                        </div>
                        <input 
                            className="range-selector" 
                            type="range" 
                            min="1" 
                            max="5"
                            step="2"
                           
                            onChange={(e) => filterDispatch({ type: "FILTER_BY_RATING", payload: Number(e.target.value) })}
                                // onChange={(e)=>value(e.target.value)}
                            />
                    </div>

                    {/* <!-- end of rating --> */}
                    <p className="spacer"></p>

                    {/* <!-- price --> */}
                    <h4>Price</h4>
                    <hr />
                    <div className="filter-price">
                        <div>
                            <input 
                                type="radio" 
                                id="range-1" 
                                name="shirt" 
                                value={399}
                            
                                onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })}
                                // onChange={(e)=>value(e.target.value)}
                                />
                            <label htmlFor="range-1">Under ₹399</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id="range-2" 
                                name="shirt" 
                                value={1199}
                                onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })}
                                />
                            <label htmlFor="range-2">₹399 - ₹1199</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id="range-3" 
                                name="shirt" 
                                value={4999}
                                onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })}
                                />
                            <label htmlFor="range-3">₹1199 - ₹4999</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id="range-4" 
                                name="shirt" 
                                value={5000}
                                onChange={(e) => filterDispatch({ type: "FILTER_BY_PRICE", payload: Number(e.target.value) })}
                                />
                            <label htmlFor="range-4">Above ₹4999</label>
                        </div>
                        <p className="spacer"></p>
                        <h4>Sort by</h4>
                        <hr />
                        <div>
                            <input 
                                type="radio" 
                                id="range-5" 
                                name="price-low-and-high" 
                                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "Low_to_High" })}
                                checked={byPrice === "Low_to_High" ? true : false}
                                />
                            <label htmlFor="range-5">Price- Low to High</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                id="range-6" 
                                name="price-low-and-high" 
                                onChange={() => filterDispatch({ type: "SORT_BY_PRICE", payload: "High_to_Low" })}
                                checked={byPrice === "High_to_Low" ? true : false}
                                />
                            <label htmlFor="range-6">Price- High to Low</label>
                        </div>
                    </div>
                    {/* <!-- end of price --> */}
                </div>
              

       
        </>
    );
};

export default Sidebar;
