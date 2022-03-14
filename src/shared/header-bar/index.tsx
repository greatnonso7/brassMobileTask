import React from "react";
import { TouchableOpacity, View, ViewStyle, Text, TextStyle, Image, ImageProps } from 'react-native';
import { Back } from 'assets/svgs';
import colors from 'styles/color';
import { deviceWidth, hp, wp } from '../responsive-dimension';

import { styles } from './style';
import { sharedImages } from "images";

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
  rightIcon,
  leftIconStyle,
  onPressLeftIcon,
  onPressRightIcon,
  backgroundColor,
  headerRight,
  tintColor,
  rightStep,
  count,
  hasFilter,
  hasBenefits,
  headerAddCard,
  headerTitle,
  leftIcon,
  filterState,
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
          style={[styles.headerLeftIconContainer, leftIconStyle, { borderColor: tintColor }]}
          onPress={onPressLeftIcon}>
          <Back width={(40)} height={(40)} color={tintColor} />
        </TouchableOpacity>
      )
    }
  }

  const renderHeaderRight = () => {
    if (rightStep) {
      return (
        <View style={styles.rightStepContainer}>
          <Text style={styles.rightStepText}>
            Step {count} of 4
          </Text>
        </View>
      );
    }

    if (hasFilter) {
      return (
        <TouchableOpacity
          onPress={onPressRightIcon}
          activeOpacity={0.5}
          style={styles.filterIconContainer}>
          <Image
            source={filterState ? sharedImages['active-filter'] : sharedImages.filter}
            resizeMode="contain"
            style={[styles.filterIcon, filterState && { width: wp(25), height: hp(25) }]}
          />
        </TouchableOpacity>
      )
    }

    if (headerAddCard) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPressRightIcon}
          style={styles.addCardContainer}>
          <Image
            source={sharedImages.scan}
            resizeMode="contain"
            style={styles.scanIcon}
          />
        </TouchableOpacity>
      )
    }

    if (hasBenefits) {
      return (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.hasBenefitsContainer}>
          <Text style={styles.hasBenefitsText}>Benefits 😎</Text>
        </TouchableOpacity>
      )
    }


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
        <View style={{
          // borderWidth: 1,
          position: 'absolute',
          left: deviceWidth * 0.35,
          borderColor: colors.white,
          alignSelf: 'center'
        }}>
          <Text style={[styles.headerTitle, { color: tintColor }]}>
            {headerTitle}
          </Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.headerContainer, { backgroundColor: backgroundColor || colors.appBlack }]}>
      <View style={[styles.navBar, { backgroundColor: backgroundColor || colors.appBlack }]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  )
}

export default HeaderBar;
