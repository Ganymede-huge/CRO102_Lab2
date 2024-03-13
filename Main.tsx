import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

const Main: React.FC = () => {
    const [headerText, setHeaderText] = useState('')
    const [footerText, setFooterText] = useState('')
    const [footerColor, setFooterColor] = useState('#faa')

    const handleUpdateHeader = (text: string) => {
        setHeaderText(text)
    }

    const handleUpdateFooter = (text: string) => {
        setFooterText(text)
    }

    const handleButtonClick = () => {
        setFooterColor('blue')
    }

    return (
        <View style={styles.container}>
            <Header headerText={headerText} />
            <Body
                onUpdateHeader={handleUpdateHeader}
                onUpdateFooter={handleUpdateFooter}
            />
            <Footer footerText={footerText} color={footerColor} />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})