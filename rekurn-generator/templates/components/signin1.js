import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import {
    Container,
    Input,
    Form,
    Content,
    Item,
    Button,
    Text,
    Icon,
    Grid,
    Row,
    Col,
} from 'native-base'

export default class Signin1 extends Component {

    render() {
        const {
            image,
            socmed1,
            socmed2,
            socmed3,
            field1,
            field2,
            btnSubmit,
            custom
        } = this.props
        return (
            <Container>
                <Content style={styles.content}>
                    <Grid>
                        <Row>
                            <Col
                                style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={[
                                    styles.image, {
                                        height: image.height,
                                        width: image.width,
                                        marginTop: '15%'
                                    }
                                ]}
                                    source={{
                                    uri: image.url || 'https://i.ibb.co/TBzjW9h/circle-2x.png'
                                }}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={styles.viewBtnSosmed}>
                                <Button rounded bordered style={styles.btnSosmed} onPress={socmed1.onPress}>
                                    <Icon name={socmed1.name || 'twitter'} type='FontAwesome'/>
                                </Button>
                                <Button rounded bordered style={styles.btnSosmed} onPress={socmed2.onPress}>
                                    <Icon name={socmed2.name || 'google'} type='FontAwesome'/>
                                </Button>
                                <Button
                                    rounded
                                    bordered
                                    style={[
                                    styles.btnSosmed, {
                                        marginRight: 0
                                    }
                                ]}>
                                    <Icon name={socmed3.name || 'facebook'} type='FontAwesome' onPress={socmed3.onPress}/>
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Item rounded style={styles.itemForm}>
                                        <Input
                                            placeholder={field1.label || 'Email'}
                                            style={styles.input}
                                            onChangeText={field1.onChangeText}/>
                                    </Item>
                                    <Item rounded style={styles.itemForm}>
                                        <Input
                                            placeholder={field2.label || 'Password'}
                                            style={styles.input}
                                            secureTextEntry={true}
                                            onChangeText={field2.onChangeText}/>
                                    </Item>
                                    <LinearGradient
                                        start={{
                                        x: 0,
                                        y: 0
                                    }}
                                        end={{
                                        x: 1,
                                        y: 0
                                    }}
                                        colors={['#46b6fb', '#2B79C9']}
                                        style={styles.linearGradient}>
                                        <Button block style={styles.btnSubmit} onPress={btnSubmit.onPress}>
                                            <Text style={styles.txtBtnSubmit}>{btnSubmit.label || 'LOGIN'}</Text>
                                        </Button>
                                    </LinearGradient>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{flexDirection:'column',justifyContent: 'space-between'}}>
                                {custom}
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        marginBottom: 20
    },
    content: {
        flex: 1,
        paddingRight: 30,
        paddingLeft: 30
    },
    itemForm: {
        fontSize: 14,
        marginBottom: 17,
        paddingLeft:15,
		paddingRight:15,
    },
    btnSubmit: {
        borderRadius: 30,
        elevation: 0,
        height: 55,
        backgroundColor: 'transparent'
    },
    linearGradient: {
        marginBottom: 30,
        width: '100%',
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtnSubmit: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    input: {
        padding: 9,
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 50
    },
    itemCenter: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        elevation: 0,
        overflow: 'hidden'
    },
    txtSignup: {
        fontWeight: 'bold'
    },
    btnSosmed: {
        borderRadius: 50,
        marginBottom: 20,
        marginRight: 20,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -50
    },
    viewBtnSosmed: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    }
});