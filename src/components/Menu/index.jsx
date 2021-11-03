import { AppBar, Typography } from "@material-ui/core"
import { GiShoppingCart } from "react-icons/gi"
import "./style.css"

const Menu = ({ handleShowCart }) => {

	return (
		<header>
			<AppBar
				position="static"
				className="nav_bar"
				style={{ backgroundColor: "#000" }}>

				<Typography>
					<div className="name_box">
						<p className="name first_name">
							Trick
						</p>

						<p className="name second_name">
							or
						</p>

						<p className="name third_name">
							Trick
						</p>
					</div>
				</Typography>

				<button
					className="button_cart"
					onClick={handleShowCart}
				>
					<GiShoppingCart
						className="cart"
					/>
				</button>

			</AppBar>
		</header>
	)
}

export default Menu