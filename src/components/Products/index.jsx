import { useSelector } from "react-redux"
import CardProducts from "../CardProducts"

const Products = ({ showCart }) => {

	const products = useSelector(store => store.products)

	return (
		<section>
			<ul className="all_products_list" >
				{
					!showCart && (
						products.map((item, index) => (
							<CardProducts key={index} product={item} />
						))
					)
				}
			</ul>
		</section>
	)
}

export default Products