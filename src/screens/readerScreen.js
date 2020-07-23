import React from 'react';
import { StyleSheet } from 'react-native';
import BookGenerator from '../components/BookGenerator';

const readerScreen = ({ navigation }) => {
    const story = navigation.getParam('story');

    return (
        <BookGenerator book={story} />
    );
};

const styles = StyleSheet.create({});

export default readerScreen;