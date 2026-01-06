import { fetchPhotos } from './api/mediaApi';

const App = () => {
	// function getPhotos(): import('react').MouseEventHandler<HTMLButtonElement> | undefined {
	// 	throw new Error('Function not implemented.');
	// }

	// function getPhotos() {
	// 	fetchPhotos();
	// }
	return (
		<div className="h-screen w-full bg-gray-950 text-white">
			<button
				onClick={() => {
					getPhotos('cat');
				}}
			>
				Get Photos
			</button>
		</div>
	);
};

export default App;
