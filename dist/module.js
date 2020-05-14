class Module {
  constructor() {
    this.cityData = [];
  }

  getCityData(value) {
  return  $.get(`reqest/${value}`).then((data) => {
     
     if (this.cityData.some(c=>c.name==data.name)){
         const index = this.cityData.findIndex(c=>c.name==data.name)
         this.cityData.splice(index,1,data)
         data.isSave=true
     } else {
       data.isSave=false   
      this.cityData.push(data);
      console.log(this.cityData);}
    });
  }

/* async getDataFromDB() {
   this.cityData = await $.get(`/cities`)
     
        console.log(this.cityData);
      
  } */

   getDataFromDB(){
   return $.get(`/cities`).then((data)=>{      
     data.forEach(d => d.isSave=true)  
     this.cityData=data
      console.log(this.cityData)
      })
  }

  saveCity(city) {
   return $.post(`/city`,city,function (data) {
        console.log(data);
      }); 
  }
  removeCity(name) {
   return $.ajax({
        method: "DELETE",
        url: `/city/${name}`,
        success: (data) => {
          console.log(data)
        },
  
        error: function (xhr, text, error) {
          console.log(text);
        },
      }); 
  }
}

const module = new Module();
/* module.getDataFromDB(); */
/* id="5ebc44f3b1957e2a5091f8d0"
module.removeCity(id) */



