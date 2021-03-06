import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FileReader from '../components/FileReader';

const homeScreen = ({ navigation }) => {
    return (
        <View style={styles.BackgroundStyle}>
            <View style={styles.Container}>
                <Text style={styles.TextStyle}>KindleLike</Text>
            </View>
            <View style={styles.ButtonContainer}>
                <FileReader 
                    title={'Select Book File'} 
                    onFileSubmit={(value) => navigation.navigate('Reader', { file: value })} 
                />
            </View>
        </View>
    );
};

homeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
};

const styles = StyleSheet.create({
    BackgroundStyle: {
        backgroundColor: '#222222',
        flex: 1,
    },
    Container: {
        margin: 100,
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    TextStyle: {
        fontSize: 100,
        color: '#ffff',
    },
    ButtonContainer: {
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        flex: 1,
    }
});

export default homeScreen;