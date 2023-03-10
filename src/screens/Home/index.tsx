import { Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Participant } from "../../components/Participant";

export default function Home(){

  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');



  function handleParticipantAdd(){

    
    if(participants.includes(participantName))
    {
      return Alert.alert("Participante Existe", "Já existe um participante com esse nome");
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string){
    return console.log("Nome do usuário ===> ",name);
    

    Alert.alert("Remover", "Remover participante "+name+"?",[
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: 'cancel'
      }
    ]);
  }

  function handleState(value: string) {
    setParticipantName(value);
    console.log(participantName);
  }


  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Segunda, 27 de Fevereiro de 2023</Text>
      <View style={styles.form}>
      <TextInput 
      style={styles.input}
      placeholder="Nome do participante"
      placeholderTextColor="#6b6b6b"
      onChangeText={handleState}
      value={participantName}

      />
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
       <Text style={styles.buttonText}>
        +
       </Text>
      </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
    
      />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
        </Text>
      )}
      />

      {/*<ScrollView showsVerticalScrollIndicator={false}>*/}
      {/*
        participants.map(participant => (
          <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove(participant)} />
        ))
      }

      <Participant name="" onRemove={() => handleParticipantRemove("Tavilo Breno")}/>
      <Participant name="" onRemove={() => handleParticipantRemove("Lucas Guimarães")}/>
      <Participant name="" onRemove={() => handleParticipantRemove("Robson Crusoé")}/>
      <Participant name="" onRemove={() => handleParticipantRemove("Lucas Rodrigues")}/>
      <Participant name="" onRemove={() => handleParticipantRemove("Cristiano Araújo")}/>*}
      {/*</ScrollView>*/}
    </View>
  );
}