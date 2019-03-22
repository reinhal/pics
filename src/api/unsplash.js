import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 51730fb171b312a99956ff6ddcfbb828735f281ce0db8836161e418b2bfdf979'
  }
});