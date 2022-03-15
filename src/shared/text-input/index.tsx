import React, { forwardRef } from "react";
import {
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import colors from '../../styles/color';
import { hp, wp } from '../responsive-dimension'


interface FormTextInputProps extends RNTextInputProps {
  label?: string;
  value?: string;
  onFocus?: () => void;
  containerStyle?: ViewStyle;
  isLocked?: boolean;
  isPassword?: boolean;
  show?: boolean;
  amount?: boolean;
  showPassword?: () => void;
  calender?: boolean;
  showCalendar?: () => void;
}

const FormTextInput = forwardRef<RNTextInput, FormTextInputProps>(({
  label,
  value,
  onFocus,
  containerStyle,
  isLocked,
  isPassword,
  show,
  calender,
  amount,
  showCalendar,
  showPassword,
  ...props },
  ref) => {
  return (
    <View>
      <RNTextInput
        style={[styles.textInput, containerStyle]}
        placeholder={label}
        focusable={true}
        value={value}
        onFocus={onFocus}
        secureTextEntry={show}
        placeholderTextColor={colors.lightGrey}
        {...{ ref }}
        {...props}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  textInput: {
    height: hp(60),
    width: wp(323),
    borderWidth: 2,
    borderRadius: hp(5),
    borderColor: colors.primary,
    paddingLeft: hp(18),
    fontFamily: 'Recoleta-Regular',
    color: colors.dark,
    fontSize: hp(16),
    backgroundColor: '#E6F5F6',
    marginBottom: hp(20),
  },

  lock: {
    position: 'absolute',
    right: hp(30),
    top: hp(20),
    height: hp(20),
    width: hp(20)
  },
})

export default FormTextInput;