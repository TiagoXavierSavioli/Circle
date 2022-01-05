import React, {useState, useRef, useEffect} from 'react'
import {View, TouchableOpacity, Dimensions, Pressable, FlatList, Text,} from 'react-native'
import styles from './styles'
import RBSheet from "react-native-raw-bottom-sheet"
import {ModalComponentMoment} from './ModalComponentMoment'
import Colors from '../../../../../constants/Colors'
import useColorScheme from '../../../../../hooks/useColorScheme'
import { useNavigation } from '@react-navigation/core'
import LinearGradient from 'react-native-linear-gradient'
import {UserType, MomentsType, StatsType, TagsType} from '../../../../../types'
import Image from 'react-native-fast-image'
import ImageDecoding from '../../../../../helpers/imageDecoding'

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

export type MomentsPreviewCenterProps = {
    moment: UserType,
  }

const MomentsPreviewCenter = ({ moment }: MomentsPreviewCenterProps) => {


    const navigation = useNavigation()
    const refRBSheet = useRef();

    const [momentIndex, setMomentIndex] = useState(0)
    const [moment_index, setMoment_index] = useState(moment[momentIndex])
    const [momentLength, setMomentLength] = useState <null|MomentsType> (moment.length)
    const [base64Image, setBase64Image] = useState('')

    const colorScheme = useColorScheme();
    
    useEffect(() => {
        setBase64Image('data:image/png;base64,'+String(ImageDecoding(moment.picture.data)))
    })

    return(
        <View style={styles.container}>
            <Pressable styles={styles.imageContainer} key={moment.id}>
                <Image
                source={{ uri: base64Image, priority: 'high' }}
                style={{
                    width: WindowWidth,
                    height: WindowHeight/1.2,
                }}
            />
            </Pressable>


            <LinearGradient 
                style={{
                    width: WindowWidth,
                    height: 200,
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 0,
                    }}
                colors={['#00000000', '#00000070']}
            />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {80}
                customStyles={{
                    container:{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth,
                        marginBottom: 0,
                        paddingHorizontal: 20
                    },
                    wrapper: {
                        backgroundColor: '#00000050',
                        width: WindowWidth,
                        height: WindowHeight
                        
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
                
            >
                <ModalComponentMoment user={moment}/>
                
            </RBSheet>
            
        </View>

    )
}

export default MomentsPreviewCenter