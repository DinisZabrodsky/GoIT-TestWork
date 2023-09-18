
import Heart from '../../img/heart-sprite.svg'
import css from "./CardItem.module.scss"


export const CardItem = ({id, make, model, year, img, rentalPrice, favorite, address, rentalCompany, type, accessories}) => {
    
    const hendeleFavorite = (e) => {
        console.log(e)
    }

    return <>
        <li data-id={id} className={css.card}>
           <div className={css.cardImg}>
                <img src={img} alt={make} />
                <span onClick={hendeleFavorite}>
                    <svg>
                        {favorite ? <use href={Heart + "#icon-heart-active"}></use> : <use href={Heart + "#icon-heart-dactive"}></use>}
                    </svg>
                </span>
            </div> 

            <div className={css.carTitel}>
                <p>{make} <span>{model}</span>, {year}</p> 
                <span className='titel'>{rentalPrice}</span>
            </div>

            <div className={css.carTag}>
                <div>
                    <span>{address[2]} | {address[1]} | {rentalCompany} | </span>
                </div>

                <div>
                    <span>{type} | {model} | {id} | {accessories[2]}</span>
                </div>
            </div>

            <button data-id={id} className={css.carButton}>
                Learn more
            </button>
        </li>
    </>
}