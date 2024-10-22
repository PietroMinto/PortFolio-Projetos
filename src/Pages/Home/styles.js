import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  height: 100%;
  width: 100%;
  max-width: 50%;
  max-height: 90%;
  margin-left: 50px;

  span {
    color: #ffd700;
  }

  p {
    font-size: 20px;
    color: #fff;
  }

  &:hover a:hover img {
    transform: translateY(-10px);
    transition: ease-in-out 0.3s;
  }

  &:active a:active img {
    opacity: 0.8;
    transition: none;
  }
`;

export const RightContainer = styled.div`
  position: absolute;
  right: 200px;
  top: 150px;


  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 5px solid #f1c40f;
  padding: 5px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &:hover {
    scale: 1.1;
    transition: ease-in-out 0.5s;
  }
`;

export const Header = styled.div`
  position: absolute;
  background-color: #666;
  height: 10%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 20px;

  h1 {
    position: absolute;
    left: 15px;
    top: 20px;

    font-size: 40px;
    font-family: "Protest Strike", sans-serif;
    color: #dcdcdc;
  }

  span {
    color: #ffd700;
    font-family: "Protest Strike", sans-serif;
  }
`;

export const Links = styled.a`
  font-size: 24px;
  font-family: "Protest Strike", sans-serif;
  color: #dcdcdc;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ffd700;
    transition: ease-in-out 0.3s
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #dcdcdc;
`;

export const SocialProfile = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  margin-left: 20px;
  gap: 20px;
  margin-top: 20px;
  cursor: pointer;

  img {
    max-width: 80px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  height: 52px;
  width: 200px;
  margin: 20px;

  gap: 50px;
  border: 2px inset #ffd700;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    transition: ease-in-out 0.3s;
  }
`;