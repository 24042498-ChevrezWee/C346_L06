import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Question = ({ number, image, selectedAnswer, onSelectAnswer }) => {
    return (
        <View style={styles.questionContainer}>
            <Text style={styles.questionText}>
                Question {number}: What type of motorcycle is this?
            </Text>

            <Image source={image} style={styles.image} />

            <Picker selectedValue={selectedAnswer} onValueChange={(value) => onSelectAnswer(value)}>
                <Picker.Item label="Select an answer..." value="" />
                <Picker.Item label="Sport Bike" value="Sport Bike" />
                <Picker.Item label="Cruiser" value="Cruiser" />
                <Picker.Item label="Scooter" value="Scooter" />
            </Picker>
        </View>
    );
};

export default function App() {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    const submitAnswers = () => {
        let score = 0;

        if (answer1 === 'Sport Bike') {
            score += 1;
        }

        if (answer2 === 'Cruiser') {
            score += 1;
        }

        if (answer3 === 'Scooter') {
            score += 1;
        }

        let feedback = '';

        if (score === 3) {
            feedback = 'Excellent! You are a motorcycle expert!';
        } else if (score === 2) {
            feedback = 'Well done! You almost got a perfect score.';
        } else {
            feedback = 'Keep practising and try again!';
        }

        Alert.alert(
            'Quiz Result',
            `You have ${score} correct answer(s)!\n\n${feedback}`
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>
                    <FontAwesome6 name={"motorcycle"} size={25} color="red" /> Motorcycle Type Quiz
                </Text>

                <Question
                    number="1"
                    image={require('./img/sportbike.jpg')}
                    selectedAnswer={answer1}
                    onSelectAnswer={setAnswer1}
                />

                <Question
                    number="2"
                    image={require('./img/cruiser.jpg')}
                    selectedAnswer={answer2}
                    onSelectAnswer={setAnswer2}
                />

                <Question
                    number="3"
                    image={require('./img/scooter.jpg')}
                    selectedAnswer={answer3}
                    onSelectAnswer={setAnswer3}
                />

                <TouchableOpacity style={styles.submitButton} onPress={submitAnswers}>
                    <Text style={styles.submitText}>SUBMIT ANSWERS</Text>
                </TouchableOpacity>
            </ScrollView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: (StatusBar.currentHeight || 0) + 16
    },
    content: {
        paddingTop: 30,
        paddingHorizontal: 15,
        paddingBottom: 30,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'red',
    },
    questionContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    questionText: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 250,
    },
    submitButton: {
        backgroundColor: 'red',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});