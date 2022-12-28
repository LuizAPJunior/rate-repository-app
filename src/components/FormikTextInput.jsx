import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';


const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginLeft: 16,
    color: '#d73a4a',
    
  },
  textInput: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  errorInput: {
    marginTop: 16,
    marginHorizontal: 16,
    paddingLeft: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#d73a4a",
    borderRadius: 5
  }

});

const FormikTextInput = ({ name,...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholderTextColor="#ccc"
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;