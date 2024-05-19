import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InfoCard } from '../infoCard';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export function Catalog() {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        // Fetch film data from FastAPI backend
        axios.get('http://127.0.0.1:8000/film')
            .then(response => {
                setFilms(response.data);
            })
            .catch(error => {
                console.error('Error fetching film data:', error);
            });
    }, []);



    return (
        <div className="bg-gray-800 text-gray-100 text-2xl p-10">
            <Section Name={"Популярное"}>
                <Slider dots={false} infinite={true} slidesToShow={4} slidesToScroll={1} speed={500} >
                    {films.map((film, index) => {
                        return <InfoCard key={index} name={film.name} image={film.image} id={film.id}/>
                    })}
                </Slider>
            </Section>
            <Section Name={"Выбираем сериал"}>
                <Slider>
                    
                </Slider>
            </Section>
            <Section Name={"Современные хорроры"} />
        </div>
    )
}

function Section({ Name, children }) {
    return (
        <div id='section-container'>
            <h1>{Name}</h1>
            <div>
                {children}
            </div>
        </div>

    )
}

