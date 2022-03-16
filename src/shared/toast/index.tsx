import React from "react";
import { TextStyle, View, Text, StyleSheet } from "react-native";
import { deviceWidth, hp, wp } from '../responsive-dimension';

interface ToastProps {
  text: string | number | any;
  containerStyle?: TextStyle;
  textStyle?: TextStyle;
  bgColor?: any;
}

const Toast: React.FC<ToastProps> = ({ text, containerStyle, textStyle, bgColor }) => {
  const styles = StyleSheet.create({
    toastStyle: {
      backgroundColor: bgColor,
      paddingVertical: hp(16),
      paddingHorizontal: wp(24),
      borderRadius: hp(10),
      flexShrink: 1,
      marginBottom: 80,
      width: wp(330),
    },
    toastTextStyle: {
      color: '#fff',
      fontFamily: 'Recoleta-Regular',
      fontSize: 15,
      textAlign: 'center'
    }
  })

  return (
    <View style={[containerStyle, styles.toastStyle]}>
      <Text numberOfLines={2} style={[textStyle, styles.toastTextStyle]}>{text}</Text>
    </View>
  )
}

export default Toast

