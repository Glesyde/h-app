import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const style_account_entry=StyleSheet.create({

    container :{ 
        flex: 1, 
        backgroundColor: COLORS.white 
    },

    container1: { 
        flex: 1, 
        marginHorizontal: 12,
        marginTop: 20,
    },

    welcometextcontainer: { 
        marginVertical: 22 
    },

    welcometext: {
        fontSize: 22,
        marginVertical: 12,
        color: COLORS.black
    },

    welcometext1: {
        fontSize: 16,
        color: COLORS.black
    },

    textInputContainer: {
        width: "100%",
        height: 56,
        borderColor:  "#221F1F",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#F9FAFB",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 22,
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },

    inputIconContainer: {
        // borderColor: COLORS.black,
        // borderWidth: 1,
    },

    textInputTypeContainer: { 
        // borderColor: COLORS.black,
        // borderWidth: 1,
        width: "90%",
        height: 35,
    },

    // textInputDisplay:{
    //     borderColor: COLORS.black,
    //     borderWidth: 1,
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "left"
    // },

    textInputType: {
        width: "100%",
        // borderColor: COLORS.black,
        // borderWidth: 1,
        height: 35,
        outlineColor: "transparent",
        outlineStyle: "solid",
        outlineWidth: 1,
        fontSize: 18,
    },


    // mobile_number_inputcontainer: {
    //     width: "100%",
    //     height: 48,
    //     borderColor: COLORS.black,
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     alignItems: "center",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     paddingLeft: 22
    // },

    // mobile_number_code: {
    //     width: "12%",
    //     borderRightWidth: 1,
    //     borderLeftColor: COLORS.grey,
    //     height: "100%"
    // },

    // mobile_number_: {
    //     width: "80%"
    // },


    passwordbtn: {
        position: "absolute",
        right: 12
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: 6,
        borderColor: "transparent",
        borderWidth: 2,
        width: "87%",
    },

    checkBox: { 
        marginRight: 8, 
        borderRadius: 20,
    },

    loginBtn: {
        marginTop: 18,
    },

    otheroptions: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 5 
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

    
    checkContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 6,
        borderColor: "transparent",
        borderWidth: 2,
        justifyContent:"space-between"
    },

    checkBoxContainer: {
        borderColor: "transparent",
        borderWidth: 2,
        display: "flex",
        flexDirection: "row",
    },
    
    forgotPasswordContainer: {
        borderColor: "transparent",
        borderWidth: 2,
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
    },

    f_14: { 
        fontSize: 14 
    }



})

export default style_account_entry;