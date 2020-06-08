/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './component/Home';
import aboutUs from './component/aboutUs';

// const SwitchNavigator = createSwitchNavigator({
//   MainScreen,
// });

export const Roo = createDrawerNavigator(
  {   

      Home:Home,
      aboutUs:aboutUs,
      
      
      
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#fff",
    drawerBackgroundColor: "#BED17C",
    flex: 1,
    contentOptions: {
        activeTintColor: "black",
        inactiveTintColor: "blue",  
        backgroundColor:'blue',
        labelStyle: {
          fontSize: 25,
          fontFamily:'bold',
          
        
          marginLeft: 50,
        }       
    }
}
)
const AppContainer = createAppContainer(Roo);
 export default class App extends Component{
  
  


  render(){
    return (

        
      <View style={{backgroundColor:'#BED17C',height:'100%',width:'100%'}}>
      <AppContainer/>
      </View>
      
      
  );
  }
}

  

// const App: () => React$Node = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.font}>
//         welcome to game developed by Jai
//       </Text>
//       <Button title="click me" onPress={() => alert('this is a trial version wait for official version')}></Button>
//       <Button title="new test button" onPress={() => alert('test button for app update version')}></Button>
//     </View>
  
      
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems:'center'
    
//   },
//   font:{
//   fontSize:20
//   },
// });

// export default App;
