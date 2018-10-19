<template>
  <div class="home">
    <div v-if="errors.length">
      <div v-for="error in errors" :key="error">
        {{ error }}
      </div>
    </div>
    <div v-if="loading">loading</div>
    <div v-if="person">
      {{ person.name }} - {{ person.age }} - {{ person.gender }}
    </div>
  </div>
</template>

<script>
import PersonService from '@/services/personService'

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
  }
}
</script>
