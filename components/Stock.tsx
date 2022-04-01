import { useState } from 'react';
import { Text, View } from 'react-native';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState([]);

  const list = products.map((product, index) => <Text key={index}>{ product.name }</Text>);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
    <View>
      <Text style={{color: '#333', fontSize: 24}}>Lagerförteckning</Text>
      <StockList/>
    </View>
  );
}