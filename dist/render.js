class Render {
    constructor(){

    }
    renderData(city){
    const source = $('#city-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({city:city})
    $('.results').empty()
    $('.results').append(newHTML)
  
}

}

const render= new Render


