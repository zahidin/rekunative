import Signin1 from '../../../rekurn-generator/templates/components/signin1'
import React, {Component} from 'react'
import {Text} from 'native-base'

const option = {
    image:{
        url:'https://i.ibb.co/TBzjW9h/circle-2x.png',
        height:190,
        width:190
    },
    socmed1:{
        name:'twitter',
        color:'#3741A8'
    },
    socmed2:{
        name:'google',
        color:'#3741A8'
    },
    socmed3:{
        name:'facebook',
        color:'#3741A8'
    },
    field1:{
        label:'Email',
    },
    field2:{
        label:'Password',
    },
    btnSubmit:{
        label:'LOGIN'
    },
    custom:(
        <Text><Text>Dont have an account ? </Text><Text style={{fontWeight:'bold'}}>Sign up now</Text></Text>
    )
} 

class Example extends Component{
    state = {
        username: '',
        password: ''
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
            <Signin1 {...option} handleChange={this.handleChange}/>
        )
    }
}
 
export default Example