import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR, SECUNDARY_COLOR } from '../../commons/constantsColor';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalCar } from './components/ModalCar';
import { styles } from '../../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';


export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}


export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

export const HomeScreen = () => {

const navegation=useNavigation();

    const products: Product[] = [
        { id: 1, name: 'GtaV', price: 50, stock: 5, pathImage: 'https://storegamesecuador.com/files/images/productos/1474351766-gta-5-ps3-chile.jpg' },
        { id: 2, name: 'God Of War', price: 40, stock: 7, pathImage: 'https://juegodigitalecuador.com/files/images/productos/1655484530-god-of-war-ragnarok-ps5-pre-orden-0.jpg' },
        { id: 3, name: 'Minecraft', price: 60, stock: 0, pathImage: 'https://m.media-amazon.com/images/I/81gN4gl9MzL._SL1500_.jpg' },
        { id: 4, name: 'Dark Souls', price: 80, stock: 4, pathImage: 'https://i5.walmartimages.com/seo/Dark-Souls-Remastered-PlayStation-4_8f8b8ce1-3541-4752-8816-41de8ff0aa6d_1.4a81afa5d6da8a2e92bc778887f0712a.jpeg' },
        { id: 5, name: 'Terraria', price: 60, stock: 8, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVrdey1Ehd7J79145gLVNxwlQR6E9ftldiA&s' },
        { id: 6, name: 'Resident Evil 2', price: 30, stock: 8, pathImage: 'https://juegodigitalecuador.com/files/images/productos/1570463788-resident-evil-2-ps4.png' },
        { id: 7, name: 'Mortal Kombat X', price: 10, stock: 8, pathImage: 'https://i.3djuegos.com/juegos/11039/mortal_kombat_x/fotos/ficha/mortal_kombat_x-2543178.webp' },
        { id: 8, name: 'Lego world', price: 25, stock: 8, pathImage: 'https://juegodigitalecuador.com/files/images/productos/1648593390-lego-worlds-xbox-one-0.jpg' },
    ];


    // Hook useState: manipular el arreglo de productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    // Hook useState: manipular el arreglo del carrito de compras
    const [car, setCar] = useState<Car[]>([]);

    // Hook useState: manipular la visibilidad del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    // Función para actualizar la información del arreglo producto
    const changeStockProduct = (idProduct: number, quantity: number) => {
        // Nuevo arreglo con el stock actualizado
        const updateStock = productsState.map(product =>
            product.id === idProduct
                ? { ...product, stock: product.stock - quantity }
                : product
        );
        // Actualizar productsState
        setProductsState(updateStock);

        // Llamar función agregar carrito
        addProduct(idProduct, quantity);
    };

    // Función agregar los productos al carrito
    const addProduct = (idProduct: number, quantity: number) => {
        const product = productsState.find(product => product.id === idProduct);

        // Controlar si el producto no ha sido encontrado
        if (!product) {
            return;
        }

        // Revisar si el producto ya está en el carrito
        const existingProductIndex = car.findIndex(item => item.id === idProduct);
        if (existingProductIndex > -1) {
            // Si ya existe, actualizar la cantidad
            const updatedCar = [...car];
            updatedCar[existingProductIndex] = {
                ...updatedCar[existingProductIndex],
                totalQuantity: updatedCar[existingProductIndex].totalQuantity + quantity
            };
            setCar(updatedCar);
        } else {
            // Si no existe, agregar nuevo producto
            const newProductCar: Car = {
                id: product.id,
                name: product.name,
                price: product.price,
                totalQuantity: quantity
            };
            setCar([...car, newProductCar]);
        }


    };
    // Función para vaciar el carrito
    const clearCart = () => {
        setCar([]);
    };

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.contentHeaderHome}>
                <TitleComponent title='Nuestro Stock' />
                
                {car.length > 0 && ( // Condicional para mostrar el ícono solo si hay productos en el carrito
                    <View style={{
                        ...styles.iconCard,
                        paddingHorizontal: 33
                    }}>
                    <Text style={styles.textIconCar}>{car.length}</Text>
                    <Icon
                        name='shopping-bag'
                        size={33}
                        color={SECUNDARY_COLOR}
                        onPress={() => setShowModal(!showModal)}
                        />
                </View>
                )}
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
            <ModalCar
                isVisible={showModal}
                car={car}
                setShowModal={() => setShowModal(!showModal)}
                clearCart={clearCart} />
        </View>
    )
}
