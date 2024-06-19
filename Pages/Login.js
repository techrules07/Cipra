import React, {useState} from "react";
import {View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import CipraLogo from '../Assets/cipra_logo.png'
import Avatar from '../Assets/avatar.png'
import AvatarOutlined from '../Assets/avatar-outline.png'
import KeyOutline from '../Assets/key-outline.png'
import KeyFilled from '../Assets/key.png'
import axios from "axios";
import Toast from 'react-native-simple-toast'

const Login = ({ navigation }) => {

    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')

    const updateEmailId = (text) => {
        setEmailId(text)
    }

    const updatePassword = (text) => {
        setPassword(text)
    }

    const onSubmit = () => {

        if (emailId.length === 0 || password.length === 0) {
            Toast.show("Invalid emailId or password", Toast.SHORT)
            return;
        }
        axios.get('https://api.cipra.ai:5000/takehome/signin', {
            params: {
                email: emailId,
                password: password
            }
        }).then((response) => {
            if (response.status === 200) {
                navigation.navigate('Home')
            }
        })
        .catch(error => {
            if (error.code === 'ERR_BAD_REQUEST') {
                Toast.show("Invalid Credentials", Toast.SHORT)
            }
            else {
                Toast.show("Something went wrong", Toast.SHORT)
            }
            
        })
    }

    return <View style={{flex: 1, display: 'flex', backgroundColor: '#FFFFFF'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Image source={CipraLogo} style={{width: 250, height: 75, objectFit: 'fill'}} />
        </View>
        <View style={{flex: 3, alignItems: 'center', paddingTop: 20}}>
            <Text style={{fontWeight: '700', fontSize: 23, color: '#000000'}}>Sign In</Text>

            <View style={{ paddingLeft: 20, paddingRight: 20, marginTop: 50, alignItems: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '80%',}}>
                    <Image source={emailId.length > 0 ? Avatar : AvatarOutlined} style={{width: 20, height: 20}} />
                    <TextInput placeholder="Email" style={{ borderRadius: 10, borderStyle: 'solid', borderWidth: 1, borderColor: '#333333', marginLeft: 20, width: '100%', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }} value={emailId} onChangeText={updateEmailId}/>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center', width: '80%', marginTop: 30 }}>
                    <Image source={password.length > 0 ? KeyFilled : KeyOutline} style={{width: 20, height: 20}} />
                    <TextInput placeholder="Password" style={{ borderRadius: 10, borderStyle: 'solid', borderWidth: 1, borderColor: '#333333', marginLeft: 20, width: '100%', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }} value={password} onChangeText={updatePassword} secureTextEntry/>
                </View>

                <TouchableOpacity style={{marginTop: 30, paddingLeft: 20, paddingRight: 20, backgroundColor: '#3655a6', paddingTop: 5, paddingBottom: 8, borderRadius: 8 }} onPress={onSubmit}>
                    <Text style={{color: '#FFFFFF'}}>Sign In</Text>
                </TouchableOpacity>

            </View>
        </View>
        
    </View>
}

export default Login;