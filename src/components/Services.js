import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
import { icons } from 'react-icons/lib/cjs'

export default class Services extends Component {
    state={
        services: [ 
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quod?',
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quod?',
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quod?',
            },            
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quod?',
            },        
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}s</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
