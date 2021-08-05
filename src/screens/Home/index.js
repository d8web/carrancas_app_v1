import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
    Container,
    Header,
    TextLogoArea,
    HeaderTitle,
    HeaderAvatarArea,
    HeaderAvatar,
    SearchArea,
    InputArea,
    Subtitle,
    FlatItem,
    FlatView,
    FlatViewPark,
    FlatText,
    FlatParques,
    FlatImagePark,
    PriceText,
    SquareHearth,
    NotaText,
    FlatTextPark,
    AreaInfo,
} from './styles';

import { AntDesign, Feather  } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Categorias = [
    {
      id: '1',
      title: 'Todos',
    },
    {
      id: '2',
      title: 'Parques',
    },
    {
      id: '3',
      title: 'Grutas',
    },
    {
        id: '4',
        title: 'Mirantes',
    },
    {
        id: '5',
        title: 'Cachoeiras e poços',
    },
    {
        id: '6',
        title: 'Pousadas'
    },
    {
        id: '7',
        title: 'Alimentação'
    },
    {
        id: '8',
        title: 'Guias Locais'
    },
    {
        id: '9',
        title: 'História',
    },
    {
        id: '10',
        title: 'Carrancas Naturais',
    },
    {
        id: '11',
        title: 'Informações'
    }
];

const Parques = [
    {
        id: '1',
        name: 'Vargem Grande',
        image: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/120539179_3549282185092929_583537364381381119_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=-lkQYm88IJ4AX_1mWqR&_nc_ht=scontent-gru2-2.xx&oh=08e6cb0fe532ad96ce882aedeb1932f1&oe=612EFA91',
        price: '10',
        nota: '4.6'
    },
    {
        id: '2',
        name: 'Complexo da Ponte',
        image: 'https://cdnstatic8.com/tireabundadosofa.com.br/wp-content/uploads/2019/01/cachoeiras-em-carrancas-1.jpg',
        price: '5',
        nota: '4.5'
    },
    {
        id: '3',
        name: 'Serra do Moleque',
        image: 'https://www.vamostrilhar.com.br/content/uploads/2020/03/Conhe%C3%A7a-tudo-sobre-o-Complexo-da-Zilda-Carrancas-MG-Vamos-Trilhar-min-scaled.jpg',
        price: '25',
        nota: '4.7'
    },
    {
        id: '4',
        name: 'Complexo da Toca',
        image: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/120777913_3904292116248705_45572926540649316_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=KKwkZniY-FEAX9wRc3k&_nc_ht=scontent-gru2-1.xx&oh=faf5991432338230f74f87f62660f429&oe=61300556',
        price: '10',
        nota: '4.2'
    },
    {
        id: '5',
        name: 'Complexo do Turco',
        image: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/106679773_3410519179012647_6293916030977960963_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=wKdLp79wO84AX9RZhCL&_nc_ht=scontent-gru1-2.xx&oh=22de3f6ab2e907cefe2167110fba3e35&oe=6131EFBE',
        price: '0',
        nota: '4.4'
    }
];

const Mirantes = [
    {
        id: '1',
        name: 'Serra de Carrancas',
        image: 'https://www.noticiasgerais.net/wp-content/uploads/2020/08/carrancas.jpg',
        price: '0',
        nota: '4.8'
    },
    {
        id: '2',
        name: 'Cruz das Almas',
        image: 'https://lh3.googleusercontent.com/proxy/VmcGFV4b2bNITnbVChlBohKBr8c-WuDwr9OtBfbPN3CHZUvfvQ6Ao5buHeoKXJP4VDiXMFlip4OVaBVaoLmeCghvc5xKYuDAaQsk_L25pLJL3aoHk6yCMBwvKrKmNlSFUwriUNGUsGZKOWOAhDLO_K_ehptkRbqBj5Hf7g_g',
        price: '0',
        nota: '4.7'
    },
    {
        id: '3',
        name: 'Monte Teta',
        image: 'https://www.vamostrilhar.com.br/content/uploads/2020/03/Complexo-da-Toca-Cora%C3%A7%C3%A3o-Carrancas-MG-Vamos-Trilhar.jpg',
        price: '0',
        nota: '4.6'
    },
];

const Cachoeiras = [
    {
        id: '1',
        name: 'Cachoeira da Esmeralda',
        localizacao: 'Vargem Grande',
        distancia: '11km',
        impropria: false,
        image: 'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/120539179_3549282185092929_583537364381381119_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=-lkQYm88IJ4AX_1mWqR&_nc_ht=scontent-gru2-2.xx&oh=91e5a62964c1aa6812a0bd92a865a06b&oe=6132EF11',
        preco: '10',
        images: [],
    },
    {
        id: '2',
        name: 'Cachoeira da Zilda',
        localizacao: 'Serra do Moleque',
        distancia: '11Km',
        impropria: false,
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/fa/ed/93/cachoeira-da-zilda.jpg',
        preco: '25',
        images: []
    },
    {
        id: '3',
        name: 'Poço do Coração',
        localizacao: 'Complexo da Toca',
        distancia: '2km',
        impropria: false,
        image: 'https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/p526x296/120777913_3904292116248705_45572926540649316_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=730e14&_nc_ohc=KKwkZniY-FEAX9wRc3k&_nc_ht=scontent-gru2-1.xx&oh=af124e5167d33e43b3da95125559f7f0&oe=612FBCD9',
        preco: '10',
        images: []
    }
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <FlatView onPress={onPress} style={[backgroundColor]}>
      <FlatText style={[textColor]}>{item.title}</FlatText>
    </FlatView>
  );

const MyPark = ({ name, image, price, nota, onPress }) => (
    <FlatViewPark onPress={onPress}>
        <SquareHearth>
            <NotaText>{nota}</NotaText>
        </SquareHearth>
        <FlatImagePark source={{ uri: image }} />
        <AreaInfo>
            <FlatTextPark>{name}</FlatTextPark>
            <PriceText>R$ {price},00 p/pessoa</PriceText>
        </AreaInfo>
    </FlatViewPark>
);

const MyWaterfall = ({ image }) => (
    <FlatViewPark>
        <SquareHearth>
            <AntDesign name="hearto" size={24} color="black" />
        </SquareHearth>
        <FlatImagePark source={{ uri: image }} />
    </FlatViewPark>
);

const Home = () => {

    const navigation = useNavigation();

    // lOGOUT
    const handleLogout = async () => {
        await AsyncStorage.setItem('token', ' ');
        navigation.navigate("SignIn");
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === categorySelected ? "#f3994b" : "#fff";
        const color = item.id === categorySelected ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => setcategorySelected(item.id)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
    };

    const renderPark = ({ item }) => (
        <MyPark
            name={item.name}
            image={item.image}
            price={item.price}
            nota={item.nota}
            onPress={()=> alert('Parque')}
        />
    );

    const renderWaterfall = ({ item }) => (
        <MyWaterfall
            image={item.image}
        />
    );

    const [ searchCachoeira, setSearchCachoeira ] = useState('');
    const [ categorySelected, setcategorySelected ] = useState('1');

    return (
        <Container>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Header>
                    <TextLogoArea>
                        <HeaderTitle>Explore a</HeaderTitle>
                        <HeaderTitle>Cidade de Carrancas</HeaderTitle>
                    </TextLogoArea>
                    <HeaderAvatarArea onPress={handleLogout}>
                        <HeaderAvatar source={{ uri: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }}/>
                    </HeaderAvatarArea>
                </Header>

                <SearchArea>
                    <AntDesign name="search1" size={24} color="black" />
                    <InputArea
                        placeholder="Pesquise uma cachoeira"
                        value={searchCachoeira}
                        onChangeText={t=>setSearchCachoeira(t)}
                    />
                    <Feather name="grid" size={24} color="black" />
                </SearchArea>
                
                <FlatItem
                    data={Categorias}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    height={50}
                    alignItems="center"
                />

                {categorySelected === '1' &&
                    <>
                        <Subtitle sub>Lugares Populares</Subtitle>
                        <FlatParques
                            data={Parques}
                            renderItem={renderPark}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            bottomMg={true}
                        />
                        <Subtitle sub bot>Cachoeiras de Carrancas</Subtitle>
                        <FlatParques
                            data={Cachoeiras}
                            renderItem={renderWaterfall}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            bottomMg={true}
                        />
                    </>
                }

                {categorySelected === '2' &&
                    <>
                        <Subtitle sub>Parques de Carrancas</Subtitle>
                        <FlatParques
                            data={Parques}
                            renderItem={renderPark}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }

                {categorySelected === '4' &&
                    <>
                        <Subtitle sub>Mirantes de Carrancas</Subtitle>
                        <FlatParques
                            data={Mirantes}
                            renderItem={renderPark}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }

                {categorySelected === '5' &&
                    <>
                        <Subtitle sub>Cachoeiras de Carrancas</Subtitle>
                        <FlatParques
                            data={Cachoeiras}
                            renderItem={renderWaterfall}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                }

            </ScrollView>

        </Container>
    );
}

export default Home;