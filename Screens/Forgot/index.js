import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,TouchableOpacity,
    Text,
    useColorScheme, TextInput,
    View, Button
} from 'react-native';
import Common from '../Common';


export default function Forgot({ navigation }) {

    const [mail, setMail] = React.useState('');
    const [massage, setMassage] = React.useState('');


    const validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setMail(text)
            setMassage("Email is Not Correct");
            return false;
        }
        else {
            setMail(text)
            setMassage("Email is Correct");
        }
    }
    const checking=()=>{
        if(mail==='' || massage!='Email is Correct'){
            alert('enter valid email')
        }else{
            alert('Email sent to your address')
        }
    }
    return (
        <SafeAreaView>
            <Common />
            <View>
                <Text style={{ fontSize: 25, alignSelf: 'center', marginTop: 30 }}>Forgot Password</Text>
                <Text style={styles.txt}>
                    Enter your email address below,  we will send
                </Text>
                <Text style={styles.txt} >
                    you a mail to reset password, if any account exists
                </Text>
                <Text style={styles.txt}>
                    with the given email address.
                </Text>
            </View>
            <TextInput
                placeholder='Email Address'
                value={mail}
                onChangeText={text => validate(text)}
                style={styles.txtinp}
            />
            <Text style={{ color: massage == 'Email is Correct' ? 'green' : 'red', marginLeft: 40, marginTop: 5 }}>{massage}</Text>
            <View style={styles.button}>
          <TouchableOpacity onPress={()=>checking()} >
            <Text style={styles.txt2}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.txt1}>Back to Sign in</Text></TouchableOpacity>
        </SafeAreaView>

    );
};
const styles = StyleSheet.create({
    txt: {
        fontSize: 15, alignSelf: 'center', marginHorizontal: 20, marginTop: 10, color: 'grey'
    }, txtinp: {
        width: 320, height: 50, fontSize: 18, borderBottomColor: 'grey', borderBottomWidth: 1, alignSelf: 'center', marginTop: 30
    },
    button: {
        width: 320, height: 40, marginTop: 30, alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
      },txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 16, marginTop: 7
      },  txt1: { fontSize: 15, color: 'blue',alignSelf:'center',marginTop:30 },

})


