import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text} from 'native-base'
import {connect} from 'react-redux'

import {allTodos} from '../_redux/actions/todo'

class TodoList extends Component {

    componentDidMount(){
        this.props.allTodos()
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
    allTodos
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)