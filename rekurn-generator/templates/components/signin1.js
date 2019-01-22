import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import { Image, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import { Container, Input, Form, Item, Button, Text } from 'native-base'

export default class Signin1 extends Component {

  render() {
    const {image,socmed1,socmed2,socmed3,field1,field2,btnSubmit,field3,custom} = this.props
    return (
      <Container style={styles.content}>
        <View style={styles.container}>
          <Row>
            <Col sm={12} md={12} lg={12} style={{alignItems:'center'}}>
              <Image
                style={{width: image.width, height: image.height, marginTop:'10%'}}
                source={{uri:image.url}} 
              />
            </Col>
          </Row>
          <Row style={{marginTop:40}}>
            <Col sm={12} md={12} lg={12}>
            <View style={styles.viewBtnSosmed}>
                <Button rounded bordered style={styles.btnSosmed}>
                  <Icon name={socmed1.name} size={30} color={socmed1.color} />
                </Button>
                <Button rounded bordered style={styles.btnSosmed}>
                  <Icon name={socmed2.name} size={30} color={socmed2.color} />
                </Button>
                <Button rounded bordered style={[styles.btnSosmed, { marginRight:0 }]}>
                  <Icon name={socmed3.name} size={30} color={socmed3.color} />
                </Button>
            </View>
              <Form>
              <KeyboardAvoidingView behavior="padding" enabled>
                    <Item rounded style={styles.itemForm}>
                        <Input placeholder={field1.label} style={styles.input} onChangeText={this.props.handleChange('username')}/>
                    </Item>
                    <Item rounded style={styles.itemForm}>
                        <Input placeholder={field2.label} style={styles.input} onChangeText={this.props.handleChange('password')}/>
                    </Item>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#46b6fb', '#2B79C9']} style={styles.linearGradient}>
                      <Button block style={styles.btnSubmit}>
                        <Text style={styles.txtLogin}>{btnSubmit.label}</Text>
                      </Button>
                    </LinearGradient>
                </KeyboardAvoidingView>    

                </Form>
                <TouchableOpacity style={styles.itemCenter}>
                    {custom}
                </TouchableOpacity>
            </Col>
          </Row>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  content: {
    paddingRight:10,
    paddingLeft:10,
  },
  itemForm:{
    fontSize:14,
    marginBottom:17
  },
  btnSubmit:{
    borderRadius:30,
    elevation:0,
    height:55,
    backgroundColor:'transparent'
  },
  linearGradient:{
    marginBottom:30,
    width:'100%',
    borderRadius:50,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center',
  },
  txtLogin:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  },
  input:{
    padding:9,
    fontSize:18,
    fontWeight:'bold',
  },
  itemCenter:{
    alignItems:'center'
  },
  txtSignup:{
    fontWeight:'bold'
  },
  btnSosmed:{
    borderRadius:50,
    marginBottom:20,
    marginRight:20,
    height:60,
    width:60,
    justifyContent:'center',
    alignItems:'center'
  },
  viewBtnSosmed:{
    flexDirection:'row',
    justifyContent:'center'
  }
  
});