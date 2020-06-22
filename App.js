/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle, HeaderStyleInterpolators } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * @param {string} mainText 'Привет'
 * @param {string} fromLang 'ru'
 * @param {string} toLang 'en'
 */

function createUrl(mainText, fromLang, toLang) {
  let url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyBODGwMpcUqgppEod5PVlcqU2qrPadjhkA`;

  url += `&q=${encodeURI(mainText)}`;
  url += `&source=${fromLang}`;
  url += `&target=${toLang}`;

  return url;
}

// TODO: Implement share states of textareas
// TODO: Add loading at translation textarea

class TranslationApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textToTranslate: '', translated: ''}
    this.translateTextButton = this.translateTextButton.bind(this);
  }

  onChangeText = (event = {}) => {
    console.log(event)
    this.setState({
      textToTranslate: event
    })
  }

  translateTextButton() {
    let url = createUrl(this.state.textToTranslate, 'ru', 'en');

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;UTF-8",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          translated: data.data.translations[0].translatedText
        });
      });
  }

  render() {
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.textareaContainer}>
          <TextInput
            style={styles.textarea}
            multiline
            editable
            numberOfLines={4}
            placeholder={"Введите текст сюда"}
            onChangeText={this.onChangeText}
            value={this.state.textToTranslate}
          />
        </View>
        <View style={styles.translateButton}>
          <Button 
            style={styles.translateButton}
            title="Перевести текст"
            color="darkgreen"
            onPress={this.translateTextButton}
          />
        </View>
        <View style={styles.textareaContainer}>
          <TextInput
            style={styles.textarea}
            multiline
            editable={false}
            numberOfLines={4}
            placeholder={"Здесь будет переведенный текст"}
            value={this.state.translated}
          />
        </View>
        <Button
          title="go to vk"
          onPress={() => navigation.navigate('VkPage')}
        />
      </View>
    );
  }
}

class UserData extends React.Component {
  render() {
    return (
      <>
        
      </>
    );
  }
}

class VkHeader extends React.Component {
  render() {
    return (
      <View style={styles.vkHeader}>
        <View style={styles.vkPhoto}>
          <Image 
            source={require('./src/vk-dog-dark.jpg')}
            style={{height: 100, width: 100}}
          />
        </View>
        <View style={styles.vkUserData}>
          <Text style={{fontSize: 20, fontWeight: "bold"}}>Artem Sadikov</Text>
          <Text style={{fontSize: 15}}>Creating Visuals</Text>
          <Text style={{color: "grey"}}>online</Text>
        </View>
      </View>
    );
  }
}

class EditButton extends React.Component {
  render() {
    return (
      // TODO: add icons
      <TouchableOpacity>
        <Text style={{fontSize: 13, color: 'dodgerblue', fontWeight: 'bold'}} >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ProfileInfoButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{marginBottom: 10}}>
        <Text style={{
          fontSize: 14,
          color: this.props.color,
          fontWeight: this.props.fontWeight
        }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class UserPhoto extends React.Component {
  render() {
    return (
      <Image 
        style={{width: 100, height: 100}}
        source={this.props.photo}
      />
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', alignItems: 'center', marginBottom: 10, paddingTop: 10}}>
        <View style={{width: '90%'}}>

          <View style={{marginBottom: 10, flexDirection: "row", alignItems: 'center'}}>
            <Image source={require('./src/vk-dog-dark.jpg')} style={{marginRight: 10, width: 45, height: 45, borderRadius: 22.5}}/>
            <View>
              <Text style={{fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'}}>Artem Sadikov</Text>
              <Text style={{fontSize: 12, color: 'gray'}}>{this.props.data}</Text>
            </View>
          </View>

          <View style={{marginBottom: 10}}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <View style={{width: '60%', flexDirection: "row", justifyContent: 'space-evenly'}}>
              <TouchableOpacity>
                <Text style={{color: 'gray'}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: 'gray'}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: 'gray'}}>27</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'gray'}}>
              2K
            </Text>
          </View>

        </View>
      </View>
    );
  }
}

class VKPage extends React.Component {
  render() {
    return (
      <>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: "center", backgroundColor: 'white', marginBottom: 20}}>
            {/* user data gets from database and parametrs in vkHeader */}
            <VkHeader />
            <TouchableOpacity style={styles.vkEditButton}>
              <Text style={{fontSize: 15, color: 'dodgerblue'}}>Редактировать</Text>
            </TouchableOpacity>
            <View style={styles.profilSettingsWrapper}>
              <EditButton text="История" />
              <EditButton text="Запись"/>
              <EditButton text="Фото"/>
              <EditButton text="Трансляция"/>
            </View>
            <View style={styles.profilInfoWrapper}>
              <ProfileInfoButton text="Город: Нижний Новгород" color="gray" fontWeight="100"/>
              <ProfileInfoButton text="Место работы: безработный" color="gray" fontWeight="100"/>
              <ProfileInfoButton text="30 подписчиков" color="gray" fontWeight="100"/>
              <ProfileInfoButton text="Подробная информация" color="dodgerblue" fontWeight="bold"/>
            </View>

            <View style={{width: '90%'}}>
              {/* TODO: arrow-icon */}
              <TouchableOpacity style={{marginBottom: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '40%'}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>ФОТОГРАФИИ</Text>
                  <Text>23</Text>
                </View>
              </TouchableOpacity>
              <View style={{width: "100%", alignContent: 'center'}}>
                <View style={[styles.photoRow, {marginBottom: 5}]}>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                </View>
                <View style={[styles.photoRow, {marginBottom: 10}]}>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('./src/vk-dog-dark.jpg')}/>
                </View>
              </View>
            </View>

          </View>

          <View style={{marginBottom: 20}}>
            <View style={styles.newPostInput}>
              <Image source={require('./src/vk-dog-dark.jpg')} style={{width: 45, height: 45, borderRadius: 22.5}}/>
              <TextInput
                placeholder="Что у Вас нового?"
                style={{width: '60%', backgroundColor: 'whitesmoke', borderRadius: 10, height: 40}}
              />
              <Button title="d"/>
            </View>
          </View>
          
          <View>
            <View style={{alignItems: "center", backgroundColor: 'white', width: '100%'}}>
              <View style={{
                width: '90%',
                height: 60,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderBottomColor: 'whitesmoke',
                borderBottomWidth: 1,
                // marginBottom: 20,
              }}>
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'black',
                  borderBottomColor: 'dodgerblue',
                  borderBottomWidth: 2,
                  paddingBottom: 5
                }}>Все записи</Text>
                <Text style={{fontSize: 16, color: 'lightgray'}}>Мои записи</Text>
                <Text style={{fontSize: 16, color: 'lightgray'}}>Архив</Text>
              </View>
            </View>
            <Post data="14 June at 17:06" />
            <Post data="14 June at 17:06" />
            <Post data="14 June at 17:06" />
          </View>
        </ScrollView>
        <View style={{width: '100%', height: 50, backgroundColor: 'white', borderTopColor: 'black', borderTopWidth: 1}}>

        </View>
      </>
    );
  }
}

const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    const navigation = this.props.navigation;

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={TranslationApp} 
          />
          <Stack.Screen
            name='VkPage'
            component={VKPage}
            options={
              {
                headerStyle: {
                  backgroundColor: 'white',
                  shadowColor: 'none'
                }
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#C7FCEC',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: '#333',
  },
  translateButton: {
    marginBottom: 20,
  },
  vkHeader: {
    height: 100,
    width: '100%',
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: 15,
    paddingLeft: 10,
    marginBottom: 30
  },
  vkPhoto: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10
  },
  vkUserData: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 10,
    height: 90
  },
  vkEditButton: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: "whitesmoke",
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'lowercase',
    height: 40,
    marginBottom: 10
  },
  profilSettingsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    paddingTop: 50,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1
  },
  profilInfoWrapper: {
    flex: 1,
    width: '90%',
    alignItems: 'flex-start',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10
  },
  photoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  newPostInput: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;
