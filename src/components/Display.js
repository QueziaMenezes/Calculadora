import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

const styles = StyleSheet.create({
    display: {
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    displayValue: {
        fontSize: 60,
        color: '#fff',
    }
});

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>