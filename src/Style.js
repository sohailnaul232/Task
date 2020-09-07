const { exp } = require("react-native-reanimated");
import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    text_:{
        backgroundColor: 'transparent',
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#fff',
                        alignSelf: 'center',
                        marginTop: 30,

    },
    signIn_View:{
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:150,
        borderBottomRightRadius:30,
        width:'90%',
        backgroundColor:'white',
        height:300,
        margin:10,
        marginTop:20,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:'90%',
        borderColor:'#666666',
        borderBottomWidth:1,
        marginTop:10
    
    }
})