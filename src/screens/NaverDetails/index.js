import React from 'react';
import { func, shape, string } from 'prop-types';
import { Dimensions, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { Button, Column, Image, Row, ScreenLoader, Typography } from '../../components';
import { getNaverById } from '../../services/navers';
import { format, formatDistanceToNow, differenceInCalendarYears } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import locale from 'date-fns/locale/pt-BR';

const { width } = Dimensions.get('screen');

const NaverDetails = ({ navigation, route }) => {
  const { id } = route.params;

  const { data: naver, isLoading } = useQuery(['navers', id], getNaverById(id), {
    cacheTime: 0,
  });

  if (isLoading) {
    return <ScreenLoader />;
  }

  const { name, job_role, birthdate, admission_date, project } = naver;

  const age = differenceInCalendarYears(new Date(), utcToZonedTime(birthdate, 'utc'));

  const companyTime = formatDistanceToNow(utcToZonedTime(admission_date, 'utc'), { locale });

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
          {companyTime}
        </Typography>
        <Typography fontSize="16px" fontWeight="bold" mb="4px">
          Projetos que participou
        </Typography>
        <Typography fontSize="16px" mb="32px">
          {project}
        </Typography>
        <Row mb="32px">
          <Button variant="outlined" mr="16px">
            Excluir
          </Button>
          <Button>Editar</Button>
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
