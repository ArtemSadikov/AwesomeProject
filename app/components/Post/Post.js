import styles from './styles';

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VkPost extends React.Component {

  render() {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postWidth}>
          <View style={styles.postHeader}>
            <Image 
              source={this.props.image}
              style={styles.postUserImage}/>
            <View>
              <Text style={styles.postUserName}>{this.props.name}</Text>
              <Text style={styles.postDate}>{this.props.date}</Text>
            </View>
          </View>

          <View style={styles.postContent}>
            <Text>{this.props.content}</Text>
          </View>

          <View style={styles.postBottomBar}>
              <View style={styles.postBottomBarPromotion}>
                <TouchableOpacity style={styles.postActive}>
                  <Icon name={'heart-o'} size={20} color={'gray'} />
                  <Text style={styles.postActiveIcon}>{this.props.activity.likes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postActive}>
                  <Icon name={'comment-o'} size={20} color={'gray'} />
                  <Text style={styles.postActiveIcon}>{this.props.activity.comments}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.postActive}>
                  <Icon name={'share'} size={20} color={'gray'}/>
                  <Text style={styles.postActiveIcon}>{this.props.activity.shares}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.postViews}>
                <Icon name={'eye'} size={20} color={'gray'}/>
                <Text style={styles.postViewsIcon}>{this.props.views}</Text>
              </View>
          </View>

        </View>
      </View>
    );
  }
}
