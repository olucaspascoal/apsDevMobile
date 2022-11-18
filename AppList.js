import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, onPress} from 'react-native';
import axios from "axios";

import './App.css';
 
export default function AppList() {

  const [Estados, setEstados] = useState([]);
  const [MunicipiosRJ, setMunicipiosRJ] = useState([]);

    useEffect(() => {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then((response) => setEstados(response.data));
    }, []);

    useEffect(() => {
      axios
        .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios`)
        .then((response) => setMunicipiosRJ(response.data));
    }, []);

  return (
    <>
      <h2> Estados </h2>

      <div className='lista'>
        {Estados.map(estado => <div className={estado.id}> {estado.nome} </div>)}  
      </div>

      <h2> Municípios do Rio de Janeiro </h2>

      <div className='lista'>
        {MunicipiosRJ.map(estado => <div className={estado.id}> {estado.nome} </div>)}  
      </div>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9FF46',
    alignItems: 'center',
    justifyContent: 'center',
  },
});