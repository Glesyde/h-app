import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const style_welcome=StyleSheet.create({


    pictureA: {
        borderColor: "red",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        height: 38,
        width: 48,
        borderRadius: 20,
        position: "absolute",
        transform: [
            { translateX: 15.69 },
            { translateY: 88.75 },
            { rotate: "-15deg" }
        ]
    },

    
    pictureB: {
        borderColor: "red",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        height: 38,
        width: 48,
        borderRadius: 20,
        position: "absolute",
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-5deg" }
        ]
    },

    
    pictureC: {
        borderColor: "red",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        width: 100,
        height: 100,
        borderRadius: 20,
        position: "absolute",
        top: 130,
        left: -50,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "15deg" }
        ]
    },

    
    pictureD: {
        borderColor: "red",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        height: 200,
        width: 200,
        borderRadius: 20,
        position: "absolute",
        top: 110,
        left: 100,
        transform: [
            { translateX: 50 },
            { translateY: 50 },
            { rotate: "-15deg" }
        ]
    },


        container: {
            flex: 1,
        },
    
        contain1: { 
            flex: 1,
            // borderColor: "red",
            // borderBottomWidth: 21,
            // borderTopWidth: 21,
            // borderRightWidth: 20,
            // borderLeftWidth: 20,
            // backgroundColor: "#98B3E1",
            height: "100vh"
        },
    
        content: {
            paddingHorizontal: 2,
            top: "5%",
            width: "90%",
            borderColor: "gold",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto"
        },

        app_container_alignment: {
            width: "fit-content",
            borderColor: "black",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto",
        },

        text_alignment: {
            textAlign:"center"
        },
    
        welcomeText1: {
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.black, 
            borderColor: "red",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
        },
    
        welcomeText2: {
            fontSize: 16,
            // fontWeight: 800,
            color: COLORS.white, 
            borderColor: "red",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
        },
    
        button: {
            marginTop: 22,
            width: "100%",
            borderColor: "red",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
        },

        btn_container: {
            width: "100%",
            borderColor: "black",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto",
        },

       login_button: {
            backgroundColor:"#407CE2",
            color:COLORS.white,
            width: "100%",
            height: "56px",
            // borderTopEndRadius: "32px",
            // borderTopRightRadius: "32px",
            // borderTopLeftRadius:"32px",
            // borderTopStartRadius: "32px",
            // borderBottomEndRadius: "32px",
            // borderBottomRightRadius: "32px",
            // borderBottomLeftRadius:"32px",
            // borderBottomStartRadius: "32px",
            marginBottom:"5%",
        },

        
      signup_button: {
        backgroundColor:"transparent",
        width: "100%",
        height: "56px",
        // borderTopEndRadius: "32px",
        // borderTopRightRadius: "32px",
        // borderTopLeftRadius:"32px",
        // borderTopStartRadius: "32px",
        // borderBottomEndRadius: "32px",
        // borderBottomRightRadius: "32px",
        // borderBottomLeftRadius:"32px",
        // borderBottomStartRadius: "32px",
    },

        // welcome_page_signup_button:{
        //     backgroundColor:"transparent",
        //     color: "#407CE2",
        // }
    

    

    

    })
    
    export default style_welcome;