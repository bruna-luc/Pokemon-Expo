import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components/card";
import { getDetailsPokemon, getPokemons } from "../../functions/pokemon";

export function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({
    name: "",
    hp: "",
    description: "",
    imageURI: "",
  });

  useEffect(() => {
    getPokemonsList();
  }, []);

  const getPokemonsList = async () => {
    setLoading(true);
    const response = await getPokemons();
    setPokemons(response.results);
    makeDetailsPokemon(response.results[16].name);
  };

  const makeDetailsPokemon = async (name) => {
    const response = await getDetailsPokemon(name);
    setPokemon({
      name: response.name,
      hp: response.stats[0].base_stat,
      description: "askldnsknldas",
      imageURI: response.sprites.front_default,
    });
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <Card
          name={pokemon.name}
          hp={pokemon.hp}
          description={pokemon.description}
          imageURI={pokemon.imageURI}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingTop: 40,
  },
});
