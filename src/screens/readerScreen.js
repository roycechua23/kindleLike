import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
// import { story } from '../constants/constants';
import BookGenerator from '../components/BookGenerator';

const readerScreen = ({ navigation }) => {
    const story = navigation.getParam('story');

    return (
        <BookGenerator book={story} />
    );
};

const styles = StyleSheet.create({});

export default readerScreen;