import React from 'react';
import { func, shape } from 'prop-types';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { Button, Column, NaverItem, Row, Typography } from '../../components';
import { getNavers } from '../../services/navers';

const NaversList = ({ navigation }) => {
  const { data: navers, isLoading } = useQuery('navers', getNavers);

  return (
    <Column flex={1}>
      <Row alignItems="center" px="16px" my="26px">
        <Typography flex={1} fontSize={22} fontWeight="bold" mr="16px">
          Navers
        </Typography>
        <Button flex={1} onPress={() => navigation.navigate('NaverForm')}>
          Adicionar naver
        </Button>
      </Row>

      {isLoading ? (
        <Column flex={1} mt="24px">
          <ActivityIndicator color="black" />
        </Column>
      ) : (
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          ListEmptyComponent={() => (
            <Column flex={1} alignItems="center" mt="24px">
              <Typography>Nada por enquanto...</Typography>
            </Column>
          )}
          data={navers}
          keyExtractor={({ id }) => id}
          renderItem={({ item: naver, index }) => (
            <NaverItem padding={index % 2 === 0 ? 'pr' : 'pl'} {...naver} />
          )}
        />
      )}
    </Column>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    paddingHorizontal: 16,
  },
});

NaversList.propTypes = {
  navigation: shape({
    navigate: func,
  }),
};

export default NaversList;
