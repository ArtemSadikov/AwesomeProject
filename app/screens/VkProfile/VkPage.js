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
            style={styles.vkHeaderImage}
          />
        </View>
        <View style={styles.vkUserData}>
          <Text style={styles.vkHeaderUserName}>Artem Sadikov</Text>
          <Text style={styles.vkHeaderUserStatus}>Creating Visuals</Text>
          <Text style={styles.vkHeaderUserIsOnline}>online</Text>
        </View>
      </View>
    );
  }
}

class EditButton extends React.Component {
  render() {
    return (
      // TODO: add icons
      <TouchableOpacity style={styles.profileEditButton}>
        <Icon name={this.props.iconName} size={30} color={'dodgerblue'} style={styles.profileEditButtonIcon}/>
        <Text style={styles.profileEditButtonText} >{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class ProfileInfoButton extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.profileInfoButton}>
        <Icon name={this.props.iconName}
          size={20}
          style={styles.vkProfileInfoButtonIcon} color={this.props.color}/>
        <Text style={[styles.profileInfoButtonText,
              {
                color: this.props.color,
                fontWeight: this.props.fontWeight,
              }
            ]
          }>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

class UserPhoto extends React.Component {
  render() {
    return (
      <Image 
        style={styles.userPhoto}
        source={this.props.photo}
      />
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
        <ScrollView style={styles.vkScroll}>
          <View style={styles.vkContainer}>
            {/* user data gets from database and parametrs in vkHeader */}
            <VkHeader />
            <TouchableOpacity style={styles.vkEditButton}>
              <Text style={styles.vkEditButtonText}>Редактировать</Text>
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

            <View style={styles.vkPhotoWrapper}>
              {/* TODO: arrow-icon */}
              <TouchableOpacity style={styles.vkPhotoWrapperTouch}>
                <View style={styles.vkPhotoWrapperTouchView}>
                  <Text style={styles.vkPhotoWrapperTouchText}>ФОТОГРАФИИ</Text>
                  <Text>23</Text>
                </View>
                <Icon name={'arrow-right'} size={20} color={'lightgray'}/>
              </TouchableOpacity>
              <View style={styles.vkPhotoGallery}>
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

          <View style={styles.vkNewPost}>
            <View style={styles.newPostInput}>
              <Image source={photos[0]} style={styles.vkNewPostImage}/>
              <TextInput
                placeholder="Что у Вас нового?"
                style={styles.vkNewPostInput}
              />
              <Icon name={'picture-o'} color={'gray'} size={30} />
            </View>
          </View>
          
          <View>
            <View style={styles.vkPostsWrapper}>
              <View style={styles.vkPostsDialog}>
                <Text style={styles.vkPostsEnteredText}>Все записи</Text>
                <Text style={styles.vkPostsDiologText}>Мои записи</Text>
                <Text style={styles.vkPostsDiologText}>Архив</Text>
              </View>
            </View>
            {this.renderPost(posts[0])}
          </View>
        </ScrollView>
      </>
    );
  }
}

export default VkPage;
