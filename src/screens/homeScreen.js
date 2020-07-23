import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const homeScreen = () => {
    return (
        <View style={styles.BackgroundStyle}>
            <View style={styles.Container}>
                <Text style={styles.TextStyle}>KindleLike</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={() => {
                    DocumentPicker.getDocumentAsync().then(
                        (file) => {
                            FileSystem.readAsStringAsync(file.uri).then(
                                (strVal) => console.log(strVal)
                            );
                        }
                    );
                }}>
                    <Text style={styles.ButtonTextStyle}>Select Book File</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    BackgroundStyle: {
        backgroundColor: '#222222',
        flex: 1,
    },
    Container: {
        margin: 15,
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: 40,
        color: '#ffff',
    },
    ButtonTextStyle: {
        fontSize: 30,
        color: '#ffff',
        backgroundColor: '#f5a142',
        borderRadius: 15,
        padding: 15,
    },
    ButtonContainer: {
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
    }
});

export default homeScreen;