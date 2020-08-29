import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "A SONG", duration: "4:05" },
    { title: "B SONG", duration: "2:30" },
    { title: "C SONG", duration: "1:09" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
