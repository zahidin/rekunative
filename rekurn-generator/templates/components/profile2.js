import React, {Component} from 'react';
import {
    Container, Text, Thumbnail, 
    Button, View, Icon,Content
} from 'native-base';
import {StyleSheet, FlatList, Dimensions} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";

const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
        numberOfElementsLastRow++;
    }

    return data;
};

const numColumns = 3;

export default class Profile2 extends Component {

    renderItem = ({item}) => {
        if (item.empty === true) {
            return <View style={[styles.item, styles.itemInvisible]}/>;
        }
        return (<Thumbnail
            square
            style={styles.item}
            source={{
            uri: item.key
        }}/>);
    };

    state = {
        modalVisible: false
    }

    toggleModal(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        const {profilePicture, profileName, post, followers, following, images, btnPerson, btnMail, androidRippleColor} = this.props
        return (
            <Container>
                <Content>
                    <Grid>
                        <Row style={styles.rowProfilePicture}>
                            <Col style={styles.colIconPerson}>
                                <Button rounded androidRippleColor={androidRippleColor.color} style={styles.btnPerson} onPress={btnPerson.onPress}>
                                    <Icon name={btnPerson.icon} style={styles.iconPerson}/>
                                </Button>
                            </Col>
                            <Col style={styles.colProfilePicture}>
                                <Thumbnail
                                    circle
                                    style={styles.profilePicture}
                                    source={{
                                    uri: profilePicture.url || 'https://i.ibb.co/TBzjW9h/circle-2x.png'
                                }}/>
                            </Col>
                            <Col style={styles.colMail}>
                                <Button rounded androidRippleColor={androidRippleColor.color} style={styles.btnPerson} onPress={btnMail.onPress}>
                                    <Icon name={btnMail.icon} style={styles.btnMail}/>

                                </Button>
                            </Col>

                        </Row>

                        <Row style={styles.rowProfileName}>
                            <Text style={styles.profileName}>{profileName.label || 'Text'}</Text>
                        </Row>

                        <Row style={styles.rowPost}>
                            <Col style={styles.colPost}>
                                <View style={styles.viewPost}>
                                    <Text style={styles.textPost}>
                                        <Text style={styles.textNumPost}>{post.num || '0'}{"\n"}

                                        </Text>
                                        <Text>{post.label}</Text>
                                    </Text>

                                </View>

                            </Col>

                            <Col style={styles.colFollowers}>
                                <View style={styles.viewFollowers}>
                                    <Text style={styles.textFollowers}>
                                        <Text style={styles.textNumFollowers}>{followers.num || '0'}{"\n"}

                                        </Text>
                                        <Text>{followers.label || 'Text'}</Text>
                                    </Text>

                                </View>
                            </Col>
                            <Col style={styles.colFollowing}>
                                <View style={styles.viewFollowing}>
                                    <Text style={styles.textFollowing}>
                                        <Text style={styles.textNumFollowing}>{following.num || '0'}{"\n"}

                                        </Text>
                                        <Text>{following.label || 'Text'}</Text>
                                    </Text>

                                </View>
                            </Col>

                        </Row>
                        <Row style={styles.rowPosts}>
                            <FlatList
                                data={formatData(images, numColumns)}
                                style={styles.container}
                                renderItem={this.renderItem}
                                numColumns={numColumns}
                            />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    profilePicture: {
        width: 100,
        height: 120,
        margin: 19
    },
    profileName: {
        textAlign: 'center',
        width: '100%',
        fontWeight: 'bold',
        fontSize: 25
    },
    container: {
        flex: 1
    },
    item: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions
            .get('window')
            .width / numColumns
    },
    itemInvisible: {
        backgroundColor: 'transparent'
    },
    itemText: {
        color: '#fff'
    },
    rowProfilePicture: {
        backgroundColor: '#fff',
        height: 160
    },
    colIconPerson: {
        backgroundColor: '#fff',
        height: 160
    },
    btnPerson: {
        width: 70,
        height: 70,
        marginTop: 50,
        marginBottom: 40,
        marginLeft: 35,
        backgroundColor: '#f5f5f0'
    },
    iconPerson: {
        paddingLeft: 5,
        color: 'blue',
        fontSize: 35
    },
    colProfilePicture: {
        backgroundColor: '#fff',
        height: 160
    },
    colMail: {
        backgroundColor: '#fff',
        height: 160
    },
    btnMail: {
        paddingLeft: 4,
        color: 'blue',
        fontSize: 35
    },
    rowProfileName: {
        backgroundColor: '#ffffff',
        height: 50
    },
    rowPost: {
        backgroundColor: '#00CE9F',
        borderTopWidth: 0.95,
        height: 100
    },
    colPost: {
        backgroundColor: '#fff'
    },
    viewPost: {
        justifyContent: 'center',
        flex: 1
    },
    textPost: {
        textAlign: 'center'
    },
    textNumPost: {
        fontWeight: "600",
        fontSize: 25
    },
    colFollowers: {
        backgroundColor: '#fff'
    },
    viewFollowers: {
        justifyContent: 'center',
        flex: 1
    },
    textFollowers: {
        textAlign: 'center'
    },
    textNumFollowers: {
        fontWeight: "600",
        fontSize: 25
    },
    colFollowing: {
        backgroundColor: '#fff'
    },
    viewFollowing: {
        justifyContent: 'center',
        flex: 1
    },
    textFollowing: {
        textAlign: 'center'
    },
    textNumFollowing: {
        fontWeight: "600",
        fontSize: 25
    },
    rowPosts: {
        backgroundColor: '#ffff'
    }
});