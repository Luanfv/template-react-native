import React from 'react';
import { ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Body, Center } from './styles';

export const Home: React.FC = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Body>
        <Center>
          <Icon name="logo-react" size={40} />

          <Text>React-Native template</Text>
        </Center>
      </Body>
    </ScrollView>
  );
};
