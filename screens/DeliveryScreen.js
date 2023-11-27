/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import {selectResturant} from '../slices/resturantSlice';
import MapView, {Marker} from 'react-native-maps';
import {themeColors} from '../theme';
import * as Icon from 'react-native-feather';
import {featured} from '../constant';
import {selectRestaurant} from '../slices/restaurantSlice';
import {emptyBasket} from '../slices/cartSlice';
// import {emptyBasket} from '../slices/basketSlice';

export default function DeliveryScreen() {
  const resturant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cancelOrder = () => {
    dispatch(emptyBasket());
    navigation.navigate('Home');
  };
  // const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1">
      {/* <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard">
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.title}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView> */}
      <Image
        className="h-[500px] w-[500px]"
        source={require('../assets/images/map.jpeg')}
      />
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <TouchableOpacity className="absolute right-4 top-2"></TouchableOpacity>
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Perkiraan sampai
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold">
              Pesanan anda sedang di jalan
            </Text>
          </View>
          <Image
            className="h-24 w-24 rounded-3xl"
            source={require('../assets/images/sehad.jpeg')}
          />
        </View>

        <View
          style={{backgroundColor: themeColors.bgColor(0.8)}}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
          <View
            style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
            className="p-1 rounded-full">
            <Image
              style={{backgroundColor: 'rgba(255,255,255,0.4)'}}
              className="w-16 h-16 rounded-full"
              source={require('../assets/images/sehad.jpeg')}
            />
          </View>

          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Sehad</Text>
            <Text className="text-white font-semibold">AB 1234 AB</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth="1"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={cancelOrder}
              className="bg-white p-2 rounded-full">
              <Icon.X stroke={'red'} strokeWidth="5" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
