import React from 'react';
import { StyleSheet } from 'react-native';
import BookGenerator from '../components/BookGenerator';

const readerScreen = ({ navigation }) => {
    const file = navigation.getParam('file');

    return (
        <BookGenerator book={file} />
    );
};

const styles = StyleSheet.create({});

export default readerScreen;