import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: inherit;

}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }

}
body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    font-size: 1.6rem;
    background: #FAFAF8;
    color: #333;
}
`;

export default GlobalStyles;

export const Logo = styled.h1`
  position: static;
  width: 92px;
  height: 16px;
  left: 40px;
  top: 36px;
  cursor: pointer;

  font-family: Inter;
  font-style: italic;
  font-weight: 900;
  font-size: 22px;
  line-height: 16px;
  color: #fc462d;
`;

export const Bannercito = styled.div`
  position: absolute;
  width: 1286px;
  height: 250px;
  left: 40px;
  top: 140px;

  background: linear-gradient(
      0deg,
      rgba(252, 70, 45, 0.24),
      rgba(252, 70, 45, 0.24)
    ),
    url("https://i.ibb.co/3m7sHzT/banner-1.png"), #c4c4c4;
  border-radius: 16px;
`;

export const BannerText = styled.h3`
  position: absolute;
  width: 796px;
  height: 42px;
  left: 285px;
  top: 104px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;

  color: #fefefe;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;

  position: static;
  width: 1286px;
  height: 560px;
  margin-left: 40px;
  margin-top: 350px;
  margin-bottom: 50px;

  /* White */

  background: #fefefe;
  /* Shadows-2 */

  box-shadow: 0px 11px 29px rgba(0, 0, 0, 0.2);
  border-radius: 16px;

  &.products {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 1162px;
    height: 418px;
    left: 40px;
    margin-top: 10px;
    overflow-x: scroll;
    overflow-y: hidden;

    box-shadow: none;
    border-radius: none;
  }

  &.items {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 922px;
    height: 422px;
    margin-left: 40px;
    margin-top: 40px;
    box-shadow: none;
    border-radius: 16px;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(7, 7, 117, 0.266);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-corner {
    background-color: black;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export const Button = styled.button`
  /* Auto Layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  position: static;
  width: ${({ big, small }) => (big ? "623px" : small ? "89px" : "194px")};
  height: 40px;
  left: 0px;
  top: 378px;

  /* Malachite */

  background-color: #0ac763;
  border-radius: 8px;
  color: #fefefe;

  padding: ${({ big, small }) =>
    big ? "12px 77px" : small ? "12px 11px" : "12px 24px"};
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;

  &:hover {
    background-color: #07773b;
    transform: translateY(-0.2rem) scale(1.02);
    color: #e4e4e4;
  }
  &:active {
    transform: translateY(0.2rem);
  }
`;
