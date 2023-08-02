import React, { useEffect, useState } from "react";
import RecipeDetails from "../components/RecipeDetails";
import axios from "axios";

const RandomRecipe = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const getRandomRecipe = async () => {
        try {
            const url = "https://www.themealdb.com/api/json/v1/1/random.php";
            const { data: recipe } = await axios.get(url);
            setData(recipe.meals[0]);
            setLoading(false);
            return;
        } catch (error) {
            setLoading(false);
            setError("Failed to fetch random recipe data");
        }
    };

    useEffect(() => {
        getRandomRecipe();
    }, []);

    return (
        <>
            {data ? (
                <RecipeDetails recipe={data} />
            ) : loading ? (
                <div>Loading...</div>
            ) : (
                <div>{error}</div>
            )}
        </>
    );
};

export default RandomRecipe;
