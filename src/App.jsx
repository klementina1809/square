import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="square"></div>

			<div className="form">
				<label htmlFor="">
					Top Left
					<input type="text" />
				</label>

				<label htmlFor="">
					Top Right
					<input type="text" />
				</label>
				<label htmlFor="">
					Bottom Left
					<input type="text" />
				</label>
				<label htmlFor="">
					Bottom Right
					<input type="text" />
				</label>
			</div>
		</>
	);
}

export default App;
