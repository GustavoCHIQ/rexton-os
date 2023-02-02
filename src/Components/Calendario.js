import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';


export default function Calendario() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <DatePicker
                    mode="date"
                    date={new Date()}
                    onDateChange={date => console.log(date)}
                />
            </Modal>
        </View>
    );
}