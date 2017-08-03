import React from 'react';
import { shape, arrayOf, string, number } from 'prop-types';
import styled from 'styled-components';
import Label from './Label';

const Wrapper = styled.div`margin: 10px 0;`;

const Select = styled.select`
  padding: 8px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 2px;
`;

const Option = styled.option`
  font-weight: bold;
  padding: 8px;
`;

const InputGroup = ({ name, label, options }) => {
  console.log(options);

  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
      </Label>
      <Select name={name} id={name}>
        {options.map(option =>
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        )}
      </Select>
    </Wrapper>
  );
};

InputGroup.propTypes = {
  name: string.isRequired,
  label: string,
  options: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default InputGroup;
