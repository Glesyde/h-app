import { Platform, StatusBar } from "react-native";
import { ScaledSheet } from "react-native-size-matters";


const styles = ScaledSheet.create({
    safeArea:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: '20@ms',
        flex: 1,
        
    },

    header:{
        marginTop: '10@ms',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    backButtonContainer:{
        // width: '40@s',
        // height: '35@vs',
        // backgroundColor: 'rgba(228, 235, 247, 1.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '60@ms',
        marginRight: '48@ms',
    },

    headerText:{
        fontFamily: 'bold',
        fontSize: '18@s'
    },

    btnGroup:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '20@ms',
        paddingHorizontal: '5@ms'
    },

    toggleBtn:{
        backgroundColor: '#CAD6FF',
        paddingHorizontal: '13@ms',
        paddingVertical: '5@ms',
        borderRadius: 14,


    },

    toggleBtnText:{
        fontFamily: 'regular',
        fontSize: '15@s',
        color: '#2260FF',
    },

    allCard:{
        marginTop: '45@ms',
    },
})

export default styles;