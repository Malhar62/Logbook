// App.js

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
export default function Timelog() {

    const [path, setPath] = React.useState('')
    const [path1, setPath1] = React.useState('')
    const selectFile = () => {
        var options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose file from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        launchImageLibrary(options, (response) => { // Use launchImageLibrary to open image gallery
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                setPath(response.data)
                setPath1(response.assets.uri)
                console.log(response.data)
            }
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                {path != '' &&
                    <Image
                        source={{
                            uri: 'data:image/jpeg;base64,' + path,
                        }}
                        style={{ width: 100, height: 100, borderWidth: 1, backgroundColor: 'cyan' }}
                    />}

                {path1 != '' && <Image
                    source={{ uri: path1 }}
                    style={{ width: 200, height: 200 }}
                />}

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
    }
});