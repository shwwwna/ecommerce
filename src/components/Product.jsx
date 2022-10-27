import {
	FavoriteBorderTwoTone,
	SearchTwoTone,
	ShoppingCartTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: #47474739;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s ease;
	cursor: pointer;
`;
const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f6f5fd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.1s ease;

	&:hover {
		background-color: #ffdfdf;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Link to="/product">
			<Container>
				<Circle />
				<Image src={item.img} />
				<Info>
					<Icon>
						<Link to="/cart" className="link">
							<ShoppingCartTwoTone />
						</Link>
					</Icon>
					<Icon>
						<Link to="/productlist" className="link">
							<SearchTwoTone />
						</Link>
					</Icon>
					<Icon>
						<FavoriteBorderTwoTone />
					</Icon>
				</Info>
			</Container>
		</Link>
	);
};

export default Product;
