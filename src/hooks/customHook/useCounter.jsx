import { useEffect } from 'react';

const useCounter = (count) => {
	useEffect(() => {
		if (count >= 1) {
			document.title = `Click ${count} times`;
		} else {
			document.title = 'Prashant';
		}
	}, [count]);
};

export default useCounter;
