import React from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, ToastAndroid, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import db from '../config'
export default class Login extends React.Component {
    constructor(){
        super();
        this.state={
            Title:'',
            Author:'',
            Story:'',
        }
    }

    submitButton=()=>{
        alert("Your story has been submitted!")
        ToastAndroid.show("Your story has been submitted!",ToastAndroid.SHORT)
        db.collection('Stories').add({
            Title:this.state.Title,
            Author:this.state.Author,
            Story:this.state.Story
        })
        this.setState({
            Title:'',
            Author:'',
            Story:'',
        })
    }

    render(){
        return(
            <KeyboardAvoidingView style={stylez.Searchsty}>
                <h1>Story Hub</h1>
                    <Text>Story Title</Text>
                <TextInput value={this.state.Title} onChangeText={(text)=>this.setState({Title:text})}/>
                    <Text>Author</Text>
                <TextInput value={this.state.Author} onChangeText={(text)=>this.setState({Author:text})}/>
                    <Text>Story</Text>
                <TextInput value={this.state.Story} onChangeText={(text)=>this.setState({Story:text})}/>
                <TouchableOpacity style={{backgroundColor:'blue'}}  onPress={this.submitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
const stylez = StyleSheet.create({
    Searchsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',
    }
})