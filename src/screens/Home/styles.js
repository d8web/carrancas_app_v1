import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 40px 5px 0px 10px;
    background-color: white;
`

export const Header = styled.View`
    margin-top: 20px;
    height: 80px;
    padding: 0 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TextLogoArea = styled.View``

export const HeaderTitle = styled.Text`
    font-weight: 700;
    color: #333;
    font-size: 24px;
`

export const HeaderAvatarArea = styled.TouchableOpacity``

export const HeaderAvatar = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 30px;
`

export const SearchArea = styled.TouchableOpacity`
    height: 55px;
    margin-top: 24px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgba(199, 210, 212, 0.15);
    border-radius: 5px;
    padding: 0 12px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InputArea = styled.TextInput`
    flex: 1;
    height: 50px;
    padding-left: 10px;
    font-size: 18px;
    margin: 0 5px;
`

export const Subtitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    padding: 0 10px;
    margin-top: ${props => props.sub ? '10px' : '0px'};
    margin-bottom: ${props => props.bot ? '10px' : '0px'};
`

export const FlatItem = styled.FlatList`
    padding: 0 10px;
    margin-top: 10px;
`

export const FlatView = styled.TouchableOpacity`
    margin-right: 5px;
    padding: 5px 14px;
    border-radius: 20px;
`

export const FlatViewPark = styled.TouchableOpacity`
    margin-right: 10px;
    border-radius: 20px;
    position: relative;
    margin-top: 10px;
`

export const SquareHearth = styled.TouchableOpacity`
    position: absolute;
    top: 14px;
    right: 14px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    z-index: 2;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
`

export const NotaText = styled.Text`
    color: #f3994b;
    font-size: 16px;
    font-weight: bold;
`

export const FlatText = styled.Text`
    font-size: 16px;
`

export const FlatParques = styled.FlatList`
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: ${props => props.bottomMg ? '30px' : '0px'};
`

export const FlatImagePark = styled.Image`
    width: 280px;
    height: 380px;
    border-radius: 14px;
`

export const PriceText = styled.Text`
    padding-bottom: 10px;
    color: #333;
    font-size: 14px;
`

export const FlatTextPark = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`

export const AreaInfo = styled.View`
    position: absolute;
    bottom: 14px;
    left: 14px;
    width: 90%;
    height: 100px;
    justify-content: center;
    padding-left: 14px;
    background-color: red;
    background: rgba( 255, 255, 255, 0.70 );
    border-radius: 14px;
`