import React from 'react';
import RecipeList from './RecipeList'

function App() {

	return (
		<RecipeList recipes={sampleRecipes}/>
	)
}
const sampleRecipes =[
	{
		id:1,
		name:'Plain Chicken',
		servings:3,
		cookTime:'1:45',
		instructions: "1. Put salt on Chicken /n2. Put chicken in the oven/n3. Eat the chicken"
	},
	{
		id:2,
		name:'Plain Pork',
		servings:5,
		cookTime:'2:45',
		instructions: "1. Put Paprika on Pork /n2. Put Pork in the oven/n3. Eat the Pork"
	}
] 

export default App;
