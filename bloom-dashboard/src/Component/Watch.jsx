import React, { useState, useEffect } from 'react';
import { ClockIcon } from './icons/clock.svg';
import { CalenderIcon } from './icons/calendar.svg';

function Watch() {
	const [dateState, setDateState] = useState(new Date());
	useEffect(() => {
		setInterval(() => {
			console.log('watching');
			setDateState(new Date());
		}, 30000);
	}, []);
	return (
		<div className="App">
			<CalenderIcon />
			<p>
				{' '}
				{dateState.toLocaleDateString('en-GB', {
					day: 'numeric',
					month: 'short',
					year: 'numeric',
				})}
			</p>
			<ClockIcon />
			<p>
				{dateState.toLocaleString('en-US', {
					hour: 'numeric',
					minute: 'numeric',
					hour12: true,
				})}
			</p>
		</div>
	);
}

export default Watch;