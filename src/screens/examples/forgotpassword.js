import React, { Component } from 'react';
import ForgotPassword from '../../../rekurn-generator/templates/components/forgotpassword';

class ForgotPasswordExample extends Component {
	static navigationOptions = {
		header: null
	};
	render() {
		return (
			<ForgotPassword
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

export default ForgotPasswordExample;
