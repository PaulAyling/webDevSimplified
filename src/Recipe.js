import React from 'react';

export default function Recipe(props) {
	const { name, cookTime, servings, instructions } = props;
	return (
		<div>
			<div>
				<h3>{name}</h3> 
				<div>
					<button>Edit</button>
					<button>Delete </button>
				</div>
				<div>
					<span>Cook Time</span>
					<span>{cookTime}</span>
				</div>
				<div>
					<span>Servings</span>
					<span>{servings}</span>
				</div>
				<div>
					<span>Instruction</span>
					<div>{instructions}</div>
				</div>
				<div>
					<span>Cook Time</span>
					<span>1:45</span>
				</div>
			</div>
		</div>
	);
}
