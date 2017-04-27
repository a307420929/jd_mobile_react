import './header.css';
import '../lib/swiper.min.css';
import React from 'react';
import Swiper from '../lib/swiper.min.js'
import fetchJsonp from 'fetch-jsonp';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {imgUrls:[]}
    }
    componentWillUnmount() {
        this.isMounted = false;
    }
    componentDidMount(){
        this.isMounted = true;
        console.log(this);
        fetchJsonp(this.props.source).then((response)=>{
            return response.json();
        }).then((data)=>{
            if(data.status){
                if(this.isMounted){
                    this.setState({
                        imgUrls:data.data,
                    })
                    new Swiper ('#header .swiper-container',{
                        loop:true,
                        pagination:'.swiper-pagination',
                        paginationClickable: true,
                        autoplay:3000,
                        autoplayDisableOnInteraction : false,
                    })
                }
            }else {
                alert(data.msg);
            }
        })
    }
    render(){
        let countId = 0;
        return(
            <div id="header">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.imgUrls.map((url) => {
                                return <div className="swiper-slide" key={"header" + countId++}>
                                    <img className='img' src={url}/>
                                </div>
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
