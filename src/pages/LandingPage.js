import React, { Component } from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import MostPicked from '../parts/MostPicked'
import Categories from '../parts/Categories'
import Testimonial from '../parts/Testimonial'
import landingPage from '../json/landingPage.json'
import Footer from '../parts/Footer'

export default class LandingPage extends Component{
    constructor(props){
        super(props);
        this.refMostPicked = React.createRef()
    }
    render (){
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
                <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked}></MostPicked>
                <Categories data={landingPage.categories} />
                <Testimonial data={landingPage.testimonial} />
                <Footer />
            </>
          )
    }
}
