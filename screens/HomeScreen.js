/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useLayoutEffect, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
// import Categories from '../components/categories';
// import FeatureRow from '../components/featuredRow';
// import {getFeaturedResturants} from '../api';
import * as Icon from 'react-native-feather';
import {themeColors} from '../theme';
import Categories from '../components/Categories';
import {featured} from '../constant';
import FeatureRow from '../components/FeaturedRow';

export default function HomeScreen() {
  //   const [featuredCategories, setFeaturedCategories] = useState([]);
  //   const navigation = useNavigation();
  //   useLayoutEffect(() => {
  //     navigation.setOptions({headerShown: false});
  //   }, []);
  //   useEffect(() => {
  //     getFeaturedResturants().then(data => {
  //       setFeaturedCategories(data);
  //     });
  //   }, []);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 ">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Book height="25" width="25" stroke="gray" />
          <TextInput
            placeholder="Kantin STIS"
            className="ml-2 flex-1"
            style={{fontWeight: 'bold'}}
            keyboardType="default"
          />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">Jakarta</Text>
          </View>
        </View>
        <View
          style={{backgroundColor: themeColors.bgColor(1)}}
          className="p-3 rounded-full">
          <Icon.Sliders
            height={20}
            width={20}
            strokeWidth="2.5"
            stroke="white"
          />
        </View>
      </View>

      {/* main */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        {/* categoris */}
        <Categories />

        {/* featured */}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeatureRow
                key={index}
                title={item.title}
                resturants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
