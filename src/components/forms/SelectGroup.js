import React from 'react';
import { shape, arrayOf, string, number, func, oneOfType } from 'prop-types';
import styled from 'styled-components';
import Label from './Label';

const Wrapper = styled.div`margin: 10px 0;`;

const Select = styled.select`
  padding: 8px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 2px;
  background: white;
`;

const Option = styled.option`
  font-weight: bold;
  padding: 8px;
`;

const SelectGroup = ({
  name,
  label,
  options,
  value,
  defaultName,
  onChange,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name} id={name} value={value} onChange={onChange}>
        {defaultName && (
          <option value="0" disabled>
            {defaultName}
          </option>
        )}
        {options.map(option => (
          <Option key={option.id} value={option.id}>
            {option.name}
          </Option>
        ))}
      </Select>
    </Wrapper>
  );
};

SelectGroup.propTypes = {
  name: string.isRequired,
  label: string,
  value: oneOfType([string, number]).isRequired,
  onChange: func.isRequired,
  defaultName: string,
  options: arrayOf(
    shape({
      id: oneOfType([string, number]).isRequired,
      name: string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SelectGroup;
