import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from '../styles/style_completed_card';
import { Ionicons } from '@expo/vector-icons';

const CompletedCard = () => {
    const completedCard = [
        {name: 'Dr. Olivia Tunner, M.D.', post: 'Dermato-Endocrinolgy', profileImg: '../assets/doctor.png'},
        {name: 'Dr. Olivia Tunner, M.D.', post: 'Dermato-Endocrinolgy', profileImg: '../assets/doctor.png'},
        {name: 'Dr. Olivia Tunner, M.D.', post: 'Dermato-Endocrinolgy', profileImg: '../assets/doctor.png'},
        {name: 'Dr. Olivia Tunner, M.D.', post: 'Dermato-Endocrinolgy', profileImg: '../assets/doctor.png'},
        {name: 'Dr. Olivia Tunner, M.D.', post: 'Dermato-Endocrinolgy', profileImg: '../assets/doctor.png'},
    ]




  return (

    <>
        {completedCard.map((item, id) =>(
                <View
                style={styles.card}
            >
              <View
                style = {styles.doctorDetailsContainer}
              >
                <Image
                    source={require('../assets/doctor.png')}
                    style={styles.doctorImg}
                />
                <View>
                    <Text
                        style = {styles.doctorName}
                    >
                        {item.name}
                    </Text>
                    <Text
                        style={styles.doctorPost}
                    >
                        {item.post}
                    </Text>
                    <View
                        style={styles.reactionContainer}
                    >
                        <View
                            style={styles.ratingContainer}
                        >
                            <Ionicons
                                name='star'
                                color= '#2260FF'
                            />
                            <Text
                                style={styles.rating}
                            >
                                5
                            </Text>
                        </View>
                        <View 
                            style={styles.likeContanier}
                        >
                            <Ionicons
                                name='heart'
                                color= '#2260FF'
        
                            />
                        </View>
                    </View>
                </View>
              </View>
              <View
                style={styles.btnGroup}
              >
                <TouchableOpacity
                    style={styles.reBooKBtn}
                >
                    <Text
                        style={styles.reBooKBtnText}
                    >
                        Re-Book
                    </Text>     
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.reviewBtn}
                >
                    <Text
                        style={styles.reviewBtnText}
                    >
                        Add Review
                    </Text>  
                </TouchableOpacity>
              </View>
            </View>
        ))}
    
    </>


  )
}

export default CompletedCard