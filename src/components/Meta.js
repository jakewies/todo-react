import React from 'react';

const Meta = (props) => {
	return (
		<div className="meta">
			<h1>React Todo MVC Application State</h1>
			<pre className="state">
				{JSON.stringify(props.state, null, 2)}
			</pre>
		</div>
	)
}

export default Meta;
