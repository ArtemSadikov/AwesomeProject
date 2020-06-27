import styles from './styles';
import * as React from 'react';
import {View, Button, TextInput} from 'react-native';

const API_KEY = 'AIzaSyBODGwMpcUqgppEod5PVlcqU2qrPadjhkA';

/**
 * @param {string} mainText 'Привет'
 * @param {string} fromLang 'ru'
 * @param {string} toLang 'en'
 */

function createUrl(mainText, fromLang, toLang) {
  let url =
    'https://translation.googleapis.com/language/translate/v2?key=' + API_KEY;

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
    this.state = {textToTranslate: '', translated: ''};
    this.translateTextButton = this.translateTextButton.bind(this);
  }

  onChangeText = (event = {}) => {
    console.log(event);
    this.setState({
      textToTranslate: event,
    });
  };

  translateTextButton() {
    let url = createUrl(this.state.textToTranslate, 'ru', 'en');

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;UTF-8',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          translated: data.data.translations[0].translatedText,
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
            placeholder={'Введите текст сюда'}
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
            placeholder={'Здесь будет переведенный текст'}
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

export default TranslationApp;
