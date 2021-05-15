import React, { useState, useEffect } from 'react'
import Header from './Header'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'

const Home = (props) => {

    const [data,setData] = useState(props.data);
    const [filter, setFilter] = useState({});

    const handleSearch = (filter) => {
        setFilter(filter);        
      }

    const filterData = () => {
        let auxData = props.data
        if (filter.place) {
          auxData = props.data.filter(place => place.city === filter.place)
        }
        if (filter.people && filter.people !== "Add people") {
          auxData = auxData.filter(place => place.maxGuests >= Number(filter.people))
        }
        setData(auxData);
        console.log(auxData)
    }  

    useEffect(() => {
        console.log('FILTER',filter)
        filterData();
    }, [filter])

    return (
        <div className="container-home">
            <Header search={handleSearch}></Header>
            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
            </div>
            
            <ListaPropiedades data={data}/>

        </div>
    )
}

export default Home
