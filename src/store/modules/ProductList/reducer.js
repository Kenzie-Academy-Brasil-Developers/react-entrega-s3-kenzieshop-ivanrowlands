import UltraBall from '../../../assets/ultra-ball_pokemon_silo.png';
import KitPotion from '../../../assets/Potions.png';
import GreatBall from '../../../assets/great-ball_pokemon_silo.png';
import Revive from '../../../assets/200px-GO_Revive.png';
import MaxRevive from '../../../assets/Pokemon-Go-Revive.png';
import Pokeball from '../../../assets/19-199364_free-png-pokeball-png-images-transparent-pokemon-pokeball.png';

const initialState = [
    {id: 1, name: 'Pokeball', price: 300, image: Pokeball},
    {id: 2, name: 'Great ball', price: 450, image: GreatBall},
    {id: 3, name: 'Ultra ball', price: 600, image: UltraBall},
    {id: 4, name: 'Kit potions', price: 1350, image: KitPotion},
    {id: 5, name: 'Revive', price: 500, image: Revive},
    {id: 6, name: 'Max Revive', price: 700, image: MaxRevive}
]

export const productReducer = (state = initialState, action) => {
    return state;
}