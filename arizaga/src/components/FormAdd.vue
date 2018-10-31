<template>
    <div class="formAdd">
        <el-form ref="form" :model="form" label-width="120px">

            <el-form-item label="Nombre">
                <el-input v-model="person.name">
                </el-input>
            </el-form-item>

            <el-form-item label="Edad">
                <el-input-number v-model="person.age" :min="1" :max="120"></el-input-number>
            </el-form-item>
            
            <el-form-item label="Sexo">
                <el-radio-group v-model="person.gender">
                    <el-radio label="Masculino" checked="checked"></el-radio>
                    <el-radio label="Femenino"></el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="addPeople">Agregar</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    //import router from "@/router"
    import PersonService from '@/services/personService'
    
    export default {
        name: 'FormAdd',
        data() {
        return {
             person: {
                id: 0,
                name: "",
                age: 0,
                gender: "Masculino"
            }
        }
        },
        methods: {
        addPeople()
		{
            if(this.formOk())
            {
                PersonService.savePerson(this.person);
                //router.push("/");
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
            if(this.person.name)
                return true;
        },
        }
    }
</script>