<template>
  <li class="liItem">
    {{person.name}} de 
    {{person.age}} años,  
    {{person.gender}}
    <button class="button" @click="editMe"><i >{{editBtn}}</i></button>
    <button class="button" @click="deleteMe"><i >delete</i></button>
  </li>
</template>
<script>
export default {
  name: 'person-item',
  data(){
    return{
      editBtn : "edit"
    }
  },
  props: {
    person: Object,
  },
  methods: {
    editMe(){
      this.$emit('edit',this.person.id);
      if(this.editBtn === "edit"){
        this.editBtn = "cancel";
      } else {
        this.editBtn = "edit";
      }
    },
    deleteMe(){
      this.$emit('delete', this.person.id);
    }
  }
}
</script>