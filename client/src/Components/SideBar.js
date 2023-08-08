import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faBell,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

import {COLORS} from "../constant"

const SideBar = () => {
  return (
    <Container>
      <Logo>
        <svg
          height="90"
          width="90"
          fill="hsl(258deg, 100%, 50%)"
          viewBox="0 0 90 90"
        >
          <path d="M67.431,24.417c0.473-0.017,0.936,0.006,1.386,0.034c0.452,0.012,0.884,0.065,1.295,0.121    c0.413,0.044,0.802,0.1,1.155,0.183c0.355,0.074,0.682,0.142,0.971,0.202c0.284,0.083,0.532,0.155,0.736,0.214    c0.41,0.12,0.644,0.188,0.644,0.188s-0.224-0.096-0.617-0.263c-0.197-0.084-0.436-0.187-0.711-0.304    c-0.283-0.096-0.603-0.204-0.951-0.322c-0.348-0.126-0.733-0.23-1.146-0.326c-0.411-0.106-0.846-0.214-1.304-0.283    c-0.457-0.084-0.931-0.165-1.417-0.207c-0.485-0.063-0.981-0.1-1.479-0.116c-0.331-0.019-0.66-0.015-0.989-0.015    c-0.266-2.276-1.078-4.374-2.304-6.148c0,0,1.074-7.245-1.431-14.224c-0.376-1.047-6.477,8.908-6.477,8.908    c-0.807-0.165-1.642-0.256-2.495-0.256c-1.521,0-2.975,0.29-4.328,0.797c0,0-4.843-8.786-5.781-6.54    c-2.844,6.812-2.138,15.155-2.138,15.155c-0.364,1.237-0.563,2.552-0.563,3.913c0,0.027,0.004,0.053,0.004,0.079    c-0.461,0.017-0.922,0.053-1.373,0.115c-0.457,0.042-0.902,0.124-1.33,0.208c-0.431,0.068-0.837,0.178-1.222,0.284    c-0.386,0.096-0.746,0.201-1.07,0.327c-0.659,0.214-1.184,0.446-1.545,0.624c-0.364,0.167-0.571,0.262-0.571,0.262    s0.218-0.067,0.6-0.187c0.378-0.128,0.924-0.29,1.594-0.416c0.33-0.083,0.692-0.14,1.079-0.184    c0.384-0.054,0.788-0.109,1.211-0.121c0.42-0.028,0.854-0.052,1.296-0.035c0.44-0.004,0.887,0.018,1.333,0.06    c0.016,0.001,0.031,0.004,0.047,0.006c0.025,0.337,0.064,0.668,0.113,0.998c-0.03,0.009-0.06,0.015-0.09,0.024    c-0.904,0.262-1.783,0.607-2.577,0.978c-0.404,0.169-0.773,0.38-1.125,0.571c-0.356,0.184-0.681,0.376-0.968,0.575    c-0.594,0.365-1.053,0.717-1.366,0.973c-0.317,0.248-0.499,0.39-0.499,0.39s0.198-0.117,0.545-0.323    c0.341-0.213,0.836-0.501,1.462-0.783c0.303-0.158,0.643-0.305,1.012-0.438c0.364-0.143,0.743-0.299,1.155-0.412    c0.809-0.258,1.686-0.479,2.576-0.618c0.012-0.002,0.022-0.003,0.034-0.004c0.198,0.896,0.479,1.758,0.84,2.577    c-8.666,2.314-15.3,10.89-16.236,21.469c-4.863,2.672-9.69,7.991-7.482,18.488c1.472,6.992,15.749,16.109,22.629,16.306    c2.173,0.062,2.558-2.099,2.289-3.018c-1.806-6.171-14.185-4.764-19.696-15.691c-1.825-3.618-0.198-7.546,2.267-10.866    c1.085,11.989,9.484,21.383,19.858,21.987c1.287,1.342,3.125,2.2,5.187,2.2c2.771,0,5.148-1.535,6.293-3.749    c1.05,0.592,2.261,0.955,3.57,0.955c3.886,0,7.036-2.99,7.036-6.68c0-1.779-0.745-3.386-1.939-4.583    c0.12-0.997,0.211-2.04,0.272-3.121c1.073-2.963,1.667-6.224,1.667-9.647c0-7.336-2.742-13.906-7.073-18.428    c3.21-2.184,5.418-5.819,5.762-10.012c0.237,0.054,0.475,0.098,0.711,0.163c0.464,0.115,0.923,0.249,1.368,0.406    c0.453,0.137,0.884,0.309,1.3,0.482c0.424,0.158,0.815,0.349,1.186,0.534c0.376,0.176,0.726,0.355,1.033,0.547    c0.312,0.186,0.599,0.356,0.853,0.507c0.242,0.17,0.453,0.319,0.626,0.441c0.349,0.246,0.548,0.387,0.548,0.387    s-0.181-0.164-0.497-0.449c-0.159-0.144-0.353-0.318-0.575-0.518c-0.236-0.183-0.503-0.388-0.795-0.613    c-0.288-0.233-0.619-0.456-0.979-0.681c-0.354-0.234-0.73-0.478-1.142-0.69c-0.405-0.229-0.827-0.459-1.273-0.656    c-0.439-0.217-0.896-0.413-1.361-0.59c-0.314-0.128-0.634-0.234-0.953-0.343c0-0.023,0.002-0.046,0.002-0.069    c0-0.187-0.014-0.37-0.021-0.555c0.306-0.036,0.61-0.078,0.92-0.097C66.482,24.436,66.96,24.414,67.431,24.417z"></path>
        </svg>
      </Logo>
      <Links to="/">
        <FontAwesomeIcon icon={faHouse} style={{ width: "1.5rem" }} />
        <Title>Home</Title>
      </Links>
      <Links to="/treasurymog">
        <FontAwesomeIcon icon={faUser} style={{ width: "1.5rem" }} />
        <Title>Profile</Title>
      </Links>
      <Links to="/notifications">
        <FontAwesomeIcon icon={faBell} style={{ width: "1.5rem" }} />
        <Title>Notifications</Title>
      </Links>
      <Links to="/bookmarks">
        <FontAwesomeIcon icon={faBookmark} style={{ width: "1.5rem" }} />
        <Title>Bookmarks</Title>
      </Links>

      <Button>Meow</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
  margin-top: 1rem;
  margin-right: 1rem;
  
  max-width: 13rem;
  height: 100vh;

  @media screen and (max-width: 850px){
    
    margin-left: 1rem;
}

@media screen and (max-width: 35.5rem) {
    display: flex;
    flex-direction: row;
    height: 100px;
    margin: 0;
    margin-left: -1.2rem;
    
    svg{
      /* display: none; */
    }
  }
`;

const Logo = styled.div`
@media screen and (max-width: 35.5rem) {
    scale: 0.5;
    margin-right: 1rem;
  }

`;

const Title = styled.p`
  display: inline-flex;
  align-items: center;
  margin-left: 1.5rem;
  vertical-align: middle;
  @media screen and (max-width: 35.5rem) {
    display: none;
  }
`;

const Links = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.3em;
  font-weight: 500;
  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 2rem;
  transition: 200ms;

  &:hover {
    background-color: #d6b7ff;
    color: ${COLORS.primary};
  }

  &.active{
    color:${COLORS.primary};
  }

  @media screen and (max-width: 35.5rem) {
    font-size: 1.1rem;
    margin-right: 2rem;

    &:hover{
      background-color: white;
      scale: 1.1;
    }

    &.active{
      background-color: white;
    scale:1;
    
  }
    
    
  }
`;

const Button = styled.button`
  margin-top: 0.75rem;
  padding: 1rem;
  border-radius: 2rem;
  border: none;
  border: 1px solid ${COLORS.primary};
  background-color: ${COLORS.primary};
  color: white;
  font-weight: bold;
  font-size: 1.1em;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: hsl(258deg, 100%, 50%);
  }

  &:active {
    color: white;
    background-color: ${COLORS.primary};
  }

  @media screen and (max-width: 35.5rem) {
    
    display: none;
  }
`;

export default SideBar;
