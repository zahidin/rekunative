import React, {Component} from 'react'
import {Container, Content, Item, Label, Input, Button, Text} from 'native-base'
import {connect} from 'react-redux'

import {addTodo} from '../_redux/actions/todo'

export class TodoAdd extends Component {

    static navigationOptions = {
        title: 'Add Todo',
    }  

    state = {
        form: {
            title: ""
        }
    }

    handleAdd(){
        if(this.state.form.title == ""){
            alert('Title is Required')
            return
        }            

        this.props.addTodo(this.state.form)
        this.props.navigation.goBack()
    }

    render(){
        return (
            <Container>
                <Content>
                    <Item stackedLabel>
                        <Label>Title</Label>
                        <Input onChangeText={title=> this.setState({form: {title}})}/>
                    </Item>
                    <Button 
                        full 
                        success 
                        onPress={()=> this.handleAdd()}
                    >
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapDispatchToProps = {
    addTodo
}

export default connect(
    null,
    mapDispatchToProps
)(TodoAdd)