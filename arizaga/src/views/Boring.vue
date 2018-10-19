<!--template>
  <div v-if="showGender">
    <div class="container">
      <label for="gender">Mostrar: </label>
      <select id="gender" @change="filtering">
        <option value="" selected>Todos</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
      <br/>
      <br/>
      <div v-if=" 0 < showGender.length ">
        <ul v-for="person in this.showGender" :key="person.id">
          <person-item :showGender="person" :i="person.id" @edit="editItem" @delete="deleteItem"></person-item>
        </ul>
      </div>
      <div v-else >
        No se hallaron resultados
      </div>
     </div>
  </div>
  <div v-else>No hay personas almacenadas</div>
</template-->
<template>
  <div> 
    <button @click="filterMale">Mostrar Varones</button>
    <button @click="filterFemale">Mostrar Mujeres</button>
    <button @click="showAll">Mostrar Todos</button>

      <ul v-if="show==='all'">
        <li v-for="(person,index) in people" :key="index">
          <a @click="deletePeople(person.id)">{{person.name}} {{person.age}} {{person.gender}}</a>
        </li>
      </ul>
      <ul v-else>
			<li v-for="(people,index) in aux" :key="index">
				<a @click="deletePeople(people.id)">{{people.name}} {{people.age}} {{people.gender}}</a>
			</li>
		</ul>
  </div>
</template>

 <script>
import PersonItem from './PersonItem.vue';
import router from '../router.js'
import personService from "@/services/personService";
 export default {
  name: 'Boring',
  components: {
    PersonItem
  },
  data() {
    return {
      people: [],
      filter: "",
      aux:[],
      show: 'all'
    }
  },
  
  mounted: function () {
    this.people = personService.getAll();
  },
  methods: {
    filterMale()
    {
      //debugger;
      this.show='male';
      this.aux=this.people;
      this.aux=this.people.filter(person=>person.gender.toUpperCase()==='M');
    },
    filterFemale()
    {
      this.show='female';
      this.aux=this.people;
      this.aux=this.people.filter(person=>person.gender.toUpperCase()==='F');
    },
    showAll()
    {
      this.show='all';
    },
        

    filtering(event) {
      this.filter = event.target.value;
    },
    deleteItem(i) {
      let toDelete = this.people.find(p => p.id === i);
      let index = this.people.indexOf(toDelete);
      this.people.splice(index, 1);
      personService.save(this.people);
    },
    editItem(i) {
      router.push({ name : 'user', params : {id : i}})
    }
  }
}
</script>
