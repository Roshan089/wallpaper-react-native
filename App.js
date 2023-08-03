import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './view/navbar';
import Sscreen1 from './view/screen1';
import Screen2 from './view/screen2';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   
        <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='S1'>
          <Stack.Screen name='S1' component={Sscreen1}
            options={{
              headerStyle: {
                backgroundColor: '#42f5b0',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }, title: 'Home',
              headerTitleAlign: 'center'
            }}

          // options={{ headerShown: false }}
          />
          <Stack.Screen  name='S2' component={Screen2}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, title: 'Back',
            headerTitleAlign: 'center'
          }}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>

  
  );
}


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
  },
});
