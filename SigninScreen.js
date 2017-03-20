import React, { Component } from 'react';
import { Container, Form, Header, Item, Input, Label, Text, Title, Content, Footer, FooterTab, DeckSwiper, Card, CardItem, Left, Thumbnail, Button, Right, Body, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';



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
export default class SigninScreen extends Component {
static navigationOptions = {
  header: ({state, setParams }) =>({
    visible: false,
    headerMode: 'none'
  })


};
    render() {
      const { navigate } = this.props.navigation;
        return (
            <Container style={{backgroundColor:'#FFFFFF'}}>



                    <Text style={{fontFamily: 'Lovelo_Line Bold', fontWeight: 'bold', textAlign: 'center', color: '#DE1B1B', fontSize: 49, marginTop: 160, marginBottom: -10}}> MECON</Text>
                    <Text style={{fontFamily: 'Roboto', textAlign: 'center', color: '#DE1B1B', fontSize: 25, marginTop: 0}}> P R O J E C T M A N A G E R </Text>


                <Container>
                  <View>
                    <Form>
                              <Item floatingLabel>
                                  <Label>Username</Label>
                                  <Input />
                              </Item>
                              <Item floatingLabel last>
                                  <Label>Password</Label>
                                  <Input />
                              </Item>
                          </Form>
                </View>
              </Container>


                <Footer>
                    <FooterTab>
                        <Button onPress={() => navigate('Newsfeed')} full style={{backgroundColor: '#DE1B1B'}}>
                            <Text style={{color: '#FFFFFF',fontFamily: 'Lovelo',fontSize: 20}}>SIGN IN</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
