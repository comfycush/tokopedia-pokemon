import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Button, FormGroup } from 'reactstrap';
import CustomInput from './controls/CustomInput';

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required('Nickname is required'),
});

const propTypes = {
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  errors: PropTypes.string,
};

const defaultProps = {
  initialValues: {
    name: '',
  },
  errors: '',
  onSubmit: () => {},
};

const PokeNicknameForm = ({ initialValues, errors, onSubmit }) => {
  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
      initialValues={initialValues}
    >
      {() => {
        return (
          <Form>
            <FormGroup>
              <CustomInput name="nickname" customError={errors} />
            </FormGroup>

            <FormGroup>
              <Button type="submit" color="primary">
                Save
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PokeNicknameForm;

PokeNicknameForm.propTypes = propTypes;
PokeNicknameForm.defaultProps = defaultProps;
