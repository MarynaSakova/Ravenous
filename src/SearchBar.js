import React from "react";

const sortOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

function SearchBar() {
    return(
        <div className="search">
            <div className="sortingOptions">
            <ul>
                {Object.entries(sortOptions).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
                {/*
                <p id="bestMatch">Best Match</p>
                <p id="highestRated">Highest Rated</p>
                <p id="mostReviewd">Most reviewd</p>
                */}
            </div>
            <div className="searchBar">
                <input type="search" id="businessSearch" placeholder="Search Businesses" />
                <input type="search" id="locationSearch" placeholder="Where?" />
                <button>Let's Go</button>
            </div>
        </div>
    );
};


export default SearchBar;