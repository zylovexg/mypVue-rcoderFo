const userInfo = {
  state: {
    userInfoControll: false,
    userInfoObj: {}
  },
  mutations: {
    CHANGE_USER_INFO (state) {
      state.userInfoControll = true
    },
    SET_USER_INFO (state, obj) {
      state.userInfoObj = obj
    }
  }
}

export default userInfo
