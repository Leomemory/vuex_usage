<template>
    <div id="tool">
        tool
        <button class="add" @click="add_note">新增</button>
        <button class="fav" @click="fav_note">收藏</button>
        <button class="del" @click="del_note">删除</button>
        <div>
            <h3>state赋值的几种方法</h3>
            直接赋值{{$store.state.count}}
            <br>  
            加了5以后 {{ countafter }}
            <br>  
            mapState的对象来赋值{{countaftermap}}
            <br>
            mapState的数组来赋值{{count}}
        </div>
        <div>
            <h3>使用 getter 的几种方式</h3>
            {{$store.getters.addcount}}
            <br>
            {{count2after}}
            <br>
            mapState的数组来赋值{{addcount}}
        </div>
        <div>
            <h3>使用 mutations 的几种方式</h3>
            监控数据{{num}}<br>
            直接使用<br>
            <button @click="$store.commit('add')" style="width:50px;height:50px;font-size:13px;">加</button>
            <button @click="$store.commit('reduce')" style="width:50px;height:50px;font-size:13px;">减</button>
            <br>

            使用mapMutations<br>
            <button @click="add" style="width:50px;height:50px;font-size:13px;">map加</button>
            <button @click="reduce" style="width:50px;height:50px;font-size:13px;">map减</button>
            <br>

            Mutations的回调函数接收第二个参数<br>         
            <button @click="$store.commit('addn',10)" style="width:50px;height:50px;font-size:13px;">加10</button>
            <button @click="addn(5)" style="width:50px;height:50px;font-size:13px;">加5</button>
            <br>

            第二个参数是一个对象的情况<br>
            {{text}}
            <button @click="$store.commit('adds',{amount:15,text:'增加15'})" style="width:70px;height:50px;font-size:13px;">adds+15</button>
            <button @click="adds({amount:15,text:'增加15'})" style="width:70px;height:50px;font-size:13px;">adds+15</button>
        </div>
        <div>
            <h3>使用 actions的方法</h3>
            直接使用<br>
            <button @click="$store.dispatch('reduceAction')" style="width:70px;height:50px;font-size:13px;">actions-</button>
            <button @click="addAction" style="width:70px;height:50px;font-size:13px;">actions+</button>
        </div>
    </div>
</template>

<script scoped>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name:'tool',
    methods:{
        ...mapActions(['add_note','fav_note','del_note','addAction']),
        ...mapMutations(['add','reduce','addn','adds'])
    },
    computed:{
        // 通过computed的计算属性直接赋值
        countafter(){
            return this.$store.state.count+5;
        },
        ...mapState({
            countaftermap:state=>state.count
        }),
        ...mapState(['count','num','text']),

        count2after(){
            return this.$store.state.count2+10
        },
        ...mapGetters(['addcount'])
    }
}
</script>

<style>
 #tool {
    width: 200px;
    height: 600px;
    border: 2px solid #ccc;
    float: left;
}
button {
    width: 100%;
    height: calc(100% / 3.1);        
    font-size: 60px;
}
</style>
