const systemInfo = {
  state: {
    // 用来判断是否为 iPhone X，iPhone XR，iPhone XS，iPhone XS Max，默认为false，是其中任意机型就为 true
    systemInfoControll: false
  },
  mutations: {
    CHANGE_SYSTEM_INFO: state => {
      state.systemInfoControll = true
    }
  }
}

export default systemInfo
