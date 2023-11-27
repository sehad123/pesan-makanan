/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {categories} from '../constant';
// import {getCategories} from '../api';
// import {urlFor} from '../sanity';
import {themeColors} from '../theme';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  //   const [categories, setCategories] = useState([]);

  return (
    <View className="mt-4">
      <ScrollView
        // className="p-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}>
        {categories.map((category, index) => {
          let isActive = category._id == activeCategory;
          let btnClass = isActive ? ' bg-gray-600' : ' bg-gray-200';
          let textClass = isActive
            ? ' font-semibold text-gray-800'
            : ' text-gray-500';

          return (
            <View key={index} className="flex justify-center items-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={'p-1 rounded-full shadow bg-gray-200' + btnClass}>
                <Image
                  style={{width: 45, height: 45}}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={'text-sm' + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
