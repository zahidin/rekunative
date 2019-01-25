import React, {Component} from 'react';
import {
    Container,
    Text,
    Button,
    Content,
    Form,
    Item,
    Input,
    Thumbnail
} from 'native-base';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Signup1 extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        const {image, field, customInfo, btnSignUp, txtTitle} = this.props
        return (
            <Container style={styles.container}>
                <Content>
                    <Thumbnail
                        source={{
                        uri: image.url
                    }}
                        style={{
                        width: image.width,
                        height: image.height,
                        marginTop: image.marginTop,
                        marginBottom: image.marginBottom,
                        alignSelf: image.alignSelf
                    }}/>
                    <Text
                        style={{
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        fontSize: 30,
                        marginBottom: 80
                    }}>
                        {txtTitle.label}
                    </Text>
                    <Form>
                        <Item rounded style={styles.input}>
                            <Input placeholder={field.name} style={styles.fontInput} onChangeText={this.props.handleChange('name')}/>
                        </Item>
                        <Item rounded style={styles.input}>
                            <Input placeholder={field.email} style={styles.fontInput} onChangeText={this.props.handleChange('email')}/>
                        </Item>
                        <Item rounded style={styles.input}>
                            <Input placeholder={field.password1} style={styles.fontInput} onChangeText={this.props.handleChange('password1')}/>
                        </Item>
                        <Item rounded style={styles.input}>
                            <Input placeholder={field.password2} style={styles.fontInput} onChangeText={this.props.handleChange('password2')}/>
                        </Item>

                        <LinearGradient
                            colors={[btnSignUp.color1, btnSignUp.color2]}
                            style={styles.linearGradient}
                            start={{
                            x: 1,
                            y: 0
                        }}
                            end={{
                            x: 0,
                            y: 1
                        }}>
                            <Button full rounded style={styles.button} onPress={btnSignUp.onPress}>
                                <Text style={styles.fontButton}>{btnSignUp.label}</Text>
                            </Button>
                        </LinearGradient>
                    </Form>
                    {customInfo}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 20
    },
    button: {
        width: "100%",
        alignSelf: "center",
        padding: 10,
        elevation: 0,
        backgroundColor: "transparent"
    },
    fontInput: {
        fontSize: 20
    },
    fontButton: {
        fontSize: 20
    },
    input: {
        marginBottom: 10,
        marginTop: 5
    },
    container: {
        padding: 10
    }
});