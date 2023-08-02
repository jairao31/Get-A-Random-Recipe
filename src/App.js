import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RandomRecipe from "./pages/RandomRecipe";

function App() {
    return (
        <ChakraProvider>
            <Container maxW="6xl" p={4} flex={1}>
                <NavBar />
                <RandomRecipe />
            </Container>
        </ChakraProvider>
    );
}

export default App;
