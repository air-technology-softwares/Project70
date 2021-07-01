import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import AppHeader from '../Component/AppHeader';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>

                <Text style={styles.title}>Write Screen</Text>

                <TextInput placeholder="Book Title" style={styles.rel}/>

                <TextInput placeholder="Auther" style={styles.rel}/>

                <TextInput placeholder="Write Here" style={styles.main}/>

                <Button title="Submit" style={{marginTop: 10,}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize: 25,
        fontWeight:'bold',
        marginTop: 20,
        textAlign: 'center',
    },

    rel:{
        height: 30,
        borderWidth: 2,
        marginTop: 20,
        width: 400,
        marginLeft: 470,
        textAlign: 'center',
    },

    main:{
        height: 200,
        borderWidth: 2,
        marginTop: 20,
        width: 400,
        marginLeft: 470,
        marginBottom: 50,
        textAlign: 'center',
    },

  
});