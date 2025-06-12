"use client";

import Cards from "./Cards"
import Connection from "./Connection";
import Gallery from "./Gallery";
import Hero from "./Hero"
import NewsCards from "./NewsCards";
import Statistics from "./Statistics";
import PartnersCarousel from './PartnersCarousel'
import ProjectsCarousel from './ProjectsCarousel'

const Section = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <Statistics/>
            <NewsCards/>
            <ProjectsCarousel/>
            <PartnersCarousel/>
            <Gallery/>
            <Connection/>
        </div>
    )
}

export default Section