import {
    Button,
    Flex,
    HStack,
    Link,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack align="stretch" justifyContent="space-between" py={5}>
            <Text fontSize="xl" fontWeight="bold">
                Get-A-Random-Recipe 🥘
            </Text>
            <HStack spacing={8} justifyContent={"space-between"}>
                <Flex
                    w={"100%"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    zIndex={"0"}
                    gap={5}
                >
                    <Link href="/">Random</Link>
                </Flex>
                <Button
                    size="sm"
                    onClick={toggleColorMode}
                    variant="outline"
                    borderWidth={1}
                    borderRadius="md"
                    shadow="md"
                    rounded="xl"
                    bg={colorMode === "light" ? "white" : "#1A202C"}
                >
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
        </HStack>
    );
};

export default NavBar;
