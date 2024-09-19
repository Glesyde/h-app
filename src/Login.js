import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
// import style_account_entry from '../styles/style_account_entry';
import style_account_entry from '../styles/style_account_entry';
import Apptitle from "../components/Apptitle";
import Email from "../assets/icons/email.svg";
import Password from "../assets/icons/password.svg";
import { useNavigation } from '@react-navigation/native';
// import { firebase } from '../config';

// const Login = ({ navigation }) => {
const Login = () => {
    const navigation = useNavigation();
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    loginUser = async(email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email,password);
        }
        catch(error) {
            alert(error.message);
        }
    }

    
    return (

        <SafeAreaView style={style_account_entry.container}>

            <View style={style_account_entry.container1}>
                
                <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Email/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor={COLORS.black}
                        keyboardType='email-address'
                        style={style_account_entry.textInputType}
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                </View>

                </View>


                <View style={style_account_entry.textInputContainer}>

                <View style={style_account_entry.inputIconContainer}>
                    <Password/>
                </View>

                <View style={style_account_entry.textInputTypeContainer}>

                    <TextInput
                        placeholder='Enter your password'
                        placeholderTextColor={COLORS.black}
                        // secureTextEntry={isPasswordShown}
                        style={style_account_entry.textInputType}
                        textContentType='password'
                        onChangeText={(password) => setPassword(password)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={() =>setIsPasswordShown(!isPasswordShown)}
                        style={style_account_entry.passwordbtn}
                    >
                    {
                    isPasswordShown == false ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
                    ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                    )
                    }

                    </TouchableOpacity>

                </View>

                </View>


                <View style={style_account_entry.checkContainer}>

                    <View style=    {style_account_entry.checkBoxContainer}>

                        <View>
                            <Checkbox
                                style={{ marginRight: 8 }}
                                value={isChecked}
                                onValueChange={setIsChecked}
                                color={isChecked ? COLORS.primary : undefined}
                            />

                        </View>

                        <View>
                            <Text>Remenber Me</Text>
                        </View>


                    </View>
                    
                    <View style={style_account_entry.forgotPasswordContainer}>
                        <Text>Forgot Password ?</Text>                        
                    </View>
                    
                </View>

                <Button 
                title="Sign in"  
                style={style_account_entry.loginBtn}
                onPress={() => navigation.navigate("Dashboard")}
                // onPress={()=> loginUser(email,password)}
                />

                <View style={style_account_entry.otheroptions}>
                    <View
                        style={style_account_entry.otheroptionsContainer}
                    />
                    <Text style={style_account_entry.login_text}>Or Login with</Text>
                    <View
                        style={style_account_entry.otheroptions2}
                    />
                </View>

                <View style={style_account_entry.btnContainer}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_account_entry.social_login}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={style_account_entry.social_style}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={style_account_entry.social_login}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={style_account_entry.social_style}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={style_account_entry.register_container}>
                    <Text style={style_account_entry.register_text_container}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={style_account_entry.register_text}>Sign up</Text>
                    </Pressable>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Login