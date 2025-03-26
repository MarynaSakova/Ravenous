import React from "react";
import Business from "./Business";
import business1Image1 from "./assets/images/Business1.jpg";
import business1Image2 from "./assets/images/Business2.jpg";
import business1Image3 from "./assets/images/Business3.jpg";
import business1Image4 from "./assets/images/Business4.jpg";
import business1Image5 from "./assets/images/Business5.jpg";


const businesses = [
    {
        image: business1Image1,
        name: "Brunnen11",
        address: "Am Brunnen 11",
        city: "Kirchheim bei München",
        state: "Germany",
        zipcode: 85551,
        category: "German food",
        rating: 4.6,
        reviewCount: 462
    },

    {
        image: business1Image2,
        name: "Olymp",
        address: "Münster Strasse 22",
        city: "Kirchheim bei München",
        state: "Germany",
        zipcode: 85551,
        category: "Greek food",
        rating: 4.2,
        reviewCount: 56
    },

    {
        image: business1Image3,
        name: "Mio",
        address: "Zendlinger 18",
        city: "München",
        state: "Germany",
        zipcode: 80333,
        category: "Italian food",
        rating: 4.9,
        reviewCount: 105
    },

    {
        image: business1Image4,
        name: "Asia",
        address: "Freisinger 28",
        city: "München",
        state: "Germany",
        zipcode: 80939,
        category: "Chinese food",
        rating: 3.9,
        reviewCount: 71
    },

    {
        image: business1Image5,
        name: "Kymata",
        address: "Margarethe-Danzi 25",
        city: "München",
        state: "Germany",
        zipcode: 80639,
        category: "Greek food",
        rating: 4.1,
        reviewCount: 550
    }
];

function BusinessList() {
    return (
        <div className="business-list">
            {businesses.map((business, index) => (
            <Business key={index} business={business} />
        ))}
        </div>    
    )
}
    export default BusinessList;