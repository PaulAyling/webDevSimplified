import React from 'react';
import Counter from './counter'

function App() {
  console.log('Render App')

	return (
		<Counter initialCount={4}/>
	);
}

export default App;
