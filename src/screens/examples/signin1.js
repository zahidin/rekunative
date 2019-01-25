import Signin1 from '../../../rekurn-generator/templates/components/signin1'
import React, { Component } from 'react'
import { View , TouchableOpacity } from 'react-native'
import { Text } from 'native-base'

class Example extends Component{
    
    state = {
        email: '',
        password: ''
    }

    // handleChange = (field) => (value) => {
    //     this.setState({
    //         [field]:value
    //     })
    // }

    static navigationOptions = {
        header: null,
    }
    
    render(){

        const option = {
            image:{
                url:'https://i.ibb.co/TBzjW9h/circle-2x.png',
                height:190,
                width:190
            },
            socmed1:{
                name:'twitter',
                color:'#3741A8',
                onPress:() =>{
                    alert('twitter')
                }
            },
            socmed2:{
                name:'google',
                color:'#3741A8',
                onPress:() =>{
                    alert('google')
                }
            },
            socmed3:{
                name:'facebook',
                color:'#3741A8',
                onPress:() =>{
                    alert('facebook')
                }
            },
            field1:{
                label:'Email',
                onChangeText: (val) => {
                    this.setState({
                        email:val
                    })   
                }
            },
            field2:{
                label:'Password',
                onChangeText: (val) => {
                    this.setState({
                        password:val
                    })   
                }
            },
            btnSubmit:{
                label:'LOGIN',
                onPress:() =>{
                    alert('LOGIN')
                }
            },
            custom:(
                 <View style={{
                    flexDirection: 'row',
                    alignItems:'center',
                    justifyContent:'center',
                }}>
                    <Text>Dont't have an account ?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Signup2')}>
                        <Text
                            style={{
                            fontWeight: 'bold',
                            color: 'black',
                            fontWeight:'bold'
                        }}> Sign up now</Text>
                    </TouchableOpacity>
                </View>
            )
        } 
        
        return(
            <Signin1 {...option}/>
        )
    }
}
 
export default Example