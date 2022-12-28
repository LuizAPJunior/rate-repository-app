import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
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
    borderColor: "#d73a4a",
  }
 });

const TextInput = ({ style, error,...props }) => {
   
  const textInputStyle = [styles.textInput, error && styles.errorInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;