import * as mutations from './mutation-types'

export default {
  showMember(context, member){
    context.commit(mutations.SHOW_MEMBER, member)
  },

  showMembers(context){
    context.commit(mutations.SHOW_MEMBERS)
  },

  addMember(context){
    context.commit(mutations.ADD_MEMBER)
  },
  removeMember(context, id){
    context.commit(mutations.REMOVE_MEMBER, id)

    // context.dispatch('showMembers')
  }
}
