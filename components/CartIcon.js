/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {themeColors} from '../theme';
import {selectCartItems, selectCartTotal} from '../slices/cartSlice';
import {selectRestaurant} from '../slices/restaurantSlice';

export default function CartIcon() {
  const restaurant = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();

  if (!cartItems.length) {
    return null; // Perubahan untuk menangani kondisi kosong
  }

  return (
    <View style={{position: 'absolute', bottom: 5, width: '100%', zIndex: 50}}>
      <TouchableOpacity
        style={{
          backgroundColor: themeColors.bgColor(1),
          marginHorizontal: 5,
          borderRadius: 999,
        }}
        onPress={() => navigation.navigate('Cart')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              padding: 20,
              paddingHorizontal: 15,
              borderRadius: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18}}>
              {cartItems.length}
            </Text>
          </View>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
            }}>
            Lihat Keranjang
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: 18,
              marginRight: 10,
            }}>
            Rp {cartTotal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
