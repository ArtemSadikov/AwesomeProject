import styles from './styles';
import Post from '../../components/Post/';

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageViewer from 'react-native-image-zoom-viewer';

const IMAGES = [
  {
    url: '',
    props: {
      source: require('../../resources/images/vk-images/vk-dog-dark.jpg'),
    }
  },
  {
    url: '',
    props: {
      source: require('../../resources/images/vk-images/vk-dog-dark.jpg'),
    }
  },
];

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

class BottomToolBarItem extends React.Component {
  render() {
    return (
      <Icon.Button name={this.props.iconName} size={30} color={this.props.color} backgroundColor={'white'} style={{alignItems: 'center'}}/>
    );
  }
}

class VkPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showImageViewer: false,
    }
  }

  renderPost(params) {
    return (
      <Post
        image={params.image}
        name={params.name}
        date={params.date}
        content={params.content}
        activity={params.activity}
        views={params.views}
      />
    );
  }

  handleImageViewer() {
    this.setState({
      showImageViewer: this.state.showImageViewer ? false : true,
    })
  }

  render() {
    const photos = [
      require('../../resources/images/vk-images/vk-dog-dark.jpg'),
      require('../../resources/images/vk-images/vk-dog.png')
    ];

    const posts = [
      {
        image: photos[0],
        name: "Artem Sadikov",
        date: "14 June 2020",
        content: "Something new!",
        activity: {
          likes:1,
          comments: 2,
          shares: 3
        },
        views: 123
      },
    ];

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
              <Modal visible={this.state.showImageViewer} transparent={true}>
                <ImageViewer imageUrls={IMAGES} enableSwipeDown={true} onSwipeDown={() => this.handleImageViewer()}/>
              </Modal>
                <TouchableOpacity onPressIn={() => this.handleImageViewer()}>
                  <View style={[styles.photoRow, {marginBottom: 5}]}>
                      <UserPhoto photo={photos[0]}/>
                      <UserPhoto photo={photos[0]}/>
                      <UserPhoto photo={photos[0]}/>
                  </View>
                  <View style={[styles.photoRow, {marginBottom: 10}]}>
                    <UserPhoto photo={photos[0]}/>
                    <UserPhoto photo={photos[0]}/>
                    <UserPhoto photo={photos[0]}/>
                  </View>
                </TouchableOpacity>
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
            {this.renderPost(posts[0])}
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
