import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySong }) => {
	if (!mySong) {
		return <div className='item'>Select a Song</div>;
	}
	return (
		<div>
			<h4>Selected Song:</h4>
			<p>
				Title: {mySong.title}
				<br />
				Duration: {mySong.duration}
			</p>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { mySong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
