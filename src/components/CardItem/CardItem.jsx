
import Heart from '../../img/heart-sprite.svg'


export const CardItem = ({id, make, model, year, img, rentalPrice, favorite, address, rentalCompany, type, accessories}) => {
    
    return <>
        <li data-id={id}>
           <div>
                <img src={img} alt={make} />
                <span>
                    <svg>
                        {favorite ? <use href={Heart + "#icon-heart-active"}></use> : <use href={Heart + "#icon-heart-dactive"}></use>}
                    </svg>
                </span>
            </div> 

            <div>
                <p>{make} <span>{model}</span>, {year}</p> 
                <span>{rentalPrice}</span>
            </div>

            <div>
                <div>
                    <span>{address[2]} | {address[1]} | {rentalCompany} | </span>
                </div>

                <div>
                    <span>{type} | {model} | {id} | {accessories[2]}</span>
                </div>
            </div>

            <button data-id={id}>
                Learn more
            </button>
        </li>
    </>
}