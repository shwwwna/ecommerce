import {
	Facebook,
	Instagram,
	MailOutlined,
	PhoneOutlined,
	Pinterest,
	RoomOutlined,
	Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1.3rem;
`;
const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>SHOPNA</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
					officia neque beatae vero! Dolore, dolores! Harum dolorum delectus
					rerum! Possimus?
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>
						<Link to="/" className="link">
							Home
						</Link>
					</ListItem>

					<ListItem>
						<Link to="/cart" className="link">
							Cart
						</Link>
					</ListItem>

					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>About Us</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<RoomOutlined style={{ marginRight: "10px" }} />
					Malolos, Bulacan
				</ContactItem>
				<ContactItem>
					<PhoneOutlined style={{ marginRight: "10px" }} />
					+63 123 4567 890
				</ContactItem>
				<ContactItem>
					<MailOutlined style={{ marginRight: "10px" }} />
					shwwwna@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
			</Right>
		</Container>
	);
};

export default Footer;
