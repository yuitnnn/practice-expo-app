import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Foundation, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default class Instagram extends React.Component {
  renderItem = (data) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.profBox}>
            <Image
              source={require('../images/profile.jpg')}
              style={styles.profIcon}
            />
            <Text style={styles.profName}>yu_webmemo</Text>
          </View>
        </View>
        <Image
          source={data.item.img}
          style={styles.cardImage}
          resizeMode='cover'
        />
        <View style={styles.detailBox}>
          <View style={styles.detailIconBox}>
            <View style={styles.detailIconLeftBox}>
              <TouchableOpacity>
                <Feather name="heart" size={24} color="#000" />
              </TouchableOpacity> 
              <TouchableOpacity>
                <Feather name="message-circle" size={24} color="#000" />
              </TouchableOpacity> 
              <TouchableOpacity>
                <Ionicons name="ios-paper-plane-outline" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <FontAwesome name="bookmark-o" size={24} color="#000" />
            </TouchableOpacity> 
          </View>
          <Text style={{ fontWeight: 'bold', paddingVertical: 8 }}>「いいね！」 100件</Text>
          <View>
            <Text style={{ marginBottom: 6 }}>
              <Text style={{ fontWeight: 'bold' }}>yu_webmemo　</Text>
              <Text>day2 and day3. インスタグラム風の画面を作ってみました。 ...</Text>
              <Text style={{ color: '#888' }}>続きを読む</Text>
            </Text>
            <Text style={{ marginBottom: 4, color: '#888', fontSize: 12 }}>コメント3件すべてを表示</Text>
            <Text style={{ color: '#888', fontSize: 11 }}>3時間前</Text>
          </View>
        </View>
      </View> 
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="camera" size={26} color="#000" />
          <Ionicons name="ios-paper-plane-outline" size={26} color="#000" />
        </View>
        <View style={styles.contents}>
          <FlatList
            data={[
              { key: '0', img: require('../images/insta/insta_1.jpg') },
              { key: '1', img: require('../images/insta/insta_2.jpg') }
            ]}
            renderItem={this.renderItem}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Foundation name="home" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="search" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="plus-square" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="heart" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../images/profile.jpg')}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 88,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fafafa',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
  },
  contents: {
    flex: 1,
    marginTop: 8,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  profBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profIcon: {
    width: 36,
    height: 36,
    borderRadius: 20,
    marginRight: 10,
  },
  profName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
  },
  cardImage: {
    width: width,
    height: width,
  },
  detailBox: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  detailIconBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailIconLeftBox: {
    width: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    paddingHorizontal: 22,
    paddingBottom: 22,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#e4e4e4',
  },
  footerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
  }
});
