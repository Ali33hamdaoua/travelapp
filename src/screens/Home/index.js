import React, {useState} from 'react';
import { SafeAreaView, View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../components/Categories';
import { useState } from 'react';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Title text="What do" style={{fontWeight: 'normal'}}></Title>
      <Title text="You want to Read ?"></Title>

      <Title text="Explore Our Library"></Title>
      <Categories selectedCategory={selectedCategory} 
                  onCategoryPress = {setSelectedCategory}
                  categories={['All','Drama','Action','Comedy','Police','Adventure','Sport']}></Categories>
    </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
