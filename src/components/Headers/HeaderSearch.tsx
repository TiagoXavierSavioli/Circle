import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

import {Icon} from 'react-native-elements'

export default function HeaderSearch() {
    const colorScheme = useColorScheme();

    function HeaderIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
        return <Icon size={30} style={{ marginBottom: -3 }} {...props}/>;
    }
    return(
        <View style={styles.container}>
            <Pressable style={styles.iconContainer}>
                <HeaderIcon name="ios-funnel-outline" color={Colors[colorScheme].icons}/>
            </Pressable>
            
            
            
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        marginRight: 22
    }
});