import { LogoIcon, BoxLogo } from './Logo.styled';
import logo from 'images/logo.png';

export const Logo = () => {
  return (
    <BoxLogo>
      <LogoIcon src={logo} alt="logo" width="76" height="22"></LogoIcon>
    </BoxLogo>
  );
};