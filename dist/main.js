//start app render defult
const fetchgetDataFromDB = function () {
 module.getDataFromDB().then(function(){
 render.renderData( module.cityData)   
})
}
fetchgetDataFromDB()
//search 
$('.fa-search').on('click',function(){
const name =$(".input").val().charAt(0).toUpperCase() + $(".input").val().slice(1);  
fetchgetCityData(name) 
})

const fetchgetCityData = function (name) {
    module.getCityData(name).then(function(){
    render.renderData( module.cityData)   
   })
   }

//add city
$('.results').on('click',".fa-plus-circle",function(){
const name = $(this).closest('.box').find(".name").data().id
const data = module.cityData.find(c=>c.name==name)
fetchsaveCity(data)
})
const fetchsaveCity = function (data) {
    module.saveCity(data).then(function(){
        fetchgetDataFromDB()  
   })
   }

//remove city 
$('.results').on('click',".fa-minus-circle",function(){
    const name = $(this).closest('.box').find(".name").data().id
    /* const data = module.cityData.find(c=>c.name==name)
    fetchsaveCity(data) */
    fetchsRemoveCity(name)
    })

    const fetchsRemoveCity = function (name) {
        module.removeCity(name).then(function(){
            fetchgetDataFromDB()  
       })
       }
    








