import * as mutations from './mutation-types'

export default {
  showMember(context, member){
    context.commit(mutations.SHOW_MEMBER, member)
  },

  showMembers(context){
    context.commit(mutations.SHOW_MEMBERS)
  }
}
