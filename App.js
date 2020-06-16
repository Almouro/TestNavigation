import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';

const renderItem = ({item}) => (
  <View style={{backgroundColor: 'green', height: 200, width: 200}}>
    <Text>{item}</Text>
  </View>
);

const GoToScroll = () => {
  const navigation = useNavigation();
  navigation.navigate('Scroll');

  return null;
};

const Scroll = () => {
  const [showScrollView, setShowScrollView] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setShowScrollView(true), 0);
  });
  return showScrollView ? (
    <ScrollView>
      {Array(20)
        .fill()
        .map((_, i) => renderItem({item: i}))}
    </ScrollView>
  ) : null;
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={GoToScroll} />
        <Stack.Screen name="Scroll" component={Scroll} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
