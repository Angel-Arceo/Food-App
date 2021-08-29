import React, { useState, useEffect } from 'react';
import './RecipeCard.css';

import useSummary from "../../hooks/useSummary";
import useFetch from "../../hooks/useFetch";
import {API_KEY} from "../../const";

import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const summary = useSummary(props.id);
    const [ img, setImg ] = useState('');
    const { data, isPending } = useFetch(`https://api.spoonacular.com/recipes/${props.id}/information?apiKey=${API_KEY}`);

    useEffect(() => !isPending ? setImg(data.image) : setImg('https://spoonacular.com/recipeImages/716429-556x370.jpg'), [isPending,data]);

    return (
        <Link to='/recipe' className="Link">
            <article className="Recipe-Card">
                <div className="Recipe-Card--recipeImage">
                    <img src={img} alt="recipe" />
                </div>
                <div className="Recipe-Card--recipeContent">
                    <h2>{props.title.substr(0,50)+'..'}</h2>
                    <p>{`${summary.substr(0,55)}...`}</p>
                </div>
            </article>
        </Link>
    );
}

export default RecipeCard;