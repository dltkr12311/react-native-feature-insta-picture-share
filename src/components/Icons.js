import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles';

export const UploadIcon = ({ size = 32, color = styles.blackColor }) => (
  <Ionicons
    size={size}
    name={Platform.OS === 'ios' ? 'ios-cloud-upload' : 'md-cloud-upload'}
    color={color}
  />
);
