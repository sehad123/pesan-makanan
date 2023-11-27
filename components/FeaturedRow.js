/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {themeColors} from '../theme';
import ResturantCard from './RestaurantCard';

export default function FeatureRow({title, description, resturants}) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{title}</Text>
          <Text style={{color: 'gray', fontSize: 12}}>{description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{color: themeColors.text, fontWeight: '600'}}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}>
        {resturants?.map((resturant, index) => (
          <ResturantCard item={resturant} key={index} />
        ))}
      </ScrollView>
    </View>
  );
}
