import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface HeaderProps {
    headerText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
 return (
    <View style={styles.container}>
        <Text style={styles.text}>{headerText}</Text>
    </View>
 )
}


export default Header

const styles = StyleSheet.create({
    container: {
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },})