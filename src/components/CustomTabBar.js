import React, { useContext } from "react";
import styled from "styled-components/native";
import { UserContext } from "../contexts/UserContext";

import { AntDesign } from '@expo/vector-icons'; 

const TabArea = styled.View`
    height: 60px;
    background-color: #333;
    flex-direction: row;
`

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const AvatarIcon = styled.Image`
    width: 32px;
    height: 32px;
    border-radius: 16px;
`

const CustomTabBar = ({ state, navigation }) => {

    const { state: user } = useContext(UserContext)

    const goTo = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo("Home")}>
                <AntDesign name="home" size={28} color="white" style={{ opacity: state.index === 0 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={()=>goTo("Search")}>
                <AntDesign name="search1" size={28} color="white" style={{ opacity: state.index === 1 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={()=>goTo("Favorites")}>
                <AntDesign name="hearto" size={28} color="white" style={{ opacity: state.index === 2 ? 1 : 0.5 }} />
            </TabItem>
            <TabItem onPress={()=>goTo("Profile")}>
                {user.avatar != '' ?
                    <AvatarIcon source={{ uri: user.avatar }}/>
                    :
                    <AntDesign name="user" size={28} color="white" style={{ opacity: state.index === 3 ? 1 : 0.5 }} />
                }
            </TabItem>
        </TabArea>
    )
}

export default CustomTabBar