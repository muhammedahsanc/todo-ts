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
    <InputBox
      type="text"
      value={formData}
      onChange={(e) => setFormData(e.target.value)}
    />
  );
}

const InputBox = styled.input`
  padding: 9px 20px;
  margin-top: 10rem;
  border: 2px black solid;
  border-radius: 7px;
`;

export default Input;
