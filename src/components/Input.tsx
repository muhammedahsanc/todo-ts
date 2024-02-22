import styled from "styled-components";
import { setStateType } from "../interfaces";
function Input({
  formData,
  setFormData,
}: {
  formData: string;
  setFormData: setStateType<string>;
}) {
  return (
    <CenteredInputContainer>
      <InputBox
        type="text"
        value={formData}
        onChange={(e) => setFormData(e.target.value)}
      />
    </CenteredInputContainer>
  );
}

const CenteredInputContainer = styled.div`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  height: 10vh; 
`;

const InputBox = styled.input`
  padding: 10px 53px;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 16px;
  width: fixed;
  box-sizing: border-box;
`;

export default Input;
