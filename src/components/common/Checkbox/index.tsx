import styled from 'styled-components';

type CheckboxProps = {
  isChecked: boolean;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({
  isChecked,
  label,
  onChange,
}: CheckboxProps): JSX.Element => (
  <CheckboxWrapper>
    <input type="checkbox" defaultChecked={isChecked} onChange={onChange} />
    <label>{label}</label>
  </CheckboxWrapper>
);

export default Checkbox;

const CheckboxWrapper = styled.div`
  font-size: 14px;
  margin-right: 15px;

  label {
    margin-left: 5px;
  }

  input {
    cursor: pointer;
  }
`;
