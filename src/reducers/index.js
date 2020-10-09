import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macerena', duration: '2:30' },
		{ title: 'AllStar', duration: '3:15' },
		{ title: 'Nirvana', duration: '2:30' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
