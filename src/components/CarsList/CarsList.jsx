import { CardItem } from "components/CardItem/CardItem"
import { useEffect, useState } from "react"

import { allCars } from "service/contorler"
import css from './CarsList.module.scss'

export const CarsList = () => {

    const [carData, setCarData] = useState([])

    

    useEffect(() => {

        dataCars()
        async function dataCars () {
            const data = await allCars()
            setCarData(data.slice(0, 5))
        }
    }, [])

    return <>
        <ul className={css.list}>
            {carData.map(Car => {
                return <CardItem key={Car.id} id={Car.id} make={Car.make} model={Car.model} year={Car.year} img={Car.img} rentalPrice={Car.rentalPrice} favorite={Car.favorite} address={Car.address} rentalCompany={Car.rentalCompany} type={Car.type} accessories={Car.accessories}/>
            })}
            
        </ul>
    </>
}