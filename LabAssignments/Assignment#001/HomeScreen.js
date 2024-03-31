import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const postData = [
  { id: '1', imageUrl: 'https://img.freepik.com/premium-vector/instagram-post-template-laptop-vector-illustration-perfect-social-media-post-frame-illustration_545399-1273.jpg', caption: 'Instagram View using laptop', username: 'tech_things' },
  { id: '2', imageUrl: 'https://i.pinimg.com/736x/9a/d3/42/9ad342e5e98ff84928473c3b68fbf2a9.jpg', caption: 'Lunchtime!', username: 'manana_khan' },

];

const userStories = [
  { id: '1', imageUrl: 'https://i.pinimg.com/736x/f6/c2/0b/f6c20b8a6aae4caeb15816af3b0e0497.jpg', username: 'shehneela_khan' },
  { id: '2', imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/035/657/675/small_2x/ai-generated-endearing-adventures-with-cute-cartoon-animal-babies-photo.jpg', username: 'subhana' },
  { id: '3', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdjLlJS2C2KD-fRoOykz8e5luqOtFFpGo_QQ&usqp=CAU', username: 'manana_ahmed' },
  { id: '4', imageUrl: 'https://i.pinimg.com/736x/5c/7c/80/5c7c8044238a6384d8fd05f94c00bf67.jpg', username: 'farah_khan' },
  { id: '5', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZY_ae1WF9X4ywtmRaBrn5XqLgrsLQCLf3Q&usqp=CAU', username: 'hanana_yousaf' },

];

const HomeScreen = () => {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
      <Text style={styles.postUsername}>{item.username}</Text>
    </View>
  );

  const renderUserStory = ({ item }) => (
    <View style={styles.story}>
      <Image source={{ uri: item.imageUrl }} style={styles.storyImage} />
      <Text style={styles.storyUsername}>{item.username}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' }}
          style={styles.logo}
        />
      </View>
      
      {/* User Stories */}
      <View style={styles.userStories}>
        <FlatList
          horizontal
          data={userStories}
          renderItem={renderUserStory}
          keyExtractor={item => item.id}
        />
      </View>
      
      {/* Posts */}
      <FlatList
        data={postData}
        renderItem={renderPost}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    alignContent:'flex-start',
    height: 60,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  logo: {
    top: 15,
    alignSelf:'flex-start',
    alignContent: 'flex-start',
    width: 150,
    height: 40,
  },
  userStories: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  storyUsername: {
    marginTop: 5,
  },
  post: {
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postCaption: {
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  postUsername: {
    paddingHorizontal: 10,
    color: '#666',
  },
});

export default HomeScreen;
