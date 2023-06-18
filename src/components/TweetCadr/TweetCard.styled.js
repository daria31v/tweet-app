import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Box = styled.div`
  display: block;
  width: 380px;
  height: 460px;
  color: #ebd8ff;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  :hover {
    box-shadow: 5px 0 2px #5cd3a8;
  }
`;

export const BoxLogo = styled.div`
  position: absolute;
  display: flex;
  justify-content: left;
  padding-top: 20px;
  padding-left: 20px;
  margin-bottom: auto;
`;

export const ImageWraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
`;

export const BoxAvatar = styled.div`
  position: relative;
  left: 0;
  top: -25px;
  z-index: 100;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  display: block;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 80px;
`;
export const BoxUser = styled.div`
  margin: 0;
`;
export const BoxName = styled.div`
  position: relative;
  left: 0;
  top: -40px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
  font-style: italic;

`;
export const BoxCard = styled.div`
  margin-bottom: 20px;
`;
export const BoxBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const CardWrapper = styled.div`
  display: block;
  text-align: center;
`;

export const Card = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  :not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Button = styled.input`
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
  :active {
    background-color: #5cd3a8;
  }
  :disabled{
    background-color: #ebd8ff;
  }
`;
export const Label = styled.label`
  user-select: none;
  display: inline-block;
  margin: 0 5px 0 0;
  /* position: relative; */
`;
export const NameBtn = styled.span`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  border-radius: 10px;
  text-shadow: none;
  color: #373737;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #5cd3a8;
  }
  background-color: ${props => props.isActive ? '#5cd3a8':'#ebd8ff'    };
  `;


export const Decor = styled.img`
  position: relative;
  top: -80px;
  left: 0;
`;
