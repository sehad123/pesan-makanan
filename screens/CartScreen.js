/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useMemo, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {
//   removeFromBasket,
//   selectBasketItems,
//   selectBasketTotal,
// } from '../slices/basketSlice';
import {selectResturant} from '../slices/resturantSlice';
import {useNavigation} from '@react-navigation/native';
// import {urlFor} from '../sanity';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import {featured} from '../constant';
import {selectRestaurant} from '../slices/restaurantSlice';
import {
  removeFromBasket,
  selectCartItems,
  selectCartTotal,
} from '../slices/cartSlice';

export default function BasketScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  const resturant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  //   const [groupedItems, setGroupedItems] = useState([]);
  //   const basketItems = useSelector(selectBasketItems);
  //   const basketTotal = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState({});
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [cartItems]);

  const dispatch = useDispatch();
  //   const deliveryFee = 2;
  //   useMemo(() => {
  //     const gItems = basketItems.reduce((group, item) => {
  //       if (group[item.id]) {
  //         group[item.id].push(item);
  //       } else {
  //         group[item.id] = [item];
  //       }
  //       return group;
  //     }, {});
  //     setGroupedItems(gItems);
  //     // console.log('items: ',gItems);
  //   }, [basketItems]);

  return (
    <View className=" bg-white flex-1">
      {/* top button */}
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          // style={{backgroundColor: themeColors.bgColor(1)}}
          onPress={navigation.goBack}
          class
          Name="absolute z-10 rounded-full p-1 shadow top-5 left-2">
          <Icon.ArrowLeft
            strokeWidth={4}
            stroke="black"
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>

      {/* delivery time */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className="flex-row px-4 items-center">
        <Image
          source={require('../assets/images/bikeGuy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-bold">
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="bg-white pt-5"
        contentContainerStyle={{
          paddingBottom: 50,
        }}>
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0]; // Ubah agar dish diambil dari items[0]
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
              <Text style={{color: themeColors.text}} className="font-bold">
                {items.length}
              </Text>
              <Image
                style={{width: 50, height: 50}} // Sesuaikan dengan ukuran gambar yang diinginkan
                source={dish.image} // Ubah pemanggilan gambar
              />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">Rp {dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{backgroundColor: themeColors.bgColor(1)}}
                onPress={() => dispatch(removeFromBasket({id: dish.id}))}>
                <Icon.Minus
                  strokeWidth={2}
                  height={20}
                  width={20}
                  stroke="white"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals */}
      <View
        style={{backgroundColor: themeColors.bgColor(0.2)}}
        className=" p-6 px-8 rounded-t-3xl space-y-4">
        {/* <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${20}</Text>
        </View> */}
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Biaya Pengiriman</Text>
          <Text className="text-gray-700">Rp {10000}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-extrabold">Order Total</Text>
          <Text className="font-extrabold">Rp {10000 + cartTotal}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{backgroundColor: themeColors.bgColor(1)}}
            onPress={() => navigation.navigate('PreparingOrder')}
            className="p-3 rounded-full">
            <Text className="text-white text-center font-bold text-lg">
              Pesan Sekarang
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
