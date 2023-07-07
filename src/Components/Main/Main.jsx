import React, {useEffect} from "react";
import './main.css';
import img from '../../Assets/beach.jpg';
import img2 from '../../Assets/london.jpg';
import img3 from '../../Assets/newyork.jpg';
import img4 from '../../Assets/dubai.jpg';
import img5 from '../../Assets/france.jpg';
import img6 from '../../Assets/germany.jpg';
import img7 from '../../Assets/korea.jpg';
import img8 from '../../Assets/japan.jpg';
import img9 from '../../Assets/finland.jpg';

import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsClipboardCheck} from 'react-icons/bs';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'The Grand Ho Tram',
        location: 'Viet Nam',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Luan Don City',
        location: 'Luan Don',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:4,
        imgSrc: img4,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:5,
        imgSrc: img5,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:6,
        imgSrc: img6,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:7,
        imgSrc: img7,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:8,
        imgSrc: img8,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    },
    {
        id:9,
        imgSrc: img9,
        destTitle: 'New York',
        location: 'USA',
        grade: 'CULTURAL RELAX',
        fees: '80$',
        description: 'A beach is a landform alongside a body of water which consists of loose particles. The particles composing a beach are typically made from rock, such as sand, gravel, shingle, pebbles, etc., or biological sources, such as mollusc shells or coralline algae.'
    }


];
const Main = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[]);
    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destination
                </h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id}  className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS <BsClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Main;