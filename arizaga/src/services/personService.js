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
     const people = getStorage();
     let id;
     for(let p in people)
     {
       id=p.id;
     }
     return id;
 }*/
export default 
{
    /*getAll() 
    {
      return JSON.parse(localStorage.getItem("people")) || [];
      //return JSON.parse(localStorage.getItem("people") || []);
    },*/
    
    getAll() 
    {
      return new Promise((res, rej) =>
      {
        setTimeout(() => 
        {
          try
          {
            res(getStorage());
          } 
          catch(e)
          {
            rej("Ocurrió un error al traer la lista de personas (" + e.toString() + ")");
          }
        }, 1500);
      });
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
            res("Persona creada correctamente");          
          } 
          catch(e)
          {
            rej("La persona no pudo ser creada (" + e.toString() + ")");
          }
        }, 1500);
      });
    },

    updatePersona(nombre, edad, sexo, id)
    {
      return new Promise((res, rej) =>
      {
        setTimeout(() => 
        {
          try{
            const list = getStorage();
            const persona = list.find(persona => persona.id === id);
            persona.nombre = nombre;
            persona.edad = edad;
            persona.sexo = sexo;
            saveStorage("people", list);
            res("Persona modificada correctamente");          
          } 
          catch(e)
          {
            rej("La persona no pudo ser modificada (" + e.toString() + ")");
          }
        }, 1500);
      });
    },
    
    deletePersona(id)
    {
      return new Promise((res, rej) => 
      {
        setTimeout(() => 
        {
          try
          {
            let list = getStorage();
            list = list.filter(persona => persona.id !== id);
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

