import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const BookGenerator = ({ book }) => {

    /*  
        NUM_OF_LINES - Number of lines in a Text Component on Screen
        CPL - Characters per line
            Formula: CPL = Width / (font-size/font-constant)
        bookPartsLength - computes how many Views will be generated        
    */
    const NUM_OF_LINES = 25;
    const CPL = 300 / (18/1.9); // 1.91 - Arial/Sans-serif font-constant
    const bookPartsLength = Math.round(book.length/CPL*NUM_OF_LINES);
    
    // All the Views will be stored in bookParts List
    const bookPartsList = [];
    
    let bookPart = book;
    for(let i=1; i <= bookPartsLength; i++) {
        if(bookPart.slice(0,CPL*NUM_OF_LINES) != "") {
            storyPartsList.push(
                <View style={styles.viewStyle} key={i}>
                    <Text style={styles.textContent}>{bookPart.slice(0,CPL*NUM_OF_LINES)}</Text>
                    <Text style={{color: 'gray',alignSelf:'flex-end'}}>Page {i}</Text>
                </View>
            );
            bookPart = bookPart.slice(CPL*NUM_OF_LINES);
        }
    }

    return (
        <ViewPager style={styles.viewPager} initialPage={0}>
            {storyPartsList}
        </ViewPager>
    );
}

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
        fontSize: 18,
        textAlign: 'justify',
    }
});    

export default BookGenerator;