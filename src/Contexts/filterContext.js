import React, { createContext, useContext, useReducer } from "react"
import ProductData from "../db/productData";

const FilterContext = createContext()

const FilterProvider = ({ children }) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byCategoryNames: [],
        byRating: "",
        price: "",
        byPrice: "",  
    })

    

    function filterReducer(state, action) {
        
        switch (action.type) {

            case "FILTER_BY_CATEGORY":
                return {
                    ...state, byCategoryNames: [...state.byCategoryNames, action.payload]
                }
            case "REMOVE_BY_CATEGORY":
                return {
                    ...state,
                    byCategoryNames: state.byCategoryNames.filter(ele => ele !== action.payload)
                }
            case "FILTER_BY_RATING":
                return {
                    ...state, byRating: action.payload
                } 
            case "FILTER_BY_PRICE":
                return {
                    ...state, price: action.payload
                }   
            case "SORT_BY_PRICE":
                return {
                    ...state, byPrice: action.payload
                }  
            case "CLEAR":
                return {
                    byPrice: "",
                    byCategoryNames: [],
                    byRating: "",
                    price: 2500
                }
            default:
                return state
        }
    }

    const filteredProduct = () => {
        const { byPrice, byCategoryNames, byRating, price } = filterState
        let savedProduct = [...ProductData]

        if (byPrice) {
            savedProduct = savedProduct.sort((a, b) => {
                return byPrice === "High_to_Low" ? b.price - a.price : a.price - b.price
            })
        }

        if (byCategoryNames.length > 0) {
            savedProduct = savedProduct.filter((item) => byCategoryNames.includes(item.categoryName))
        }

        if (byRating) {
            savedProduct = savedProduct.filter(item => item.rating === byRating)
        }

        if (price) {

            let R1=0;

            if(price ===399){
            R1 = 0; 
            }
            else if( price ===1199){
            R1 = 399;
            }
            else if( price ===4999){
              R1 = 1199;
            }
            

            if(price<=4999){
                savedProduct = savedProduct.filter(item => (item.price >= R1) && (item.price <price))
            }
            else {
                savedProduct = savedProduct.filter(item => (item.price >price))
            }
            
        }

        return savedProduct
    }

    return (
        <FilterContext.Provider value={{ filterState, filteredProduct, filterDispatch }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter = () => useContext(FilterContext)

export { FilterProvider, useFilter };