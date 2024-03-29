import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface FooterProps {
    footerText: string;
    color: string;
}

const Footer: React.FC<FooterProps> = ({ footerText, color}) => {
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.text}>{footerText}</Text>
        </View>
    )
}


export default Footer

const styles = StyleSheet.create({
    container: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },})