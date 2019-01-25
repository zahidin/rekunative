import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import {
    Container,
    Content,
    Input,
    Form,
    Item,
    Button,
    Text,
    Grid,
    Row,
    Col,
    H1
} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

export default class Signup2 extends Component {
    render() {
        const {
            image,
            btnSubmit,
            custom,
            field1,
            field2,
            field3,
            field4
        } = this.props
        return (
            <Container>
                <Content>
                    <Grid style={styles.container}>
                        <Row>
                            <Col
                                style={{
                                alignItems: 'center',
                                marginBottom: 30
                            }}>
                                <Image
                                    style={{
                                    width: image.width,
                                    height: image.height,
                                    marginTop: '10%'
                                }}
                                    source={{
                                    uri: image.url
                                }}/>
                                <H1
                                    style={{
                                    marginTop: 15,
                                    fontWeight: 'bold'
                                }}>Registration</H1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Item rounded style={styles.itemForm}>
                                        <Input placeholder="Name" onChangeText={field1.onChangeText}/>
                                    </Item>
                                    <Item rounded style={styles.itemForm}>
                                        <Input placeholder="Email" onChangeText={field2.onChangeText}/>
                                    </Item>
                                    <Item rounded style={styles.itemForm}>
                                        <Input
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            onChangeText={field3.onChangeText}/>
                                    </Item>
                                    <Item rounded style={styles.itemForm}>
                                        <Input
                                            placeholder="Confirm Password"
                                            secureTextEntry={true}
                                            onChangeText={field4.onChangeText}/>
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
                                            <Text style={styles.txtBtnSubmit}>{btnSubmit.label}</Text>
                                        </Button>
                                    </LinearGradient>
                                </Form>
                            </Col>
                        </Row>
                        <Row
                            style={{
                            marginTop: -13
                        }}>
                            <Col
                                style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
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
        paddingRight: 30,
        paddingLeft: 30
    },
    btnFooter: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        overflow: 'hidden'
    },
    itemForm: {
        marginBottom: 20,
        shadowOffset: {
            width: 0,
            height: 1
        },
        paddingLeft: 5,
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        paddingLeft: 15,
        paddingRight: 15
    },
    btnSubmit: {
        borderRadius: 30,
        height: 55,
        backgroundColor: 'transparent',
        elevation: 0
    },
    linearGradient: {
        marginBottom: 24,
        width: '100%',
        borderRadius: 50,
        marginTop: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 3
    },
    txtBtnSubmit: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    itemCenter: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        elevation: 0,
        overflow: 'hidden'
    }
})
