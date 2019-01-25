import Signup2 from '../../../rekurn-generator/templates/components/signup2'
import React, { Component } from 'react'
import { View , TouchableOpacity } from 'react-native'
import {Text} from 'native-base'

class Example extends Component {
    state = {
        name: '',
        email: '',
        password:'',
        confirmPassword:''
    }
    // handleChange = (field) => (value) => {
    //     this.setState({[field]: value})
    // }

    static navigationOptions = {
        header: null
    }

    render() {
        const option = {
            image: {
                url: 'https://i.ibb.co/TBzjW9h/circle-2x.png',
                height: 150,
                width: 150
            },
            header:{
                name:'Registration',
                color:'#FAFEFE'
            },
            field1: {
                label: 'Name',
                onChangeText: (val) => {
                    this.setState({
                        name:val
                    })
                }
            },
            field2: {
                label: 'Email',
                onChangeText: (val) => {
                    this.setState({
                        email:val
                    })
                }
            },
            field3: {
                label: 'Password',
                onChangeText: (val) => {
                    this.setState({
                        password:val
                    })
                }
            },
            field4: {
                label: 'Confirm Password',
                onChangeText: (val) => {
                    this.setState({
                        confirmPassword:val
                    })
                }
            },
            btnSubmit: {
                label: 'SIGN UP',
                onPress:()=>{
                    alert('SIGN UP')
                }
            },
            custom: (
                <View style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Text style={{color:'#FAFEFE'}}>Alredy have an account ?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signin1')}>
                        <Text
                            style={{
                            fontWeight: 'bold',
                            fontWeight:'bold',
                            color:'#FAFEFE'
                        }}> Sign In Now</Text>
                    </TouchableOpacity>
                </View>
        
            )
        }

        return (<Signup2 {...option} />)
    }
}

export default Example