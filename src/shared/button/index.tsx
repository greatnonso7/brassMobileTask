import React from 'react';
import { TouchableOpacity, View, Text, TextStyle, StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import colors from '../../styles/color';
import { hp, wp, getBottomSpace } from '../responsive-dimension';

interface LongButtonProps {
  loading?: boolean
  title?: string
  titleStyle?: TextStyle
  buttonStyle?: ViewStyle
  containerStyle?: ViewStyle
  onPress?: () => void;
  isNotBottom?: boolean;
  disabled?: boolean;
}

const LongButton = ({
  loading,
  title,
  titleStyle,
  buttonStyle,
  containerStyle,
  onPress,
  disabled,
  isNotBottom
}: LongButtonProps) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        style={[styles.buttonStyle, buttonStyle]}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        )
          : (
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.white,
    fontSize: hp(17),
    alignSelf: 'center',
    textAlign: 'center',
    padding: hp(16),
    fontFamily: 'Recoleta-SemiBold'
  },
  buttonStyle: {
    height: hp(55),
    width: wp(327),
    backgroundColor: colors.primary,
    borderRadius: hp(15),
    justifyContent: 'center',
    alignSelf: 'center',
  },
})

export default LongButton;