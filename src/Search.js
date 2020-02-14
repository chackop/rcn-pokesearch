import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button, StyleSheet } from 'native-base';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

const Search = () => {
    const [pokeSearch, setPokeSearch] = useState("");
    const [onCall, setOnCall] = useState(true);
    const [data, setData] = useState({});

    const searchPoke = () => {
        setOnCall(true)
        if (pokeSearch === "") {
            return;
        }
        axios.get("http://pokeapi.co/api/v2/pokemon/" + pokeSearch.toLowerCase())
            .then(function (response) {
                console.log(response.data);
                setData(response.data);
                setOnCall(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const renderBody = () => {
        if (onCall) {
            return (
                <PokeLoader />
            )
        }
        else {
            return (
                <SearchBody data={data} />
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header
                searchBar
                rounded
            >
                <Item>
                    <Icon name="ios-search" onPress={searchPoke} />
                    <Input
                        value={pokeSearch}
                        placeholder="Search Pokemon"
                        onChangeText={(pokeSearch) => setPokeSearch(pokeSearch)}
                    />
                </Item>

            </Header>
            {renderBody()}
        </View>
    )
}

export default Search
