import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/color';
import { hp, wp } from '../responsive-dimension';
import { Feather } from '@expo/vector-icons';

interface CustomPickerProps {
  value?: string | number | undefined;
  navigation?: any
}

const CustomPicker = ({ value, navigation }: CustomPickerProps) => {
  return (
    <View style={styles.customPickerContainer}>
      <Text style={[styles.itemValue, { color: value ? colors.dark : colors.lightGrey }]}>
        {value ? value : 'Select Destination Bank'}
      </Text>
      <TouchableOpacity onPress={navigation}>
        <Feather name="chevron-down" size={hp(30)} color={colors.primary} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemValue: {
    fontFamily: 'Recoleta-Regular',
    fontSize: hp(16),
  },
  customPickerContainer: {
    height: hp(60),
    width: wp(323),
    borderWidth: 2,
    borderRadius: hp(5),
    borderColor: colors.primary,
    paddingHorizontal: hp(18),
    fontFamily: 'Recoleta-Regular',
    color: colors.dark,
    fontSize: hp(16),
    backgroundColor: '#E6F5F6',
    marginBottom: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})

export default CustomPicker;