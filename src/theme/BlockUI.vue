<BlockUI :message="msg" :url="url"></BlockUI>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url : loadingImage   //It is important to import the loading image then use here
    }
  }
}
