<template>
  <div class="add">
    <form class="formulario">
        <h1>Ingresar datos de las personas</h1>
        <label>Nombre</label>
        <input type="text" autofocus placeholder="Ingrese su nombre" v-model="person.name">
        <br>
        <br>
        <label>Edad</label>
        <input type="number" v-model="person.age" min="0">
        <br>
        <br>
        <label>Sexo</label>
       
        <select placeholder="Ingrese su Sexo" v-model="person.gender">
            <option value="F">F</option>
            <option value="M">M</option>
        </select>
        <br>
        <br>
     
        <button @click="addPeople">Agregar</button>
    </form>    
  </div>
</template>

<script>
import router from "@/router";
import PersonService from '@/services/personService'

export default {
    name: 'add',
    data() {
        return {
            //show: false,
            
            person: {
                id: 0,
                name: "",
                age: 0,
                gender: "M"
            }
        }
    },
    methods: {
		addPeople()
		{
            if(this.formOk())
            {
                event.preventDefault();
                PersonService.savePerson(this.person);
                event.preventDefault();
                router.push("/boring");
            }
            else
                alert("salame");
        },
        clearForm()
        {
            this.person.name='';
            this.person.age=0;
        },
        formOk()
        {
            if(this.person.name&&this.person.age>=0)
                return true;
        },
    }
}
        

/*
        agregarPersona()
				{
		           	this.personas.push(Object.assign({}, this.persona));
		           	let personasText = JSON.stringify(this.personas);
		           	localStorage.setItem("contactos", personasText);
		           	this.limpiarPersona(); 
					this.mensaje=true;
				},

				cargarPersona(person)
				{
		            this.persona.nombre = person.nombre;
		            this.persona.apellido = person.apellido;
		            this.persona.direccion = person.direccion;
		            this.persona.telefono = person.telefono;
		            this.persona.mail = person.mail;
		            this.persona.sexo = person.sexo;
		        },

				borrarPersona(person)
				{
	                let aux= this.cargarPersona(person, this.personas);
	                while(this.personas[this.buscarIndice()])
	                    pos++;
	                this.personas.splice(pos,1);
	                if(this.personas.length == 0)
	                    localStorage.clear();
	                else
	                {
	                    personasText = JSON.stringify(this.personas);
	                    localStorage.setItem("contactos", personasText);
	                }
		        },

				

				cambiarVista(vista)
				{
					this.vista=vista;
					this.mensaje=false;
				},

				cerrarMensaje()
				{
					this.mensaje=false;
				},
				*/


</script>

