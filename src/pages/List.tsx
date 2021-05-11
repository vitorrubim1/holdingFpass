import { Flex } from "@chakra-ui/react";

import Content from "../components/Content";
import Container from "../components/Container";
import ImageBackground from "../components/ImageBackground";

import MarvelImage from "../assets/images/marvelBackground2.jpg";
import Carousel from "../components/Carousel";

const List: React.FC = () => {
  const items = [
    {
      items: [
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "teste name",
          imageUrl:
            "https://images.unsplash.com/photo-1505925456693-124134d66749?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
      ],
      name: "Homem aranha",
    },
  ];

  return (
    <Container>
      <ImageBackground imageURL={MarvelImage} />

      <Content>
        <Flex width="inherit">
          {items.map((item, index) => (
            <Carousel key={index} items={item.items} />
          ))}
        </Flex>
      </Content>
    </Container>
  );
};

export default List;
