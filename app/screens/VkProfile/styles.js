import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#C7FCEC',
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  textarea: {
    textAlignVertical: 'top', // hack android
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 10,
    marginBottom: 30,
  },
  vkPhoto: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  },
  vkUserData: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    height: 90,
  },
  vkEditButton: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'lowercase',
    height: 40,
  },
  profilSettingsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
  },
  profilInfoWrapper: {
    flex: 1,
    width: '90%',
    alignItems: 'flex-start',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,
  },
  photoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  newPostInput: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomToolBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default styles;
