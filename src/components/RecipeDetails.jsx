import React from "react";
import {
    Box,
    Heading,
    Image,
    Text,
    Grid,
    List,
    ListItem,
    ListIcon,
    VStack,
} from "@chakra-ui/react";
import { MdOutlineFoodBank } from "react-icons/md";

const RecipeDetails = ({ recipe }) => {
    const {
        strMeal,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        strYoutube,
        strTags,
    } = recipe;

    const ingredients = [];
    const measurements = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measurement = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(ingredient);
            measurements.push(measurement);
        }
    }

    return (
        <Box>
            <Text fontSize="2xl" fontWeight="bold">
                {strMeal}
            </Text>
            <Text fontSize="lg" color="gray.600" mb={4}>
                {strCategory} - {strArea}
            </Text>
            <VStack spacing={5}>
                <Grid templateColumns="1fr 2fr" gap={4}>
                    <Box
                        borderWidth={1}
                        borderRadius="md"
                        shadow="xl"
                        rounded="xl"
                        width={"100%"}
                        p={5}
                    >
                        <Image
                            src={strMealThumb}
                            alt={strMeal}
                            objectFit="cover"
                            width={"100%"}
                        />
                    </Box>
                    <Box
                        borderWidth={1}
                        borderRadius="md"
                        shadow="xl"
                        rounded="xl"
                        width={"100%"}
                        p={5}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${
                                strYoutube.split("v=")[1]
                            }`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </Box>
                </Grid>

                <Grid
                    templateColumns="1fr 2fr"
                    gap={4}
                    borderWidth={1}
                    borderRadius="md"
                    shadow="xl"
                    rounded="xl"
                    width={"100%"}
                    p={5}
                >
                    <Box>
                        <Box>
                            <Heading as="h2" size="md" mb={2}>
                                Ingredients:
                            </Heading>
                            <List spacing={2}>
                                {ingredients.map((ingredient, index) => (
                                    <ListItem key={index}>
                                        <ListIcon as={MdOutlineFoodBank} />
                                        {`${measurements[index]} - ${ingredient}`}
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box mt={4}>
                            <Heading as="h3" size="md" mb={2}>
                                Tags:
                            </Heading>
                            <Text fontSize="lg" mb={4}>
                                {strTags}
                            </Text>
                        </Box>
                    </Box>

                    <Box>
                        <Heading as="h2" size="md" mb={2}>
                            Instructions:
                        </Heading>
                        <Text fontSize="md" whiteSpace="pre-line" mb={4}>
                            {strInstructions}
                        </Text>
                    </Box>
                </Grid>
            </VStack>
        </Box>
    );
};

export default RecipeDetails;
