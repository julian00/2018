<template>
  <div class="home">
    <div v-if="errors.length">
      <div v-for="error in errors" :key="error">
        {{ error }}
      </div>
    </div>
    <div v-if="loading">loading</div>
    <div v-if="person">
      <form>
        <label>Nombre </label>
        <el-input v-model="person.name"></el-input>
      </form>

      <br>
      <form>
        <label>Edad </label>
        <el-input-number v-model="person.age" :min="1" :max="120"></el-input-number>
      </form>

      <br>
      <form>
        <label>Sexo </label>
        <el-radio-group v-model="person.gender">
            <el-radio label="Masculino" checked="checked"></el-radio>
            <el-radio label="Femenino"></el-radio>
        </el-radio-group>
      </form>
      <br>

      <el-button type="primary" @click="updatePeople">Modificar</el-button>
              
      <!--{{ person.name }} - {{ person.age }} - {{ person.gender }}-->
    </div>
  </div>
</template>

<script>
import PersonService from '@/services/personService'
import router from '../router.js'

export default {
  name: 'users',
  data() {
    return {
      loading: true,
      person: null,
      errors: []
    }
  },
  created() {
    PersonService.getOne(this.$route.params.id)
      .then((person) => {
        this.person = person;
        this.loading = false;
      })
      .catch((err) => {
        this.errors.push(err);
        this.loading = false;
      });
  },
  methods:{
    updatePeople()
    {
      PersonService.updatePerson(this.person);
      router.push("/");
    }
  }
}
</script>
