import React from "react";
import { TouchableOpacity, View, ViewStyle, Text, TextStyle, Image, ImageProps } from 'react-native';
import { Back } from '../../assets/svgs';
import colors from '../../styles/color';
import { deviceWidth, hp, wp } from '../responsive-dimension';
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
  rightStep?: boolean;
  count?: number;
  hasFilter?: boolean;
  rightIcon?: boolean;
  headerAddCard?: boolean;
  hasBenefits?: boolean;
  headerTitle?: string;
  hasRightIcon?: ImageProps;
  filterState?: boolean;
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
  hasRightIcon
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
          onPress={onPressLeftIcon}>
          <Back width={(40)} height={(40)} color={tintColor} />
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
          <Image
            source={hasRightIcon}
            resizeMode="contain"
            style={styles.leftIcon}
          />
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
    <View style={[styles.headerContainer, { backgroundColor: backgroundColor || colors.white }]}>
      <View style={[styles.navBar, { backgroundColor: backgroundColor || colors.white }]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  )
}

export default HeaderBar;
