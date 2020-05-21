import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div className="container" >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width: "70%", height: 'auto'}}>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://wallpaperstock.net/wallpapers/thumbs1/35051hd.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="http://getwallpapers.com/wallpaper/full/7/4/2/633113.jpg" alt="Second slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="http://glamshelf.com/wp-content/uploads/2017/01/banner.jpg" alt="Third slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div>
        )
    }
}
