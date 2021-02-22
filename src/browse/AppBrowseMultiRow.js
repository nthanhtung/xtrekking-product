import React, {createRef} from 'react';
import './App.css';
import RowBrowse from './RowBrowse';
import Banner from './Banner';
import Nav from './Nav';


function AppBrowseMultiRow({x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10}) {
	const tourRef = createRef(null);
	const agencyRef = createRef(null);
	const tranRef = createRef(null);

	const tourExecuteScroll = () => tourRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	const agencyExecuteScroll = () => agencyRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	const tranExecuteScroll = () => tranRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

	return (
		<div className="app">
			<Nav f1={tourExecuteScroll} f2={agencyExecuteScroll} f3={tranExecuteScroll}/>
			<Banner movies={x0}/>
			<RowBrowse title="XTREKKING ORIGINAL" isLargeRow movies={x1} />
			<div style={{"height":"60px"}} ref={tourRef}></div>
			<RowBrowse title="Tour - North" movies={x2} />
			<RowBrowse title="Tour - Central" movies={x3} />
			<RowBrowse title="Tour - South" movies={x4} />
			<div style={{"height":"60px"}} ref={agencyRef}></div>
			<RowBrowse title="Agency - North" movies={x5} />
			<RowBrowse title="Agency - Central" movies={x6} />
			<RowBrowse title="Agency - South" movies={x7} />
			<div style={{"height":"60px"}} ref={tranRef}></div>
			<RowBrowse title="Transportation - North" movies={x8} />
			<RowBrowse title="Transportation - Central" movies={x9} />
			<RowBrowse title="Transportation - South" movies={x10} />

		</div>
	);
}

export default AppBrowseMultiRow;
