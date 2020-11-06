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
		instructions: "1. Put salt on Chicken /n2. Put chicken in the oven/n3. Eat the chicken",
		ingredients:[
			{
				id:1,
				name:'chicken',
				amount:'2 pounds'
			},
			{
				id:2,
				name:'salt',
				amount:'1 teaspoon'
			},
		]
	},
	{
		id:2,
		name:'Plain Pork',
		servings:5,
		cookTime:'2:45',
		instructions: "1. Put Paprika on Pork /n2. Put Pork in the oven/n3. Eat the Pork",
		ingredients:[
			{
				id:1,
				name:'Pork',
				amount:'1 pounds'
			},
			{
				id:2,
				name:'Paprika',
				amount:'2 teaspoon'
			},
		]
	}
] 

export default App;
