import React from 'react';
import './App.css';
import RowBrowse from './RowBrowse';

function AppBrowse1Row({x1, x2, x3}) {
	return (
		<div className="app">
			<RowBrowse title="RELATED ITEMS" movies={x1} />
		</div>
	);
}

export default AppBrowse1Row;
