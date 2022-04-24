import React from 'react';
import { Input, FormFeedback } from 'reactstrap';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  customError: PropTypes.string,
  onFocus: PropTypes.func,
  mapper: PropTypes.func,
  showErrorLabel: PropTypes.bool,
};

const defaultProps = {
  customError: '',
  value: '',
  type: 'text',
  mapper: (value) => value,
  onFocus: () => {},
  showErrorLabel: true,
};

const CustomInput = ({
  name,
  type,
  customError,
  onFocus,
  mapper,
  height,
  showErrorLabel,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <>
      <Input
        {...props}
        type={type}
        {...field}
        value={mapper(field.value)}
        onFocus={onFocus}
        invalid={
          (meta.touched && meta.error) || customError ? true : false
        }
        checked={type === 'checkbox' ? field.value : null}
      />
      {showErrorLabel && (
        <FormFeedback>{meta.error || customError}</FormFeedback>
      )}
    </>
  );
};

export default CustomInput;

CustomInput.propTypes = propTypes;
CustomInput.defaultProps = defaultProps;
