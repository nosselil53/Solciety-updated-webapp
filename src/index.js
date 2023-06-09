import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Fragment } from "react";
import reportWebVitals from './reportWebVitals';
import LeftSide from "./containers/leftSidebar";
import Chitchat from "./containers/chatBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Fragment>
			<div className="chitchat-container  ">
				<LeftSide />
				<Chitchat />
			</div>	
		</Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
