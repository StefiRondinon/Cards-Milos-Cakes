import React from 'react'
import Card from './Card';
import img1 from '../imagenes/img1.PNG';
import img2 from '../imagenes/img2.PNG';
import img3 from '../imagenes/img3.PNG';
import './CardsConteiner.css';

const cards = [
    {
        id: 1,
        title: 'Menú',
        image: img1,
        description: '¡Postres individuales!',
        url: 'https://www.instagram.com/miloscake_minicakes/',
    },
    {
        id: 2,
        title: 'Sobre Nosotros',
        image: img2,
        description: 'Conocé nuestra historia',
        url: 'https://www.instagram.com/miloscake_minicakes/',        
    },
    {
        id: 3,
        title: 'Contacto',
        image: img3,
        description: '¿Querés realizar un pedido? ',        
        url: 'https://.instagram.com/miloscake_minicakes/',
    }
]


export default function CardsConteiner() {
    return (
     
        <div className="container d-flex justify-content-center aling-items-center ">

            <div className="row text-center d-flex justify-content-center">

                {
                    cards.map(card => (
                        <div className="col-md-3 d-flex my-auto "   key={card.id}> 
                            <Card title={card.title} imageSource={card.image} description={card.description} url={card.url}/>
                        </div>
                    ))
                }
            </div>
        </div>
       
    )
}

