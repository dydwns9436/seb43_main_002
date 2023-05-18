import styled from 'styled-components';

export const Title = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > div:first-child {
    width: 50px;
    height: 50px;
    background-image: url('/svg/main-logo.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  > div:nth-child(2) {
    margin-left: 10px;
    font-family: 'Fredoka One';
    font-size: 24pt;
    font-weight: 700;
    color: white;
  }

  > button {
    border: none;
    background-color: transparent;
    margin-left: auto;
    color: white;

    img {
      height: 25px;
    }
  }
`;

export const FooterWrap = styled.footer`
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  height: 7%;
  width: 100%;
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  justify-content: space-between;
`;

export const FooterIcon = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  width: 40%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 3;
  cursor: pointer;
`;

export const FooterCicleWrap = styled.div`
  width: 50px;
  height: 50px;
  /* border: 1px solid black; */
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -30%;
  left: 45%;
  transform: ${({ isHovered }) => (isHovered ? 'scale(1.2)' : 'scale(1)')};
  transition: transform 0.5s ease;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  > div {
    position: relative;
    background-image: linear-gradient(135deg, #ffd571, #ffac36);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: 12.5px;
    left: 12.5px;

    ::before {
      content: '+';
      position: absolute;
      font-size: 18px;
      font-weight: bold;
      color: white;
      left: 6.5px;
    }
  }
`;

export const MainIcon = styled.div`
  width: 22px;
  height: 22px;
  transition: background-image 0.3s ease;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
`;

export const LodingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > img {
    width: 50px;
    height: 50px;
  }
`;