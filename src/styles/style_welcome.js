import { StyleSheet } from "react-native";
import COLORS from "../utils/colors";

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
            backgroundColor: "#98B3E1",
            height: "100vh"
        },
    
        content: {
            width: "95%",
            borderColor: "transparent",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto"
        },


        app_container_alignment: {
            width: "194px",
            borderColor: "transparent",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto",
            marginBottom: "10%"
        },

        welcomeText1: {
            textAlign:"center",
            fontWeight: "bold",
            fontSize:40
        },
        
        text_alignment: {
            textAlign:"center",
        },
   
        btn_container: {
            width: "80%",
            borderColor: "transparent",
            borderBottomWidth: 2,
            borderTopWidth: 2,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            margin: "auto",
        },

       login_button: {
            backgroundColor:"#407CE2",
            borderColor: "#407CE2",
            width: "100%",
            height: "56px",
            marginBottom:"5%",
            paddingBottom: 18,
            paddingVertical: 18,
            borderWidth: 2,
            borderRadius: 32,
            alignItems: 'center',
            justifyContent: 'center'            
        },

        login_button_text: {
            color:COLORS.white,
            fontSize: 20,
            fontWeight: "bold",
        },

        
      signup_button: {
        backgroundColor:"transparent",
        borderColor: "#407CE2",
        width: "100%",
        height: "56px",
        marginBottom:"5%",
        paddingBottom: 18,
        paddingVertical: 18,
        borderWidth: 2,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center'   
    },


    signup_button_text : {
        color:"#407CE2",
        fontSize: 20,
        fontWeight: "bold",
    },


    

    

    })
    
    export default style_welcome;