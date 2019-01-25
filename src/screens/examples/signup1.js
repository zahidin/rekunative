import Signup1 from '../../../rekurn-generator/templates/components/signup1'
import React, {Component} from 'react'
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'native-base'

const option = {
    image:{
        url:'https://i.ibb.co/TBzjW9h/circle-2x.png',
        width: 150,
        height:150,
        marginTop:30,
        marginBottom:5,
        alignSelf: 'center'
    },
    field:{
        name:'Name',
        email:'Email',
        password1:'Password',
        password2:'Confirm Password'
    },
    btnSignUp:{
        label:'Sign Up',
        color1:'#46b6fb',
        color2:'#2B79C9',
        onPress:() =>{
            alert('Register')
        }
    },
    txtTitle:{
        label:'Registration'
    },
    customInfo:(
        <View style={{
            flexDirection: 'row',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity  onPress={()=>alert('Login')}>
                <Text 
                    style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontWeight:'bold'
                }}> Sign in now</Text>
            </TouchableOpacity>
        </View>
    )
} 

class Example extends Component{
    state = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }
    handleChange = (field) => (value) => {
        this.setState({
            [field]:value
        })
    }

    static navigationOptions = {
        header: null,
    }
    
    render(){
        return(
            <Signup1 {...option} handleChange={this.handleChange}/>
        )
    }
}
 
export default Example