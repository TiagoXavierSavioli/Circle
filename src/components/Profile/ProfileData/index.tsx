import React from "react";
import { Text, Username } from "../../Themed";
import { View, FlatList } from "react-native";
import { ProfileDatas } from "../../../types";
import styles from "./styles";


const ProfileDataComponent = (props: ProfileDatas) => {
    const {points, fans, followings, pointsLength} = props
    const millionPoints = `${points}`.substring(2, 0)
    return (
        <View style={styles.container}>
            <View style={styles.containerNT}>
                <Text style={styles.numbers}>{fans}</Text>
                <Username style={styles.texts}>fans</Username>
            </View>
            <View style={styles.containerNT}>
                {pointsLength > 6?
                    <Text style={styles.numbers}>{millionPoints}M</Text>:
                        <Text style={styles.numbers}>{points}</Text>
                    
                }
                <Username style={styles.texts}>points</Username>
            </View>
            <View style={styles.containerNT}>
                <Text style={styles.numbers}>{`${followings}`}</Text>
                <Username style={styles.texts}>following</Username>
            </View>
            

            
            
        </View>
    )
}

export default ProfileDataComponent