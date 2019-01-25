import React, { Component } from 'react';
import FPassword from '../../../rekurn-generator/components/forgotpassword';

class ForgotPassword extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<FPassword
				image={{
					url: { uri: 'https://images.rekeningku.com/icons/safe.png' },
					height: 100,
					width: 100
				}}
				btnSubmit={{
					label: 'SEND',
					onSubmit() {
						console.log('Send');
					}
				}}
				field1={{
					label: 'Email',
					onChangeText(value) {
						console.log(value);
					}
				}}
			/>
		);
	}
}

export default ForgotPassword;
