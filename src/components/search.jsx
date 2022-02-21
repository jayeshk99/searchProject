import { useSelector } from "react-redux"
import { store } from "../redux/store"


export const Search = ()=>{
    const { data } = useSelector((store)=>store)

    return (
        <div>
            {console.log(data)}
            <div id="navbar">
                <img src="https://theredroadfoundation.org/wp-content/uploads/2021/06/Google-Logo.png" alt=""  />
                <input type="text" />
                <button className="search">Search</button>
            </div>

            <div className="searchResults">
                <div className="sortBtns">
                    <button id="sort-alphabetically">sort-alphabetically</button>
                    <button id="sort-alphabetically-desc">sort-alphabetically-desc</button>
                    <button id="sort-by-date">sort-by-date</button>
                    <button id="sort-by-date-desc">sort-by-date-desc</button>
                    <button id="sort-by-quality">sort-by-quality</button>
                    <button id="sort-by-quality-desc">sort-by-quality-desc</button>
                    <button id="filter-explicit">filter-explicit</button>                
                </div>

                <div id="search-result">
                    <div className="result">

                    </div>
                </div>
            </div>
        </div>
    )
}