import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../commons/constantsColor';
import { ModalProduct } from './ModalProduct';
import { styles } from '../../../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';


interface Props {
    product: Product;
    changeStockProduct: (idProduct: number, quantity: number) => void;
}



export const CardProduct = ({ product, changeStockProduct }: Props) => {

    const navegation = useNavigation();

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.contentCard}>
                <Image
                    source={{
                        uri: product.pathImage
                    }}
                    style={styles.imageCard} />
                <View>
                    <Text style={styles.titleCard}>{product.name}</Text>
                    <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.iconCard}>
                    <Icon
                        name='shopping-cart'
                        size={33}
                        color={PRIMARY_COLOR}
                        onPress={() => setShowModal(!showModal)}
                    />
                </View>

            </View>
            <ModalProduct
                isVisible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                product={product}
                changeStockProduct={changeStockProduct} />
        </View>

    )
}

{  /* onPress={() => setShowModal(!showModal)} />*/}
