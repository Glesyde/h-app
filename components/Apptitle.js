import { Text, View, BackHandler, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import style_app_title from '../styles/shared/style_app_title';
import ArrowLeft from '../assets/icons/arrow-left.svg';

const Apptitle = (property) => {

  useEffect(()=> {
    const backAction = () => {
      Alert.alert("Are you sure you want to go back.", [
        {
          text: "Cancel",
          onPress: ()=>null,
          style:"cancel"
        },
        {
          text: "Yes",
          onPress:()=>BackHandler.exitApp()
        }
      ]);
      return true;   
    }

    const backHandler = BackHandler.addEventListener("hardwareBackPress",backAction)

  },[])


  return (


        
        <View style={style_app_title.text_container}>

          <View style={style_app_title.arrowBorder}>

            <TouchableOpacity 
            onPress={this.backButton}
            
            >
              <ArrowLeft style={style_app_title.leftArrow}/>
            </TouchableOpacity>

          </View>

          <View style={style_app_title.textBorder}>

            <Text style={style_app_title.text}>{property.title}</Text> 
              
          </View>

        </View>


  )
}

export default Apptitle



// import React, {Component} from 'react';
// import {Alert, StyleSheet,Text,TouchableOpacity,View,BackHandler} from 'react-native';

// export default class Touchables extends Component {
//   _onPressButton() {
    
//     const backAction = () => {
//       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {text: 'YES', onPress: () => BackHandler.exitApp()},
//       ]);
//       return true;
//     };

//     const backHandler = BackHandler.addEventListener(
//       'hardwareBackPress',
//       backAction,
//     );

//     return () => backHandler.remove();


//   }


//   render() {

//     return (

//       <View style={styles.container}>


//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>

//       </View>

//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center',
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3',
//   },
//   buttonText: {
//     textAlign: 'center',
//     padding: 20,
//     color: 'white',
//   },
// });
