import axios from 'axios';

const KEY = 'AIzaSyBXwAXUbdA9RfLC_5ndMai1DMrWwyqJ9xc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key : KEY
  }
});
