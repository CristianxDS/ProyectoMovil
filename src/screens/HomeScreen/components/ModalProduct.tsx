import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constantsColor';
import { styles } from '../../../theme/appTheme';

//interface - props
interface Props {
  product: Product;
  isVisible: boolean;
  setShowModal: () => void; 
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
  
  const { width } = useWindowDimensions();
 
  const [quantity, setQuantity] = useState<number>(1);

  
  const handleChangeQuantity = (value: number) => {
    setQuantity(quantity + value)
  }

  
  const handleAddProduct = () => {
    
    changeStockProduct(product.id, quantity);
    
    setQuantity(1);
    
    setShowModal();
  }

  return (
    <Modal visible={isVisible} transparent={true} animationType='fade'>
      <View style={styles.contentPrincipal}>
        <View style={{
          ...styles.contentModal,
          width: width * 0.80
        }}>
          <View style={styles.headerModal}>
            <Text style={styles.titleModal}>{product.name}  -  ${product.price.toFixed(2)}</Text>
            <View style={styles.iconCard}>
              <Icon
                name='cancel'
                size={27}
                color={PRIMARY_COLOR}
                onPress={setShowModal} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={{
                uri: product.pathImage
              }}
              style={styles.imageModal} />
          </View>
          {
            (product.stock === 0)
              ? <Text style={styles.messageStock}>Producto Agotado!</Text>
              : <View>
                <View style={styles.contentQuantity}>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(1)}
                    disabled={quantity === product.stock}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}>+</Text>
                  </TouchableOpacity>
                  <Text style={styles.textQuantity}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => handleChangeQuantity(-1)}
                    disabled={quantity === 1}
                    style={styles.buttonQuantity}>
                    <Text style={styles.textButtonQuantity}>-</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={styles.textQuantity}>
                    Total: ${(product.price * quantity).toFixed(2)}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={handleAddProduct}
                  style={styles.buttonAddCard}>
                  <Text style={styles.textButtonAddCard}>Agregar Carrito</Text>
                </TouchableOpacity>
              </View>
          }
        </View>
      </View>
    </Modal>
  )
}
