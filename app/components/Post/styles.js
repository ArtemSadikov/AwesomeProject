import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 10,
  },
  postWidth: {
    width: '90%',
  },
  postHeader: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: 'center',
  },
  postUserImage: {
    marginRight: 10,
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  postUserName: {
    fontSize: 16,
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
  postDate: {
    fontSize: 12,
    color: 'gray',
  },
  postContent: {
    marginBottom: 10,
  },
  postBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postBottomBarPromotion: {
    width: '60%',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  postActive: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 45,
  },
  postActiveIcon: {
    color: 'gray',
    fontSize: 14,
  },
  postViews: {
    width: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postViewsIcon: {
    color: 'gray',
  }
});

export default styles;
