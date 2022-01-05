import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, ScrollView} from 'react-native';
import { Text } from '../../Themed';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';

import { itemsReportData } from './itemsReportData';

import ComponentView from './ComponentView';
    
export type ItemContainerProps = {
    text: string,
    description?: string
}

export default function ReportComponent() {
    const colorScheme = useColorScheme()


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 20, marginBottom: 15, alignSelf: 'center', fontFamily: 'RedHatDisplay-Bold'}}>Report</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text  style={{fontSize: 16, marginBottom: 10, fontFamily: 'RedHatDisplay-Medium'}}>
                    Why are you reporting this moment?
                </Text>
                <Text style={{fontSize: 14, marginBottom: 20, color: Colors[colorScheme].username, fontFamily: 'RedHatDisplay-Regular'}}>
                    Your report is anonymous, it will be evaluated and if it violates the terms of use it will be permanently excluded.
                    If someone is in immediate danger, call your local emergency service.
                </Text>
            </View>
            
            
            <View style={styles.containerOptions}>
                <FlatList
                style={{width: 350}}
                    showsVerticalScrollIndicator={true}
                    data={itemsReportData}
                    renderItem={({item})=> <ComponentView text={item.text} description={item.description}/>}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#00000020'
    },
    descriptionContainer: {
        marginTop: 20
    },
    containerOptions: {
        alignSelf: 'flex-start',
    },
    textContainer: {
        marginTop: 25,
    },
    iconContainer: {
        marginRight: 10,
        
    },
    text: {
        fontSize: 16,
    }
});