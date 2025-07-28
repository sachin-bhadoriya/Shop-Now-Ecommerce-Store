import React from 'react'
import Navbar from '../Elements/Navbar/navbar'
import CarouselItems from '../Elements/CarouselItems/carouselItems'
import ProductItems from '../Elements/ProductItems/productItems'
import CatSlider from '../Elements/CatSlider/catSlider'
import DiscountCards from '../Elements/DiscountCards/discountCards'
import BlogItems from '../Elements/BlogItems/blogItems'
import Features from '../Elements/Features/features'
import Footer from '../Elements/Footer/footer'


const Home = () => {
    return (
        <>
            <Navbar />
            <CarouselItems />
            <ProductItems />
            <CatSlider />
            <DiscountCards />
            <BlogItems />
            <Features />
            <Footer />
        </>
    )
}

export default Home