import React from 'react';
import Counter from './counter'
import CounterHooks from './CounterHooks'

function App() {
  console.log('Render App')

	return (
    <>
    Counter
		<Counter initialCount={0}/>
    CounterHooks
		<CounterHooks initialCount={0}/>
    </>
	);
}

export default App;
