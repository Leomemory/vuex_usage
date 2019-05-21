export default {
    add_note({commit}){
        commit('ADD_NOTE')
    },
    fav_note({commit}){
        commit('FAV_NOTE')
    },
    del_note({commit}){
        commit('DEL_NOTE')
    },
    select_note({commit},note){
        commit('SELECT_NOTE',note)
    },
    switch_note({commit},type){
        commit('SWITCH_NOTE',type)
    },

    addAction(context){
        //异步执行
        setTimeout(()=>{
            context.commit('adds',{amount:20,text:'增加20'});
        },3000)
        console.log('先打印出来，3s后adds执行')
    },
    //es6语法，直接把commit对象传递过来
    reduceAction({commit}){
        commit('reduce')
    }
}

/*-
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
*/
