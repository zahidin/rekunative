import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'
import {connect} from 'react-redux'

import {todoAll} from '@actions/todo'

class TodoList extends Component {

    componentDidMount(){
        this.props.todoAll()
    }

    render(){
        return (
            <Container>
                <Content>
                    <List>
                        {this.props.todo.results.map(r=>(
                            <ListItem>
                                <Text>{r.id}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
            </Container>
        )        
    }

}

const mapStateToProps = (state)=> state

const mapDispatchToProps = {
    todoAll
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)