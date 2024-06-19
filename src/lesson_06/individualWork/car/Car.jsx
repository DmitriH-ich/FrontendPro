import React, { useState } from "react";
import "./car.css";
import { dataCar } from "../dataCar"
import CarItem from "../carItem/CarItems"

export default function Car() {
    const[cars, setCars] = useState(dataCar);

    const löschFunktion =(id) => {
        setCars(cars.filter(carModi => carModi.id !==id));
    }

    return (
        <div className="carList">
            <h1>Car's List</h1>
            {cars.map((restDataCar) => (
                <CarItem key = {restDataCar.id} carModi={restDataCar} onDelete = {löschFunktion}/>
            ))}
        </div>
    )
}