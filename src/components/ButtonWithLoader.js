import React from 'react';
import Button from './Button';
import MDSpinner from 'react-md-spinner';

const ButtonWithLoader = ({
  showLoader,
  children,
  color = '#fff',
  ...rest
}) => {
  return (
    <Button {...rest}>
      {showLoader ? (
        <span>
          <MDSpinner className="spinner" size={18} singleColor={color} />
          {children}
        </span>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonWithLoader;
