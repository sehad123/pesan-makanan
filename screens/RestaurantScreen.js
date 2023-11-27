/* eslint-disable prettier/prettier */
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import * as Icon from 'react-native-feather';

import {useRoute, useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/CartIcon';
import {setRestaurant} from '../slices/restaurantSlice';
// import { Image } from 'react-native-svg';
const RestaurantScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item = params;
  const dispatch = useDispatch();

  useEffect(() => {
    if (item && item.id) {
      dispatch(setRestaurant({...item}));
    }
  });
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
          className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            {/* copy this code from restaurant card */}
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require('../assets/images/fullStar.png')}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700">{item.stars}</Text>
                  <Text className="text-gray-700"> (4.6k review)</Text> ·{' '}
                  <Text className="font-semibold text-gray-700">
                    {item.category}
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width={15} height={15} />
                <Text className="text-gray-800 text-xs">
                  {' '}
                  Nearby · {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow
              item={{...dish}}
              key={index}
              // key={dish._id}
              // id={dish._id}
              // name={dish.name}
              // description={dish.description}
              // price={dish.price}
              // image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
