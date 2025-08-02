import React from 'react';
import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import ProductComponents from "./ProductComponents";
import FooterComponent from "./FooterComponent";

function WebPageComponent() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <HeaderComponent />
                <main className="isolate">
                    <HeroComponent />
                    <ProductComponents />
                </main>
                <FooterComponent />
            </div>
        </div>
    );
}

export default WebPageComponent;