import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const DoneButton = ({
                             styles, onDoneBtnClick, onNextBtnClick,
                             rightTextColor, isDoneBtnShow,
                             doneBtnLabel, nextBtnLabel, customTextProps,
                           }) => {
  return (
    <View style={[styles.btnContainer, { height: 40, paddingBottom: 5}, isDoneBtnShow ? {backgroundColor: '#fff'} : {backgroundColor: 'transparent'}]}>
      <TouchableOpacity style={styles.full}
                        onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}
      >
        <Text style={[styles.nextButtonText, isDoneBtnShow ? {color: '#4467ff'} : { color: rightTextColor }]} {...customTextProps}>
          {isDoneBtnShow ? doneBtnLabel : nextBtnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DoneButton
