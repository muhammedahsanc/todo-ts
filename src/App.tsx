import styled from "styled-components";
import { Page } from "./pages";
function App() {
  return (
    <Wrapper>
      <Page />
      </Wrapper>
  );
}
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  align-item:center;
`;
export default App;
