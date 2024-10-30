import React from "react";
import "./Header.css"
import CustomButton from "../CustomButton/CustomButton";

function Header() {

    return(
        <div className="holder">
            <header className="header1">
                <div className="header-content flex flex-c text-center text-white">
                    <h2 className="header-title text-capitalize">Discover Your Perfect Recipe</h2><br/>
                    <p className="header-text fs-18 fw-3">
                    Welcome to MN Cooking, your ultimate destination for finding the perfect recipes for every craving. Whether you're in the mood for a comforting pasta dish, a refreshing salad, or a decadent dessert, we've got you covered. Explore our diverse collection of recipes curated for all tastes and occasions. Start cooking delicious meals today with MNcooking!
                    </p>
                    <CustomButton text="Discover"/>
                </div>
            </header>
        </div>
    )
}
export default Header;