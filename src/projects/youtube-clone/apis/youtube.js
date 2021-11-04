import axios from 'axios';

const KEY = 'AIzaSyDT2i07LNTXlbI3LlKLYY83wivUvdj_S0g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
