import React, {Component} from 'react'
import {Container, Content, List, ListItem, Text, Icon, Fab} from 'native-base'
import {connect} from 'react-redux'

import {allTodos, addTodo} from '../_redux/actions/todo'

export class TodoList extends Component {

    static navigationOptions = {
        title: 'Todo',
    }    

    componentDidMount(){
        this.props.allTodos()
    }

    render(){
        return (
            <Container>
                <Content>
                    <List>
                        {this.props.todo.results.map(r=>(
                            <ListItem key={r.id}>
                                <Text>{r.title}</Text>
                            </ListItem>
                        ))}
                    </List>
                </Content>
                <Fab
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate('TodoAdd')}>
                    <Icon name="add" />                    
                </Fab>
            </Container>
        )        
    }

}

const mapStateToProps = ({todo})=> ({
    todo
})

const mapDispatchToProps = {
    allTodos,
    addTodo
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)