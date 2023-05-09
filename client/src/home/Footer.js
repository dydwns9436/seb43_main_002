import { FooterWrap, FooterIcon, FooterCicleWrap } from './HomeStyle';
import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineFastfood } from 'react-icons/md';
import { BsBookmark, BsPlusCircleFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterIcon>
          <NavLink to="/boards">
            <GrHomeRounded />
          </NavLink>
          <NavLink to="/map">
            <MdOutlineFastfood />
          </NavLink>
        </FooterIcon>
        <FooterCicleWrap>
          <BsPlusCircleFill></BsPlusCircleFill>
        </FooterCicleWrap>
        <FooterIcon>
          <NavLink to="/state">
            <BsBookmark></BsBookmark>
          </NavLink>
          <NavLink to="/mypage">
            <FaRegUserCircle></FaRegUserCircle>
          </NavLink>
        </FooterIcon>
      </FooterWrap>
    </>
  );
};

export default Footer;