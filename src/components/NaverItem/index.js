import React from 'react';
import { number, string } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { Column, Image, Row, Typography } from '..';

const NaverItem = ({ id, job_role, name, padding, url }) => {
  const navigation = useNavigation();

  return (
    <Column flex={0.5} mb="16px" {...{ [padding]: '8px' }}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('NaverDetails', { id })}
      >
        <Image source={{ uri: url }} resizeMode="cover" aspectRatio={1} width={1} mb="8px" />
        <Typography fontWeight="bold">{name}</Typography>
        <Typography mb="8px">{job_role}</Typography>
      </TouchableOpacity>
      <Row>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="trash-2" color="black" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('NaverForm', { id })}
        >
          <Icon name="edit-2" color="black" size={24} />
        </TouchableOpacity>
      </Row>
    </Column>
  );
};

NaverItem.propTypes = {
  id: string,
  index: number,
  job_role: string,
  name: string,
  url: string,
};

export default NaverItem;
