import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, TouchableOpacity,
    Text,
    useColorScheme, TextInput, Keyboard, KeyboardAvoidingView,
    View, Button, Dimensions
} from 'react-native';
import {styles} from './styles';
import Common from '../Common';
import { HEIGHT } from '../Functions';


export default function Forgot({ navigation }) {

    const [mail, setMail] = React.useState('');
    const [massage, setMassage] = React.useState('');

    React.useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const [keyboardStatus, setKeyboardStatus] = useState(undefined);
    const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
    const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");


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
    const checking = () => {
        if (mail === '' || massage != 'Email is Correct') {
            alert('enter valid email')
        } else {
            alert('Email sent to your address')
        }
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={'padding'}
            keyboardVerticalOffset={65}>
            <Common />
            <View style={{ height: HEIGHT(450), backgroundColor: 'white' }}>
                {keyboardStatus != 'Keyboard Shown' && <View>
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
                </View>}
                <TextInput
                    placeholder='Email Address'
                    value={mail}
                    onChangeText={text => validate(text)}
                    style={styles.txtinp}
                />
                <Text style={{ color: massage == 'Email is Correct' ? 'green' : 'red', marginLeft: 40, marginTop: 5 }}>{massage}</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => checking()} >
                        <Text style={styles.txt2}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.txt1}>Back to Sign in</Text></TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
};



