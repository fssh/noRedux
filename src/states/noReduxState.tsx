import { useEffect, useState, forceUpdate } from 'react';

let state = {
	name: 1
};

export const registries = [];

export const useNoRedux = () => {
	const [update, setUpdate] = useState();
	useEffect(() => {
		registries.push(setUpdate);
	}, []);
}

export function updateState(payload) {
	Object.assign(state, payload);
	registries.forEach(r => r(v => !v));
}

export default state;