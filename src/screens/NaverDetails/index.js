import React from 'react';
import { func, shape, string } from 'prop-types';
import { Dimensions, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { Button, Column, Image, Row, ScreenLoader, Typography } from '../../components';
import { getNaverById } from '../../services/navers';

const { width } = Dimensions.get('screen');

const NaverDetails = ({ navigation, route }) => {
  const { id } = route.params;

  const { data: naver, isLoading } = useQuery(['navers', id], getNaverById(id));

  if (isLoading) {
    return <ScreenLoader />;
  }

  const { age, company_time, job_role, name, project } = naver;

  return (
    <ScrollView flex={1} showsHorizontalScrollIndicator={false}>
      <Image source={{ uri: naver.url }} aspectRatio={1} width={width} mb="24px" />
      <Column px="16px">
        <Typography fontSize="22px" fontWeight="bold">
          {name}
        </Typography>
        <Typography fontSize="16px" mb="24px">
          {job_role}
        </Typography>
        <Typography fontSize="16px" fontWeight="bold" mb="4px">
          Idade
        </Typography>
        <Typography fontSize="16px" mb="24px">
          {age} anos
        </Typography>
        <Typography fontSize="16px" fontWeight="bold" mb="4px">
          Tempo de empresa
        </Typography>
        <Typography fontSize="16px" mb="24px">
          {company_time}
        </Typography>
        <Typography fontSize="16px" fontWeight="bold" mb="4px">
          Projetos que participou
        </Typography>
        <Typography fontSize="16px" mb="32px">
          {project}
        </Typography>
        <Row mb="32px">
          <Button flex={1} variant="outlined" mr="16px">
            Excluir
          </Button>
          <Button flex={1} onPress={() => navigation.navigate('NaverForm', { id })}>
            Editar
          </Button>
        </Row>
      </Column>
    </ScrollView>
  );
};

NaverDetails.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: shape({
    params: shape({
      id: string,
    }),
  }),
};

export default NaverDetails;
