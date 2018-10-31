<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>Para modificar clickear en la persona</p>
    <ul>
      <li v-for="person in people" :key="person.id">
      <router-link :to="{ name: 'users', params: { id: person.id }}">{{ person.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PersonService from '@/services/personService'

export default {
  name: 'home',
  data() {
    return {
      people: []
    }
  },
  components: {
    HelloWorld
  },
  created() {
    this.people = PersonService.getAll();
    //this.people=PersonService.getStorage();
  }
}
</script>
