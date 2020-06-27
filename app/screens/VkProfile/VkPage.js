import styles from './styles';

import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class VkHeader extends React.Component {
  render() {
    return (
      <View style={styles.vkHeader}>
        <View style={styles.vkPhoto}>
          <Image 
            source={require('../../resources/images/vk-images/vk-dog-dark.jpg')}
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
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Icon name={this.props.iconName} size={30} color={'dodgerblue'} style={{marginBottom: 5}}/>
        <Text style={{fontSize: 13, color: 'dodgerblue', fontWeight: 'bold'}} >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ProfileInfoButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{marginBottom: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={this.props.iconName} size={20} style={{marginRight: 10}} color={this.props.color}/>
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
            <Image source={require('../../resources/images/vk-images/vk-dog-dark.jpg')} style={{marginRight: 10, width: 45, height: 45, borderRadius: 22.5}}/>
            <View>
              <Text style={{fontSize: 16, color: 'dodgerblue', fontWeight: 'bold'}}>Artem Sadikov</Text>
              <Text style={{fontSize: 12, color: 'gray'}}>{this.props.data}</Text>
            </View>
          </View>

          <View style={{marginBottom: 10}}>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <View style={{width: '60%', flexDirection: "row", justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.postActive}>
                <Icon name={'heart-o'} size={20} color={'gray'} />
                <Text style={{color: 'gray', fontSize: 14}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postActive}>
                <Icon name={'comment-o'} size={20} color={'gray'} />
                <Text style={{color: 'gray', fontSize: 14}}>27</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.postActive}>
                <Icon name={'share'} size={20} color={'gray'}/>
                <Text style={{color: 'gray', fontSize: 14}}>27</Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 45, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Icon name={'eye'} size={20} color={'gray'}/>
              <Text style={{color: 'gray'}}>
                2K
              </Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

class BottomToolBarItem extends React.Component {
  render() {
    return (
      <Icon.Button name={this.props.iconName} size={30} color={this.props.color} backgroundColor={'white'} style={{alignItems: 'center'}}/>
    );
  }
}

class VkPage extends React.Component {
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
              <EditButton text="История" iconName='camera' />
              <EditButton text="Запись" iconName='pencil' />
              <EditButton text="Фото" iconName='picture-o' />
              <EditButton text="Трансляция" iconName='bullseye' />
            </View>
            <View style={styles.profilInfoWrapper}>
              <ProfileInfoButton iconName='home' text="Город: Нижний Новгород" color="gray" fontWeight="100"/>
              <ProfileInfoButton iconName='building-o' text="Место работы: безработный" color="gray" fontWeight="100"/>
              <ProfileInfoButton iconName='user-o' text="30 подписчиков" color="gray" fontWeight="100"/>
              <ProfileInfoButton iconName='exclamation-circle' text="Подробная информация" color="dodgerblue" fontWeight="bold"/>
            </View>

            <View style={{width: '90%'}}>
              {/* TODO: arrow-icon */}
              <TouchableOpacity style={{marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '40%', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>ФОТОГРАФИИ</Text>
                  <Text>23</Text>
                </View>
                <Icon name={'arrow-right'} size={20} color={'lightgray'}/>
              </TouchableOpacity>
              <View style={{width: "100%", alignContent: 'center'}}>
                <View style={[styles.photoRow, {marginBottom: 5}]}>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                </View>
                <View style={[styles.photoRow, {marginBottom: 10}]}>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                  <UserPhoto photo={require('../../resources/images/vk-images/vk-dog-dark.jpg')}/>
                </View>
              </View>
            </View>

          </View>

          <View style={{marginBottom: 20}}>
            <View style={styles.newPostInput}>
              <Image source={require('../../resources/images/vk-images/vk-dog-dark.jpg')} style={{width: 45, height: 45, borderRadius: 22.5}}/>
              <TextInput
                placeholder="Что у Вас нового?"
                style={{width: '60%', backgroundColor: 'whitesmoke', borderRadius: 10, height: 40}}
              />
              <Icon name={'picture-o'} color={'gray'} size={30} />
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
        <View style={styles.bottomToolBar}>
          <BottomToolBarItem iconName='picture-o' color='gray' />
          <BottomToolBarItem iconName='cubes' color='gray' />
          <BottomToolBarItem iconName='comment-o' color='gray' />
          <BottomToolBarItem iconName='history' color='gray' />
          <BottomToolBarItem iconName='user-circle-o' color='dodgerblue' />
        </View>
      </>
    );
  }
}

export default VkPage;