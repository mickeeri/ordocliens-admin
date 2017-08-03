import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components';
import Label from './Label';

const Wrapper = styled.div`margin: 10px 0;`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 2px;
`;

const InputGroup = ({
  name,
  label,
  type = 'text',
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input
        onChange={onChange}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

InputGroup.propTypes = {
  name: string.isRequired,
  label: string,
  type: string,
  placeholder: string,
  onChange: func.isRequired,
  value: string.isRequired,
};

export default InputGroup;
