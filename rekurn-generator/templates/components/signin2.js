import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, Form, Item, Input, Icon, Button, Grid, Col, Row } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

let ScreenHeight = Dimensions.get('window').height;

class Signin extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<KeyboardAwareScrollView>
				<Grid style={styles.root}>
					<Row style={styles.logoContainer}>
						<Col>
							<Image
								source={this.props.image.url}
								style={[
									styles.logo,
									{
										height: this.props.image.height,
										width: this.props.image.width
									}
								]}
							/>
						</Col>
					</Row>
					<Row style={styles.formContainer}>
						<Col>
							<Form>
								<Item regular last style={styles.input} bordered>
									<Input
										placeholder={this.props.field1.label}
										onChangeText={this.props.field1.onChangeText}
									/>
								</Item>
								<Item regular last style={styles.input} bordered>
									<Input
										placeholder={this.props.field2.label}
										onChangeText={this.props.field2.onChangeText}
									/>
								</Item>
								<LinearGradient
									colors={[ '#2B93E8', '#1959A1' ]}
									start={{ x: 0, y: 0 }}
									end={{ x: 1, y: 0 }}
									style={styles.gradient}
								>
									<Button
										full
										style={{
											elevation: 0,
											backgroundColor: 'transparent'
										}}
										onPress={this.props.btnSubmit.onSubmit}
									>
										<Text>{this.props.btnSubmit.label}</Text>
									</Button>
								</LinearGradient>
							</Form>
							<Row style={styles.socialContainer}>
								<Button
									rounded
									transparent
									style={styles.social}
									onPress={this.props.socmed1.onPress}
								>
									<Icon
										name={this.props.socmed1.name}
										type='FontAwesome'
									/>
								</Button>
								<Button
									rounded
									transparent
									style={styles.social}
									onPress={this.props.socmed2.onPress}
								>
									<Icon
										name={this.props.socmed2.name}
										type='FontAwesome'
									/>
								</Button>
								<Button
									rounded
									transparent
									style={styles.social}
									onPress={this.props.socmed3.onPress}
								>
									<Icon
										name={this.props.socmed3.name}
										type='FontAwesome'
									/>
								</Button>
							</Row>
							<Row style={styles.bottomTextContainer}>
								<Text>Don't have an account?</Text>
								<Button style={styles.buttonText} transparent small>
									<Text style={styles.signupText}> Sign up now</Text>
								</Button>
							</Row>
						</Col>
					</Row>
				</Grid>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		height: ScreenHeight - 30
	},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: '70%',
		alignSelf: 'center',
		height: 60
	},
	ana: {
		width: 80,
		height: 80,
		alignSelf: 'center'
	},
	formContainer: {
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	input: {
		borderRadius: 40,
		marginBottom: 20,
		height: 60,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2
	},
	button: {
		marginBottom: 20,
		borderRadius: 40,
		height: 60
	},
	gradient: {
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		marginBottom: 15,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 3
	},
	text: {
		fontSize: 20,
		color: '#fff'
	},
	socialContainer: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginBottom: 20
	},
	social: {
		color: '#2784D6',
		borderRadius: 60,
		height: 60,
		width: 60,
		borderWidth: 1,
		borderColor: '#2784D6',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomTextContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	signupText: {
		fontWeight: 'bold',
		color: '#000'
	},
	buttonText: {
		alignSelf: 'center',
		paddingHorizontal: 0,
		marginLeft: 0
	}
});

export default Signin;
