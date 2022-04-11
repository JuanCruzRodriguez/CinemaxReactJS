const cartelera = [
    {
    id: 1,
    nombre: "Scream",
    imagen: {
        url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scream-teaser-poster-1634113036.jpg?resize=480:*"
        },
    imgAlt: "Scream",
    precio: "$800"
    },
    {
    id: 2,
    nombre: "Pasajero 666",
    imagen: {
        url: "https://pbs.twimg.com/media/FCzKFoSWUAUOtwy?format=jpg&name=large"
        },
    imgAlt: "Pasajero 666",
    precio: "$800"
    },
    {
    id: 3,
    nombre: "Moonfall",
    imagen: {
        url: "https://es.web.img3.acsta.net/pictures/22/01/10/10/56/3025068.jpg"
        },    imgAlt: "Moonfall",
    precio: "$800"
    },
    {
    id: 4,
    nombre: "El regreso de Gulliver",
    imagen: {
        url: "https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/BN62ISCDM5CHVBTLYPTTWCHFVM.jpg"
        },    imgAlt: "El regreso de Gulliver",
    precio: "$800"
    },
    {
    id: 5,
    nombre: "Sing 2",
    imagen: {
        url: "https://www.universalpictures.es/tl_files/content/movies/sing2/posters/01.jpg"
        },    imgAlt: "Sing 2",
    precio: "$800"
    },
    {
    id: 6,
    nombre: "Spiderman: No way home",
    imagen: {
        url: "https://img.ecartelera.com/noticias/fotos/66900/66992/2.jpg"
        },    imgAlt: "Spiderman: No way home",
    precio: "$800"
    },
    {
    id: 7,
    nombre: "Muerte en el Nilo",
    imagen: {
        url: "https://mx.web.img3.acsta.net/pictures/22/01/10/20/33/2497860.jpg"
        },    imgAlt: "Muerte en el Nilo",
    precio: "$800"
    },
    {
    id: 8,
    nombre: "Minions 2",
    imagen: {
        url: "https://es.web.img2.acsta.net/pictures/20/02/12/12/26/0641785.jpg"
        },    imgAlt: "Minions 2",
    precio: "$800"
    },
    {
    id: 9,
    nombre: "Uncharted: Fuera del mapa",
    imagen: {
        url: "https://pbs.twimg.com/media/FKm1K9CXsBgZl-g?format=jpg&name=large"
        },    imgAlt: "Uncharted: Fuera del mapa",
    precio: "$800"
    },
    {
    id: 10,
    nombre: "Top Gun 2",
    imagen: {
        url: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/07/top-gun-maverick.jpg?itok=wDoY6ZT9"
        },    imgAlt: "Top Gun 2",
    precio: "$800"
    },
    {
    id: 11,
    nombre: "Ambulancia",
    imagen: {
        url: "https://www.alertageekchile.cl/wp-content/uploads/2022/03/Ambulancia.jpg"
        },    imgAlt: "Ambulancia",
    precio: "$800"
    },
    {
    id: 12,
    nombre: "Sonic 2",
    imagen: {
        url: "https://i.blogs.es/4ccaf1/fgfvoqiviauftw0/450_1000.jpeg"
        },    imgAlt: "Sonic 2",
    precio: "$800"
    }
]

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(cartelera);
        }, 2000)
    })
}