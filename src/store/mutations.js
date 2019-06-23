import * as mutations from './mutation-types'

export default {
  [mutations.SHOW_MEMBER] (state, member){
      state.singleView = true,
      state.active_member= member
  },
  [mutations.SHOW_MEMBERS] (state){
    state.singleView = false,
    state.active_member= null
}
}
