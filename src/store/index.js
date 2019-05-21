import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const defaultNote = {
    id:+new Date(),
    title:'我的笔记' + new Date().getMilliseconds(),
    content: '我的第一篇笔记内容',
    fav:false
}

const state = {
    count:22888,
    count2:1000,
    num:10,
    text:'',
    notes:[defaultNote], //以数组的方式存放所有笔记
    activeNote:defaultNote,  //用来记录当前的笔记
    show:'all'       //用于切换 全部 / 已收藏 两种不同列表的标识
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})


/*
mutations：简单讲就是用来修改 state 的，同步方法.常规调用 this.$store.commit
actions：简单讲用来调用 mutations 的，异步方法.常规调用 this.$store.dispatch
*/