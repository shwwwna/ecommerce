import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.315),
			rgba(255, 255, 255, 0.107)
		),
		url(https://i.imgur.com/C3Zbnbo.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	padding: 20px;
	width: 40%;
	background-color: white;
`;
const Title = styled.h1`
	font-size: 1.5rem;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
`;
const Agreement = styled.span`
	font-size: 0.8rem;
	margin: 20px 0;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<title>Register | ShopNa</title>
			<Navbar />
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Form>
						<Input placeholder="name" />
						<Input placeholder="last name" />
						<Input placeholder="username" />
						<Input placeholder="email" />
						<Input placeholder="password" />
						<Input placeholder="confirm password" />
						<Agreement>
							By creating an account, I consent to the processing of my personal
							data in accordance with the <b>PRIVACY POLICY</b>.
						</Agreement>
						<Button>CREATE ACCOUNT</Button>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Register;
