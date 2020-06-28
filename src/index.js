const homePage = require('./src/homePage');
const contacto = require('./src/contacto');
const enCartelera = require('./src/enCartelera');
const masVotadas = require('./src/masVotadas');
const preguntasFrecuentes = require('./src/preguntasfrecuentes');
const sucursales = require('./src/sucursales');
let index = {
    homePage: function(res) {
        res.write(homePage.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + homePage.cantidad())
        res.write('\n\n')
        res.write(('Listado de Peliculas disponibles\n').toUpperCase())
        res.write('\n\n')

        let titleMovies = homePage.listarPelis();
        for (title of titleMovies) {
            res.write(title)
            res.write('\n')
        }
        res.write('\n')
        res.end(`Recordá que podes visitar las secciones:
        i. En Cartelera
        ii. Más Votadas
        iii. Sucursales
        iv. Contacto
        v. Preguntas Frecuentes`)
    },
    enCartelera: function(res) {
        res.write(enCartelera.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + homePage.cantidad())
        res.write('\n\n')
        res.write(('Listado de Peliculas en Cartelera\n').toUpperCase())
        res.write('\n\n')
        let movies = enCartelera.listarPelis();
        movies.forEach(function(movie) {
            res.write('\n')
            res.write(movie.title)
            res.write('\n')
            res.write('\n')
            res.write(movie.overview)
            res.write('\n')


        })
        res.end()
    },
    masVotadas: function(res) {
        res.write(masVotadas.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + masVotadas.cantidad())
        res.write('\n\n')
        res.write(('Listado de Peliculas de mayor Rating\n').toUpperCase())
        res.write('\n\n')
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie) {
            res.write('\n')
            res.write(movie.title + "rating: " + movie.vote_average)
            res.write('\n')
            res.write('\n')
            res.write(movie.overview)
            res.write('\n')


        })
        res.end()
    },
    sucursales: function(res) {
        res.write(sucursales.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de películas en cartelera: ' + sucursales.cantidad())
        res.write('\n\n')
        res.write(('Listado de Salas disponibles\n').toUpperCase())
        res.write('\n\n')
        let theathers = sucursales.listarCines();
        theathers.forEach(function(theather) {
            res.write('\n')
            res.write(theather.name)
            res.write('\n')
            res.write(theather.address)
            res.write('\n\n')
            res.write(theather.description)
            res.write('\n')
        })
        res.end()
    },
    contacto: function(res) {
        res.write(contacto.titulo);
        res.write('\n')
        res.write('\n\n')
        res.write(contacto.contenido)
        res.write('\n\n')
        res.end()
    },
    preguntasFrencuentes: function(res) {
        res.write(preguntasFrencuentes.titulo)
        res.write('\n')
        res.write('\n\n')
        res.write('Total de preguntas: ' + preguntasFrencuentes.cantidad())
        res.write('\n\n')
        res.write(('Listado de Preguntas Frecuentes\n').toUpperCase())
        res.write('\n\n')

        let faqs = preguntasFrencuentes.listarFaqs();
        for (faq of faqs) {
            res.write('Pregunta: ' + faq.faq_title)
            res.write('\n')
            res.write('Respuesta: ' + faq.faq_answer)
            res.write('\n')

        }
        res.write('\n')

        res.end()
    }

}
 

module.exports = index