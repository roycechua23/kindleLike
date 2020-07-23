import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { story } from '../constants/constants';

const NUM_OF_LINES = 25;
// Characters per line
// CPL = Width / (font-size/font-constant)
// 1.91 - Arial/Sans-serif font-constant
const CPL = 320 / (20/1.91);
const storyPartsLength = Math.round(story.length/CPL*NUM_OF_LINES);
const storyPartsList = [];

const readerScreen = () => {
    let storyPart = story;
    for(let i=1; i <= storyPartsLength; i++) {
        if(storyPart.slice(0,CPL*NUM_OF_LINES) === ""){
            
        } else {
            storyPartsList.push(
                <View style={styles.viewStyle} key={i}>
                    <Text style={styles.textContent}>{storyPart.slice(0,CPL*NUM_OF_LINES)}</Text>
                </View>
            );
            storyPart = storyPart.slice(CPL*NUM_OF_LINES);
        }
    }
    console.log(`CPL is ${Math.round(CPL)}`);
    console.log(`Text Length - ${story.length}`);
    console.log(storyPartsList);
    console.log(storyPartsList.length);

    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            {storyPartsList}
            {/* <View style={styles.viewStyle} key="1">
                <Text style={styles.textContent} onTextLayout={onTextLayout}>{storyPartsList[0]}</Text>
            </View>
            <View key="2">
                <Text style={styles.textContent}>{storyPartsList[1]}</Text>
            </View>
            <View key="3">
                <Text style={styles.textContent}>{storyPartsList[2]}</Text>
            </View>
            <View key="4">
                <Text style={styles.textContent}>{storyPartsList[3]}</Text>
            </View> */}
        </ViewPager>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        width: 400,
        flex: 1,
    },
    viewStyle: {
        padding: 15,
    },
    textContent: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        textAlign: 'justify',
    }
});

export default readerScreen;