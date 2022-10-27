import { Badge } from "@material-ui/core";
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	height: 60px;
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Language = styled.span`
	font-size: 0.9rem;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;
const Input = styled.input`
	border: none;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;
const Center = styled.div`
	flex: 1;
	text-align: center;
`;
const Logo = styled.h1`
	font-weight: bold;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link to="/" className="link">
							SHOPNA
						</Link>
					</Logo>
				</Center>
				<Right>
					<MenuItem>
						<Link to="/register" className="link">
							REGISTER
						</Link>
					</MenuItem>
					<MenuItem>
						<Link to="/login" className="link">
							SIGN IN
						</Link>
					</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<Link to="/cart" className="link">
								<ShoppingBasketOutlined />
							</Link>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
