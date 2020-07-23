import React from 'react';
import { StyleSheet } from 'react-native';
import BookGenerator from '../components/BookGenerator';

const ReaderScreen = ({ navigation }) => {
    const file = navigation.getParam('file');

    return (
        <BookGenerator book={file} />
    );
};

const styles = StyleSheet.create({});

ReaderScreen.navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: '#f5a142',
        },
        headerTintColor: '#ffff',
    }
};

export default ReaderScreen;