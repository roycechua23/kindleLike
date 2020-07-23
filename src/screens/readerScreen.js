import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const readerScreen = () => {
    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            <View key="1">
                <Text>First page</Text>
            </View>
            <View key="2">
                <Text>Second page</Text>
            </View>
        </ViewPager>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});

export default readerScreen;