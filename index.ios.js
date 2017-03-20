import React, { Component } from 'react';
import { Container, Header, Text, Title, Content, Footer, FooterTab, DeckSwiper, Card, CardItem, Left, Thumbnail, Button, Right, Body, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';
import SigninScreen from './SigninScreen.js';
import Newsfeed from './Newsfeed.js';

import {
  AppRegistry, Image, View
} from 'react-native';
const cards = [
    {
        text: 'EASY ACCESSIBLE',
        name: `Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Vivamus porta interdum
condimentum. Donec blandit vestibulum
sapien, sed tristique libero. Donec blandit
vestibulum sapien, sed tristique libero.`

    },
    {
        text: 'Card Ongge',
        name: 'Ongge'

    }

];
export default class mecon extends Component {
static navigationOptions = {
  header: ({state, setParams }) =>({
    visible: false,
    headerMode: 'none'
  })


};
    render() {
      const { navigate } = this.props.navigation;
        return (
            <Container>

              <Image
                  style={{width: '100%', height: '40%'}}
                  source={require('./m.jpg')}
                >
                    <Text style={{fontFamily: 'Lovelo_Line Bold', fontWeight: 'bold', textAlign: 'center', color: '#DE1B1B', fontSize: 49, marginTop: 160, marginBottom: -10}}> MECON</Text>
                    <Text style={{fontFamily: 'Roboto', textAlign: 'center', color: '#DE1B1B', fontSize: 25, marginTop: 0}}> P R O J E C T M A N A G E R </Text>

                </Image>

                <Container>
                  <View>
                  <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }}>
<Body>
                            <CardItem>

                                <Text >{item.text}</Text>

                            </CardItem>
                        </Body>
                            <CardItem>

                            </CardItem>
                            <CardItem>
                                <Icon name="globe" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                    }>
                  </DeckSwiper>
                </View>
              </Container>


                <Footer>
                    <FooterTab>
                        <Button onPress={() => navigate('Signin')} full style={{backgroundColor: '#DE1B1B'}}>
                            <Text style={{color: '#FFFFFF',fontFamily: 'Lovelo',fontSize: 20}}>SIGN IN</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const Nav = StackNavigator({
  Home: {screen: mecon},
  Signin: {screen: SigninScreen},
  Newsfeed: {screen: Newsfeed},

})




AppRegistry.registerComponent('mecon', () => Nav);
