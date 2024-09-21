import React from 'react';
import { Link } from 'expo-router';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const ProfileScreen = () => {


  return (

 

    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

       <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>



        <View style={styles.userProfileOneContainer}>

            <View style={styles.userProfileContainer}>

              <View style={styles.userNameContainer}>
                  
                  <Text style={styles.userName}>Uche</Text>
      
              </View>

                <View style={styles.userImgcontainer}>

                    <Image
                    style={styles.userImg}
                    source={require('../../assets/images/users/user-8.jpg')}
                    />

                </View>

            </View>


            <View style={styles.userInfoWrapperContainer}>

              <View style={styles.userInfoWrapper}>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>34</Text>
                    <Text style={styles.userInfoSubTitle}>Upvotes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>200</Text>
                    <Text style={styles.userInfoSubTitle}>Downvotes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>342</Text>
                    <Text style={styles.userInfoSubTitle}>Shares</Text>
                </View>

              </View>

              <View style={styles.userInfoWrapper}>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>34</Text>
                    <Text style={styles.userInfoSubTitle}>Memes</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>200</Text>
                    <Text style={styles.userInfoSubTitle}>Followers</Text>
                </View>

                <View style={styles.userInfoItem}>
                    <Text style={styles.userInfoTitle}>342</Text>
                    <Text style={styles.userInfoSubTitle}>Following</Text>
                </View>

              </View>

            </View>

        </View>

        <View>
            
            <Text style={styles.aboutUser}>My name is Uche. I like dancing in the rain and traveling all around the world.</Text>
    
        </View>
    
         <View style={styles.userBtnWrapper}>
           
            <>
              <TouchableOpacity style={styles.userBtn}>
                <Link href="/edit" style={styles.userBtnTxt}>Edit Profile</Link>
              </TouchableOpacity>

            </>
          
        </View>



        </ScrollView>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 70
  },

  userProfileOneContainer: {
    display: 'flex',
    flexDirection:'row',
    justifyContent:'space-around',
  },

  userProfileContainer: {
  },

  userNameContainer: {
    alignItems: 'flex-start', 
  },


  userImg: {
    height: 83,
    width: 83,
    borderRadius: 80,
    borderWidth: 4,
    borderColor: '#A01CFE',

  },

  userName: {
    fontSize: 18,
    fontWeight: 'bolder',
    marginTop: 10,
    marginBottom: 10,
    marginLeft:10,
    letterSpacing: -0.40799999237060547,
    lineHeight: 22,
  },

  aboutUser: {
    fontSize: 13,
    fontWeight: 'bolder',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
    borderWidth: 4,
    borderColor: 'transparent',
    padding: 5,
    lineHeight:20,
    paddingLeft: 30,
    paddingRight: 30,
  },

  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
    display: 'flex',
  },

  userBtn: {
    borderColor: '#A01CFE',
    backgroundColor: '#A01CFE',
    color: 'white',
    borderWidth: 2,
    borderRadius:30,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    width: 120,
    height: 40,
    gap: 10
  },

  userBtnTxt: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 13,
    lineHeight: 16.25,
  },

  userInfoWrapperContainer: {
    paddingTop: 3,
    paddingBottom: 5,
  },

  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',    
    marginTop: "5%",
  },

  userInfoItem: {
    justifyContent: 'center',
    borderColor: '#F6EFFB',
    borderStyle:'solid',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    width: 85,
    margin:2
  },

  userInfoTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  userInfoSubTitle: {
    fontSize: 10.2,
    color: '#666',
    textAlign: 'center',
  },

});
