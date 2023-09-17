import { CardItem } from "components/CardItem/CardItem"
import { useEffect, useState } from "react"

import { allCars } from "service/contorler"

export const CarsList = () => {

    const [carData, setCarData] = useState([])

    

    useEffect(() => {

        dataCars()
        async function dataCars () {
            const data = await allCars()
            setCarData(data.slice(0, 2))
        }
    }, [])
    console.log(carData)

    return <>
        <ul>
            {carData.map(Car => {
                return <CardItem key={Car.id} id={Car.id} make={Car.make} model={Car.model} year={Car.year} img={Car.img} rentalPrice={Car.rentalPrice} favorite={Car.favorite} address={Car.address} rentalCompany={Car.rentalCompany} type={Car.type} accessories={Car.accessories}/>
            })}
            
        </ul>
    </>
}