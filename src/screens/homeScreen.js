import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const homeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
            {/* TODO#2: Render the text/book content here. */}
            <Text>Display Book Files here</Text>
            <Button title={"Select File Here"} onPress={()=>{
                DocumentPicker.getDocumentAsync().then(
                    (file) => console.log(file.uri)
                );
                
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default homeScreen;