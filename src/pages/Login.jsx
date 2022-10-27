import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.315),
			rgba(255, 255, 255, 0.107)
		),
		url(https://wallpaperaccess.com/full/1505207.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 25%;
	background-color: white;
`;
const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
`;
const Click = styled.a`
	margin: 5px 0;
	font-size: 0.8rem;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<title>Login | ShopNa</title>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>SIGN IN</Title>
					<Form>
						<Input placeholder="username" />

						<Input placeholder="password" />

						<Button>LOGIN</Button>
						<Click>FORGOT YOUR PASSWORD?</Click>
						<Click>
							<Link to="/register" className="link">
								CREATE A NEW ACCOUNT
							</Link>
						</Click>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
