export default {
    filteredNote:(state)=>{
        if(state.show === 'all'){
            return state.notes
        }else{
            return state.notes.filter((note)=>{
                if(note.fav===true){
                    return note
                }
            })
        }
    },
    addcount:state=>{
        return state.count2+=100;
    }
}