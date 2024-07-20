import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";




const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList 
        horizontal
        date={categories} 
        style={{marginRight:-32}}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item })=>(
            <TouchableOpacity onPress={() => onCategoryPress()}>
            <Text style={[styles.item, selectedCategory === item ? styles.selectedItem : {}]}>{item}</Text>
            </TouchableOpacity>
        )}>
        </FlatList>
    );
};
export default React.memo(Categories);