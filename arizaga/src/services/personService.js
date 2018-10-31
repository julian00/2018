function saveStorage(key, value)
{
    localStorage.setItem(key, JSON.stringify(value));  
}

 function getStorage()
 {
    return localStorage["people"] ? JSON.parse(localStorage.getItem("people")) : [];
 }

 /*function getLastId()
 {
     let people=[];
     people = getStorage();
     let id=1;
     for(let p in people)
     {
       id=p.id;
     }
     return this.id;
 }*/
export default 
{
    getAll() {
      return JSON.parse(localStorage.getItem("people")) || [];
    },
    
    getOne(id) {
      return new Promise((res, rej) => {
        try {
          const people = this.getAll();
  
          setTimeout(() => {
            res(people.find(person => person.id === id));
          }, 2000);
        } catch(e) {
          rej(e.toString());
        }
      });
    },

    /*savePerson(person)
    {
      const people = this.getAll();
      debugger;
      let list=[];
      let personAux=
      {
        id:0,
        name:"",
        age:0,
        gender:""
      }
      for(const p in people)
      {
        personAux.id=p.id;
        personAux.name=p.name;
        personAux.age=p.age;
        personAux.gender=p.gender;
        list.push(personAux);
      }
      person.id=list.length+1;
      list.push(person);
      this.save(list);
    },*/
    savePerson(person){
      return new Promise((res, rej) =>
      {
        setTimeout(() =>
        {
          try
          {
            const list = getStorage();  
            //person.id = getLastId() + 1;
            person.id=list.length+1;
            list.push(person);
            saveStorage("people", list);
            res("Agregada correctamente");          
          } 
          catch(e)
          {
            rej("ERROR al agregar (" + e.toString() + ")");
          }
        }, 1000);
      });
    },

   /* updatePersona(nombre, edad, sexo, id)
    {
      return new Promise((res, rej) =>
      {
        setTimeout(() => 
        {
          try{
            const list = getStorage();
            const person = list.find(person => person.id === id);
            this.aux = this.people.filter(person=>person.id===id);
            person.name = nombre;
            person.age = edad;
            person.gender = sexo;
            saveStorage("people", list);
            res("Persona modificada correctamente");          
          } 
          catch(e)
          {
            rej("La persona no pudo ser modificada (" + e.toString() + ")");
          }
        }, 1500);
      });
    },*/

    updatePerson(persona)
    {
      return new Promise((res, rej)=>
      
      {
        setTimeout(()=>
        {
          try
          {
            const list =getStorage();
            let person =list.find(person=> person.id === persona.id);
            person.name=persona.name;
            person.age=persona.age;
            person.gender=persona.gender;
            saveStorage("people", list);
            res("Persona modificada correctamente");
          }
          catch(e)
          {
            rej("Error al modificar(" + e.toString() +")");
          }
        }, 1500);
      });
    },
    
    deletePerson(list)
    {
      return new Promise((res, rej) => 
      {
        setTimeout(() => 
        {
          try
          {
            saveStorage("people", list);
            res("Eliminado correctamente"); 
          } 
          catch(e)
          {
            rej("No pudo ser eliminado (" + e.toString() + ")");
          }
        }, 1000);
      });
    }
    /*save(list)
    {localStorage.setItem("people", JSON.stringify(list));}*/
    
}

