import React from 'react';
import { bool, func, oneOf, string } from 'prop-types';
import { Modal, TouchableOpacity } from 'react-native';
import { Button, Column, Row, Typography } from '..';
import Icon from '../../assets/icons';

const Alert = ({
  cancel,
  confirm,
  description,
  isLoading,
  isOpen,
  onCancel,
  onConfirm,
  title,
  type,
}) => (
  <Modal visible={isOpen} transparent>
    <Column bg="rgba(0, 0, 0, 0.4)" flex={1} justifyContent="center" alignItems="center" px="16px">
      <Column bg="white" p="24px" width={1}>
        <Row justifyContent="space-between" alignItems="center" mb="16px">
          <Typography fontSize="22px" fontWeight="bold">
            {title}
          </Typography>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={type === 'info' ? onConfirm : onCancel}
            disabled={isLoading}
          >
            <Icon name="close" />
          </TouchableOpacity>
        </Row>
        <Typography fontSize="16px">{description}</Typography>
        {type === 'confirm' && (
          <Row mt="32px">
            <Button variant="outlined" flex={1} mr="8px" onPress={onCancel} disabled={isLoading}>
              {cancel}
            </Button>
            <Button flex={1} ml="8px" onPress={onConfirm} isLoading={isLoading}>
              {confirm}
            </Button>
          </Row>
        )}
      </Column>
    </Column>
  </Modal>
);

Alert.propTypes = {
  cancel: string,
  confirm: string,
  description: string,
  isLoading: bool,
  isOpen: bool,
  onCancel: func,
  onConfirm: func,
  title: string,
  type: oneOf(['confirm', 'info']),
};

export default Alert;
