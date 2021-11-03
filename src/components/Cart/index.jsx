import CardProducts from "../CardProducts"
import { useSelector } from "react-redux"
import "./style.css"

const Cart = ({ showCart }) => {

	const cart = useSelector(store => store.cart)
	const cartTotal = cart.reduce((acc, item) => {
		return (acc + item.price)
	}, 0)


	return (
		<>
			{cart.length > 0 && (
				<p className="cart_quantity">{cart.length}</p>
			)}
			{showCart && (
				<section className="cart_products">
					<h3>Carrinho</h3>
					<p>
						{`R$ ${cartTotal.toFixed(2).toString().replace(".", ",")}`}
					</p>
					<ul className="cart_list">

						{cart.map((itemMap, index) =>
							< CardProducts
								key={index}
								idCart={index}
								product={itemMap}
								cartTotal={cartTotal}
								remove
							/>
						)}
					</ul>
				</section>
			)}
		</>
	)
}

export default Cart