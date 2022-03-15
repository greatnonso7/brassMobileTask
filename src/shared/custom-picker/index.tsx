import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../styles/color';
import { hp, wp } from '../responsive-dimension';
import { Feather } from '@expo/vector-icons';


interface CustomPickerProps {
  items?: [],
  onValueChange?: (selectedValue: string, selectedIndex: number) => void;
  value?: string | number | undefined;
  navigation?: any
}

const CustomPicker = ({ items, onValueChange, value, navigation }: CustomPickerProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  return (
    <>
      <View style={styles.customPickerContainer}>
        <Text>{value}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal')}
        // onPress={() => setShowPicker(!showPicker)}
        >
          <Feather name="chevron-down" size={hp(30)} color={colors.primary} />
        </TouchableOpacity>
      </View>
      {showPicker && <Text>Hello World</Text>}
      {/* {showPicker && renderiOSModal()} */}
    </>
  )
}

const styles = StyleSheet.create({
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