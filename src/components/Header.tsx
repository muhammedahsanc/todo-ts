import styled from "styled-components";

function Header({count}:{count:number}) {
  return (
<HeaderWrapper>
      <InnerDiv>
        <br />
        <Heading>Hey...Today you have  {count} activities  🌝😜</Heading>
      </InnerDiv>
    </HeaderWrapper>
  );
}
const HeaderWrapper = styled.div`
  width:fixed;
  padding: 20px;
  // background-color: #f0f0f0;
`;

const InnerDiv = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 24px;
  color: #333;
`;

export default Header;