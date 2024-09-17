import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const style_login=StyleSheet.create({

    container :{ 
        flex: 1, 
        backgroundColor: COLORS.white 
    },

    container1: { 
        flex: 1, 
        marginHorizontal: 22,
    },

    welcometextcontainer: { 
        marginVertical: 22 
    },

    welcometext: {
        fontSize: 22,
        // fontWeight: 'bold',
        marginVertical: 12,
        color: COLORS.black
    },

    welcometext1: {
        fontSize: 16,
        color: COLORS.black
    },

    emailcontainer: { 
        marginBottom: 12,
    },

    emaillabel: {
        fontSize: 16,
        // fontWeight: 400,
        marginVertical: 8
    },

    emailinputcontainer: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22
    },

    emailinputtype: {
        width: "100%"
    },

    passwordcontainer: { 
        marginBottom: 12,
    },

    passwordlabel: {
        fontSize: 16,
        // fontWeight: 400,
        marginVertical: 8
    },

    passwordinputcontainer: {
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22
    },

    passwordinputtype: {
        width: "100%"
    },

    passwordbtn: {
        position: "absolute",
        right: 12
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 6
    },

    loginBtn: {
        marginTop: 18,
        marginBottom: 4,
    },

    otheroptions: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 20 
    },

    otheroptionsContainer: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.grey,
        marginHorizontal: 10
    },
    
    otheroptions2: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.grey,
        marginHorizontal: 10
    },

    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    login_text: { 
        fontSize: 14,     
    },

    social_login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 52,
        borderWidth: 1,
        borderColor: COLORS.grey,
        marginRight: 4,
        borderRadius: 10
    },

    social_style: {
        height: 36,
        width: 36,
        marginRight: 8
    },

    register_container: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 22
    },

    register_text_container: { 
        fontSize: 16, 
        color: COLORS.black 
    },

    register_text:{
        fontSize: 16,
        color: COLORS.primary,
        // fontWeight: "bold",
        marginLeft: 6
    }

    




})

export default style_login;