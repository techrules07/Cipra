import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import steps from '../Assets/steps.jpg'


const HomeScreen = () => {
    return <ScrollView style={{flex: 1, backgroundColor: '#accff9', padding: 12}}>
        <View>
        <Text style={{fontSize: 22, fontWeight: '700', color: '#000000'}}>Recommendation</Text>
        <Text style={{marginTop: 20}}>Our analysis shows your BP is related to your daily number of steps. This week, focus on increasing your daily step count. Regular physical activity helps to lower blood pressure.</Text>

        <Image source={steps} style={{flex: 1, objectFit: 'fill', width: '100%', height: 750, marginTop: 20}} />
        </View>
    </ScrollView>
}

export default HomeScreen;