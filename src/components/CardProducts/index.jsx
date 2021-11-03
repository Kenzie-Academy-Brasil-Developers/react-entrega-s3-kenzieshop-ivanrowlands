import { addCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import "./style.css"

const CardProducts = ({ product, remove = false }) => {

	const dispatch = useDispatch()

	const { id, name, image, price} = product


	return (
		<li
			className="product_list">

			<img
				className="product_image"
				src={image}
				alt={name}
			/>

			<h3
				className="product_name">
				{name}
			</h3>
			
			<p
				className="product_price">
				{`R$ ${price.toString().replace(".", ",")}`}
			</p>

			<div className="button_size">
				{
					remove ? (
						<Button
							variant="outlined"
							color="inherit"
							onClick={() => dispatch(removeFromCartThunk(id))} >
							Remover
						</Button>
					) : (
						<Button
							color="inherit"
							variant="outlined"
							onClick={() => dispatch(addCartThunk(product))}>
							Comprar
						</Button>
					)
				}
			</div>

		</li>
	)
}

export default CardProducts