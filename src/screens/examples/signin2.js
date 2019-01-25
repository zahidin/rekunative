import React, { Component } from 'react';
import Signin2 from '../../../rekurn-generator/templates/components/signin2';
import { View, Text, TouchableOpacity } from 'react-native';


class Signin2Example extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Signin2
				image={{
					url: { uri: 'https://i.ibb.co/TBzjW9h/circle-2x.png' },
					height: 190,
					width: 190
				}}
				socmed1={{
					name: 'twitter',
					color: '#3741A8',
					onPress() {
						alert('Twitter');
					}
				}}
				socmed2={{
					name: 'google',
					color: '#3741A8',
					onPress() {
						alert('Google');
					}
				}}
				socmed3={{
					name: 'facebook',
					color: '#3741A8',
					onPress() {
						alert('Facebook');
					}
				}}
				field1={{
					label: 'Email',
					onChangeText(value) {
						console.log(value);
					}
				}}
				field2={{
					label: 'Password',
					onChangeText(value) {
						console.log(value);
					}
				}}
				btnSubmit={{
					label: 'LOGIN',
					onSubmit() {
						alert('Signup');
					}
				}}
				custom={
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text>Dont't have an account ?</Text>
						<TouchableOpacity>
							<Text
								style={{
									fontWeight: 'bold',
									color: 'black',
									fontWeight: 'bold'
								}}
							>
								{' '}
								Sign up now
							</Text>
						</TouchableOpacity>
					</View>
				}
			/>
		);
	}
}

export default Signin2Example
