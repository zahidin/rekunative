import Profile2 from '../../../rekurn-generator/templates/components/profile2'
import React, {Component} from 'react'
import {Text, Button, Icon, Thumbnail} from 'native-base'

const data = [
    {
        key: 'https://www.samehadaku.tv/wp-content/uploads/2019/01/Tate-no-Yuusha-no-Nariagari' +
                '-Episode-3-Subtitle-Indonesia.jpg'
    }, {
        key: 'https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1481537858.9056_' +
                'aZAvYJ_n.jpg'
    }, {
        key: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpBaSYpLqv-8M51hA3Xr0Cs1B' +
                'CawQHiU502DN9EfiHvPsV7JqMw'
    }, {
        key: 'https://cdn.ndtv.com/tech/images/gadgets/pikachu_hi_pokemon.jpg?output-quality=8' +
                '0'
    }, {
        key: 'https://pokemonletsgo.pokemon.com/assets/img/common/char-eevee.png'
    }, {
        key: 'https://img.rankedboost.com/wp-content/plugins/ice/pokemon/Luxio-Pokemon-Go.png'
    }, {
        key: 'https://static.giantbomb.com/uploads/scale_small/0/6087/2438704-1202149925_t.png'
    }
];

const option = {
    androidRippleColor:{
        color: '#cce6ff'
    },
    btnPerson: {
        icon: 'person',
        onPress:() =>{
            alert('Person')
}
    },
    btnMail: {
        icon: 'mail',
        onPress:() =>{
            alert('Messages')
}
    },
    txtTitle: {
        label: 'Registration'
    },
    profileName: {
        label: 'Carl Jhonson'
    },
    profilePicture: {
        url: 'https://www.samehadaku.tv/wp-content/uploads/2019/01/Tate-no-Yuusha-no-Nariagari-Episode-3-Subtitle-Indonesia.jpg'
    },
    post: {
        num: '86',
        label: 'Posts'
    },
    followers: {
        num: '22.1k',
        label: 'Followers'
    },
    following: {
        num: '212',
        label: 'Following'
    },
}

class Example extends Component {
    state = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }
    handleChange = (field) => (value) => {
        this.setState({[field]: value})
    }

    static navigationOptions = {
        headerTitle: 'USER PROFILE',
        headerLeft: (
            <Button
                transparent
                style={{
                marginTop: 5
            }}
                onPress={() => alert('This is a button!')}>
                <Icon name="arrow-back"></Icon>

            </Button>
        )
    }

    render() {
        return (<Profile2 {...option} image={data} handleChange={this.handleChange}/>)
    }
}

export default Example