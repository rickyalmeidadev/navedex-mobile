import React, { useEffect } from 'react';
import { func, shape, string } from 'prop-types';
import { Alert } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { format } from 'date-fns-tz';
import { utcToZonedTime } from 'date-fns-tz';
import {
  Button,
  DatePicker,
  ScreenLoader,
  ScrollView,
  TextField,
  Typography,
} from '../../components';
import { createNaver, getNaverById, updateNaverById } from '../../services/navers';
import { naverSchema } from '../../helpers';
import { useAlert } from '../../hooks';

const NaverForm = ({ navigation, route }) => {
  const { id } = route.params ?? {};

  const alert = useAlert();
  const queryClient = useQueryClient();

  const { control, errors, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      job_role: '',
      birthdate: '',
      admission_date: '',
      project: '',
      url: '',
    },
    resolver: yupResolver(naverSchema),
  });

  const { isFetching } = useQuery(['navers', id], getNaverById(id), {
    enabled: Boolean(id),
    onSuccess: ({ admission_date, birthdate, job_role, name, project, url }) => {
      const rest = { job_role, name, project, url };

      reset({
        admission_date: format(utcToZonedTime(admission_date, 'utc'), 'dd/MM/yyyy'),
        birthdate: format(utcToZonedTime(birthdate, 'utc'), 'dd/MM/yyyy'),
        ...rest,
      });
    },
  });

  useEffect(() => {
    control.fieldsRef.current.name?.ref.focus();
  }, [control.fieldsRef]);

  const handleFocus = name => () => {
    control.fieldsRef.current[name]?.ref.focus();
  };

  const onSubmit = async data => {
    try {
      if (id) {
        await updateNaverById(id, data);
      } else {
        await createNaver(data);
      }

      alert({
        type: 'info',
        title: id ? 'Naver editado' : 'Naver adicionado',
        description: id ? 'Naver editado com sucesso!' : 'Naver adicionado com sucesso!',
        onConfirm: () => {
          queryClient.invalidateQueries('navers');
          navigation.navigate('NaversList');
        },
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  if (isFetching) {
    return <ScreenLoader />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1} px="16px">
      <Typography alignSelf="center" fontSize="22px" fontWeight="bold" mt="32px" mb="24px">
        {id ? 'Editar' : 'Adicionar'} naver
      </Typography>
      <Controller
        name="name"
        control={control}
        render={props => (
          <TextField
            autoCorrect={false}
            label="Nome"
            placeholder="Jon Snow"
            mb="32px"
            onSubmitEditing={handleFocus('job_role')}
            blurOnSubmit={false}
            error={errors.name?.message}
            {...props}
          />
        )}
      />
      <Controller
        name="job_role"
        control={control}
        render={props => (
          <TextField
            autoCorrect={false}
            label="Cargo"
            placeholder="Rei do Norte"
            mb="32px"
            error={errors.job_role?.message}
            {...props}
          />
        )}
      />
      <Controller
        name="birthdate"
        control={control}
        render={props => (
          <DatePicker
            label="Data de nascimento"
            placeholder="dd/mm/aaaa"
            error={errors.birthdate?.message}
            mb="32px"
            {...props}
          />
        )}
      />
      <Controller
        name="admission_date"
        control={control}
        render={props => (
          <DatePicker
            label="Data de admissão"
            placeholder="dd/mm/aaaa"
            error={errors.admission_date?.message}
            mb="32px"
            {...props}
          />
        )}
      />
      <Controller
        name="project"
        control={control}
        render={props => (
          <TextField
            autoCorrect={false}
            label="Projetos que participou"
            placeholder="A Longa Noite"
            mb="32px"
            onSubmitEditing={handleFocus('url')}
            blurOnSubmit={false}
            error={errors.project?.message}
            {...props}
          />
        )}
      />
      <Controller
        name="url"
        control={control}
        render={props => (
          <TextField
            autoCorrect={false}
            label="URL da foto do naver"
            placeholder="https://github.com/jonsnow.png"
            mb="40px"
            onSubmitEditing={handleSubmit(onSubmit)}
            error={errors.url?.message}
            {...props}
          />
        )}
      />
      <Button onPress={handleSubmit(onSubmit)} isLoading={formState.isSubmitting} mb="40px">
        Salvar
      </Button>
    </ScrollView>
  );
};

NaverForm.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: shape({
    params: shape({
      id: string,
    }),
  }),
};

export default NaverForm;
