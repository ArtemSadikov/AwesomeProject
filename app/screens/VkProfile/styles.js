import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  vkContainer: {
    alignItems: "center",
    backgroundColor: 'white',
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
  vkProfileInfoButtonIcon: {
    marginRight: 10,
  },
  vkHeaderImage: {
    height: 100,
    width: 100,
  },
  vkScroll: {
    flex: 1,
  },
  vkEditButtonText: {
    fontSize: 15,
    color: 'dodgerblue',
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
  vkHeaderUserName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  vkHeaderUserStatus: {
    fontSize: 15,
  },
  profileEditButton: {
    alignItems: 'center',
  },
  profileEditButtonIcon: {
    marginBottom: 5,
  },
  profileEditButtonText: {
    fontSize: 13,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
  profileInfoButton: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfoButtonIcon: {
    marginRight: 10,
  },
  profileInfoButtonText: {
    fontSize: 14
  },
  userPhoto: {
    width: 100,
    height: 100,
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
  vkHeaderUserIsOnline: {
    color: "grey",
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
  vkPhotoWrapper: {
    width: '90%',
  },
  vkPhotoWrapperTouch: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vkPhotoWrapperTouchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    alignItems: 'center',
  },
  vkPhotoWrapperTouchText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vkPhotoGallery: {
    width: "100%",
    alignContent: 'center',
  },
  vkNewPost: {
    marginBottom: 20,
  },
  vkNewPostImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  vkNewPostInput: {
    width: '60%',
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    height: 40,
  },
  vkPostsWrapper: {
    alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
  },
  vkPostsDialog: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
  },
  vkPostsEnteredText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderBottomColor: 'dodgerblue',
    borderBottomWidth: 2,
    paddingBottom: 5
  },
  vkPostsDiologText: {
    fontSize: 16,
    color: 'lightgray',
  }
});

export default styles;
