import React from 'react';
import { number, string } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from 'react-query';
import { Column, Image, Row, Typography } from '..';
import Icon from '../../assets/icons';
import { useAlert } from '../../hooks';
import { deleteNaverById } from '../../services/navers';

const NaverItem = ({ id, job_role, name, padding, url }) => {
  const alert = useAlert();
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    alert({
      type: 'confirm',
      title: 'Excluir naver',
      description: 'Tem certeza que deseja excluir este naver?',
      onConfirm: async () => {
        await deleteNaverById(id);

        queryClient.invalidateQueries('navers');

        alert({
          type: 'info',
          title: 'Naver excluído',
          description: 'Naver excluído com sucesso!',
        });
      },
    });
  };

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
        <TouchableOpacity activeOpacity={0.7} onPress={handleDelete}>
          <Icon name="delete" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('NaverForm', { id })}
        >
          <Icon name="edit" ml="8px" />
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
