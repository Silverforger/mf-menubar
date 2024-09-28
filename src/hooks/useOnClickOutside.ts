import { useEffect } from 'react';

const useOnClickOutside = (ref: any, handler: any): void => {
	useEffect(
		() => {
			const listener = (event: any): void => {
				if (
					ref.current === null ||
                    ref.current === undefined ||
					ref.current.contains(event.target) === true
				) {
					return;
				}
				handler(event);
			};
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		[ref, handler]
	);
};

export default useOnClickOutside;
