import React from "react";
import { TouchableOpacity, View, ViewStyle, Text, TextStyle, Image, ImageProps } from 'react-native';
import { Back, Close } from '../../assets/svgs';
import colors from '../../styles/color';
import { deviceWidth, hp, paddingTopiOS, wp } from '../responsive-dimension';
import { styles } from './style';

interface HeaderBarProps {
  hasBackButton?: boolean;
  leftIcon?: ImageProps;
  leftIconStyle?: ViewStyle;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  backgroundColor?: string;
  headerRight?: string;
  tintColor?: string;
  headerAddCard?: boolean;
  hasBenefits?: boolean;
  headerTitle?: string;
  hasRightIcon?: boolean;
  isModal?: boolean;
}

const HeaderBar = ({
  hasBackButton,
  leftIconStyle,
  onPressLeftIcon,
  onPressRightIcon,
  backgroundColor,
  headerRight,
  tintColor,
  headerTitle,
  leftIcon,
  hasRightIcon,
  isModal,
}: HeaderBarProps) => {

  const renderHeaderLeft = () => {
    if (leftIcon) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.leftIconContainer,
            leftIconStyle,
            { borderColor: tintColor },
          ]}
          onPress={onPressLeftIcon}>
          <Image
            source={leftIcon}
            resizeMode="contain"
            style={styles.leftIcon}
          />
        </TouchableOpacity>
      );
    }
    if (hasBackButton) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.leftIconContainer}
          onPress={onPressLeftIcon}>
          <Back />
        </TouchableOpacity>
      )
    }
  }

  const renderHeaderRight = () => {
    if (hasRightIcon) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.rightIconContainer,
            { borderColor: tintColor },
          ]}
          onPress={onPressRightIcon}>
          <Close />
        </TouchableOpacity>
      )
    }

    if (headerRight) {
      return (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.headerRightContainer}>
          <Text style={styles.rightStepText}>{headerRight}</Text>
        </TouchableOpacity>
      )
    }
  }

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Text style={[styles.headerTitle, { color: tintColor }]}>
          {headerTitle}
        </Text>
      );
    }
  };

  return (
    <View style={[styles.headerContainer, {
      backgroundColor: backgroundColor || colors.white,
      paddingTop: hp(0)
    }]}>
      <View style={[styles.navBar, { backgroundColor: backgroundColor || colors.white }]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  )
}

export default HeaderBar;
