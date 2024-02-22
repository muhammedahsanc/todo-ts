import styled from "styled-components";
function Button({ submit, EditId }: { submit: () => void; EditId: string }) {
  return (
<div>
<CenteredContainer>
      {EditId !== "" ? (
        <StyledButton onClick={() => submit()}>Update Task</StyledButton>
      ) : (
        <StyledButton onClick={() => submit()}>Add Task</StyledButton>
      )}
          </CenteredContainer>
    </div>

  );
}
const StyledButton = styled.button`
margin-right:135px;
  padding: 10px 118px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
const CenteredContainer = styled.div`
// padding-right:9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:2rem;
`;

export default Button;
