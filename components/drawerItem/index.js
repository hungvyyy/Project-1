import React, { useState } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { COLORS } from '../../contains';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DrawerItemComponent = ({ name, setActive, active }) => {
    const navigation = useNavigation();

    let icon, label;
    switch (name) {
        case 'Home':
            icon = 'home-outline';
            label = "Trang chủ";
            break;
        case 'Coin':
            icon = 'logo-bitcoin';
            label = "Giá coin";
            break;
        case 'Gold':
            icon = 'podium-outline';
            label = "Giá gold";
            break;
        case 'Setting':
            icon = 'settings-outline';
            label = "Cài đặt";
            break;
        default:
            break;
    }

    return (
        <DrawerItem
            focused={active === name}
            activeTintColor={COLORS.primary}
            icon={({ color, size }) => (
                <Ionicons name={icon} size={size} color={color} />
            )}
            label={label}
            onPress={() => {
                setActive(name);
                navigation.navigate(name);
            }}
        />
    );
};

export default DrawerItemComponent;
