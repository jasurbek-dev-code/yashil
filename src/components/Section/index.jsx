"use client";

import Cards from "./Cards"
import Connection from "./Connection";
import Gallery from "./Gallery";
import Hero from "./Hero"
import NewsCards from "./NewsCards";
import Statistics from "./Statistics";

const Section = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <Statistics/>
            <NewsCards/>
            <Gallery/>
            <Connection/>
        </div>
    )
}

export default Section