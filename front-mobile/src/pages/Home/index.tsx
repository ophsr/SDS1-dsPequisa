import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

const handleOnPress = () =>{
    Alert.alert("Clicou")
} 

const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.gamerImage} source={require('../../assets/logo.png')} />
                <Text style={styles.title} >Vote agora!</Text>
                <Text style={styles.subTitle} >Nos diga qual é seu jogo favorito!</Text>

            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>COLETAR DADOS</Text>
                    <View style={styles.buttonIcon}>
                        <Text><Icon name="chevron-right" color="#FFF" size={25} /></Text>
                    </View>
                </RectButton>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        backgroundColor: '#000C35',
        alignItems: 'center',
    },
    gamerImage: {
        width: 309,
        height: 288
    },
    title: {
        color: '#00D02D',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 31,
        fontFamily: "Play_700Bold",
    },
    subTitle: {
        color: '#FF4D00',
        fontSize: 21,
        marginTop: 15,
        fontFamily: "Play_400Regular",
    },
    footer: {
        marginTop: '15%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#00D02D',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonIcon: {
        backgroundColor: '#FF4D00',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000C35',
    }
});

export default Home;
