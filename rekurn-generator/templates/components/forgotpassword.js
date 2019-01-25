import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Text, Grid, Row, Col, H1, Item, Input, Form, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

const screenHeight = Dimensions.get('window').height - 30;

class ForgotPassword extends Component {
	render() {
		return (
			<KeyboardAwareScrollView>
				<Grid style={styles.root}>
					<Row>
						<Col style={styles.logoContainer}>
							<Image
								source={this.props.image.url}
								style={
									([ styles.logo, styles.gutterBottom ],
									{
										width: this.props.image.width,
										height: this.props.image.height
									})
								}
							/>
							<H1>Password Recovery</H1>
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
							</Form>
							<Text style={styles.textDescription}>
								Enter your email below to receive your password reset and
								instructions
							</Text>
						</Col>
					</Row>
					<Row style={styles.buttonContainer}>
						<Col>
							<LinearGradient
								colors={[ '#2B93E8', '#1959A1' ]}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								style={styles.gradient}
							>
								<Button
									full
									transparent
									style={{ elevation: 0 }}
									onPress={this.props.btnSubmit.onSubmit}
								>
									<Text style={{ color: 'white' }}>
										{this.props.btnSubmit.label}
									</Text>
								</Button>
							</LinearGradient>
						</Col>
					</Row>
				</Grid>
			</KeyboardAwareScrollView>
		);
	}
}

const styles = StyleSheet.create({
	root: {
		height: screenHeight
	},
	logoContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {},
	formContainer: {
		flex: 1,
		paddingHorizontal: 20,
		alignItems: 'center'
	},
	input: {
		borderRadius: 40,
		marginBottom: 20,
		height: 60
	},
	textDescription: {
		textAlign: 'center',
		color: '#C6C6C6'
	},
	buttonContainer: {
		paddingHorizontal: 20,
		alignItems: 'center'
	},
	button: {
		marginBottom: 20,
		borderRadius: 40,
		height: 60
	},
	gradient: {
		height: 60,
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		color: '#fff'
	},

	// util
	gutterBottom: {
		marginBottom: 20
	}
});

export default ForgotPassword;
