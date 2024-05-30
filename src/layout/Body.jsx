import React from 'react';
import Card from '../components/Card';
import './Body.css'
const Body = () => {
    const fruits = [
        {
            id: 1,
            price: 10.98,
            name: "Banana",
            description: "fresh banana from thailand"
        },
        {
            id: 2,
            price: 8,
            name: "Apple",
            description: "fresh apple from thailand"
        },
        {
            id: 3,
            price: 12.98,
            name: "Mango",
            description: "fresh mango from thailand"
        },
        {
            id: 4,
            price: 5.5,
            name: "Kiwi",
            description: "fresh kiwi from thailand"
        },
        {
            id: 5,
            price: 6.89,
            name: "Orange",
            description: "fresh orange from thailand"
        },
    ]
    return (
        <section className='body'>
            {
                fruits.map((fruit) => (
                    <Card key={fruit.id} fruit={fruit}/>
                ))
            }
        </section>
    );
};

export default Body;
