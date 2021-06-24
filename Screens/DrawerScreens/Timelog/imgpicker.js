// App.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
export default function Timelog() {

    const [path, setPath] = React.useState('')
    const [path1, setPath1] = React.useState('')
    const [obj, setObj] = React.useState({})
    const selectFile = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response.assets[0].uri));
                console.log(source)
                setObj(response)
                setPath(response.assets[0].data)
                setPath1(response.assets[0].uri)
                /*this.setState({
                  filePath: response,
                  fileData: response.data,
                  fileUri: response.uri
                });*/
            }
        });

    }
    function renderFileUri() {
        if (path1) {
            return <Image
                source={{ uri: path1 }}
                style={styles.images}
            />
        } else {
            return <Image
                source={require('../../../Components/logo.png')}
                style={styles.images}
            />
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {renderFileUri()}

                <TouchableOpacity onPress={() => selectFile()} style={styles.button}  >
                    <Text style={styles.buttonText}>Select File</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 12
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#fff'
    },
    images: {
        width: 100, height: 100
    }
});