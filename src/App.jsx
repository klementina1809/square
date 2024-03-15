import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [tl, settl] = useState(0);
	const [tr, settr] = useState(0);
	const [bl, setbl] = useState(0);
	const [br, setbr] = useState(0);

	const handlerBorderRadius = (e) => {
		const newValue = e.target.value;
		if (e.target.name === "tl") settl(newValue);
		else if (e.target.name === "tr") settr(newValue);
		else if (e.target.name === "bl") setbl(newValue);
		else if (e.target.name === "br") setbr(newValue);
	};

	const squareStyle = { borderRadius: `${tl}px ${tr}px ${br}px ${bl}px` };

	return (
		<>
			<div className="square" style={squareStyle}></div>
			<div className="form">
				<label>
					Top Left
					<input
						name="tl"
						type="number"
						value={tl}
						onChange={(e) => handlerBorderRadius(e)}
					/>
				</label>

				<label>
					Top Right
					<input
						name="tr"
						type="number"
						value={tr}
						onChange={(e) => handlerBorderRadius(e)}
					/>
				</label>
				<label>
					Bottom Left
					<input
						name="bl"
						type="number"
						value={bl}
						onChange={(e) => handlerBorderRadius(e)}
					/>
				</label>
				<label>
					Bottom Right
					<input
						name="br"
						type="number"
						value={br}
						onChange={(e) => handlerBorderRadius(e)}
					/>
				</label>
			</div>
		</>
	);
}

export default App;
