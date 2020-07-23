import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const FileReader = ({title, onFileSubmit}) => {
    const readBookFile = () => {
        DocumentPicker.getDocumentAsync({ type: 'text/plain' }).then(
            (file) => {
                FileSystem.readAsStringAsync(file.uri).then(
                    (strVal) => onFileSubmit(strVal)
                ).catch(error => file="");
            }
        ).catch(error => alert(`An error was encountered with ${error.message}`));
    }

    return (
        <TouchableOpacity onPress={readBookFile}>
                <Text style={styles.ButtonTextStyle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    ButtonTextStyle: {
        fontSize: 30,
        color: '#ffff',
        backgroundColor: '#f5a142',
        borderRadius: 15,
        padding: 15,
    },
});

export default FileReader;