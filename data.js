const movies = [
    { 
    movie : 1,
    titulo : "El Gato con Botas",
    rating : "(5/5 ratings)",
    edad : "10+",
    descripcion1 : "El famoso gato tiene la aventura de su vida cuando une fuerzas",
    descripcion2 : "con Humpty Dumpty y la gata Kitty para robarse al ganso de los huevos de oro.",
    fotob: "https://cartelescine.files.wordpress.com/2022/03/gatobotasbanner.jpg" ,
    fotoc: "https://es.web.img3.acsta.net/pictures/22/06/16/12/54/0504030.jpg"
    }    
    ,
    {
    movie : 2,
    titulo : "Los Minions 3",
    rating : "(5/5 ratings)",
    edad : "12+",
    descripcion1 : "Gru trabaja ahora capturando villanos pero fracasa y es despedido",
    descripcion2 : " Poco después descubre que tiene un hermano, Dru, y juntos se enfrentan a un villano que pretende robar un diamante y destruir Hollywood.",
    fotob: "https://www.showtimeattractions.com.au/wp-content/uploads/Minions-1100x390-banner.jpg" ,
    fotoc: "https://m.media-amazon.com/images/S/pv-target-images/16cef68ee7d9d816d9f943b2d862a1533da95b4049665ec234e6363ca4863d9b.jpg"
    }
    ,
    {
    movie : 3,
    titulo : "Los Tipos Malos",
    rating : "(4.8/5 ratings)",
    edad : "16+",
    descripcion1 : "El señor Lobo, el señor Serpiente, el señor Piraña, el señor Tiburón y la señorita Tarántula",
    descripcion2 : "tienen que fingir que se han convertido en chicos buenos para evitar ir a la cárcel.",
    fotob: "https://www.diariodevenusville.com/wp-content/uploads/2022/03/bad_guys_ver00.jpg" ,
    fotoc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5QhDp2Xgp-fkcpE8BMcTzApDuYqYNkeoa5nKnjTxR6Au-ARUa"
    }
    ,
    {
    movie : 4,
    titulo : "Avengers Infinty War",
    rating : "(5/5 ratings)",
    edad : "16+",
    descripcion1 : "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado",
    descripcion2 : " Si Thanos logra reunir las seis gemas del infinito: poder, tiempo, alma, realidad, mente y espacio, nadie podrá detenerlo.",
    fotob: "https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fkg7dlnm296t01.jpg" ,
    fotoc: "https://es.web.img3.acsta.net/pictures/18/03/16/15/33/3988420.jpg"
    }
    ,
    {
    movie : 5,
    titulo : "Avengers End Game",
    rating : "(5/5 ratings)",
    edad : "16+",
    descripcion1 : "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados",
    descripcion2 : "para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
    fotob: "https://kneelbeforeblog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/04/25033528/AvengersEG2D_banner-Cropped.jpg" ,
    fotoc: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Avenger_Endgame_Poster_Oficial.png/revision/latest?cb=20190326185910&path-prefix=es"
    }
    ,
    {
    movie : 6,
    titulo : "Oppenheimer",
    rating : "(4.5/5 ratings)",
    edad : "16+",
    descripcion1 : "Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan,",
    descripcion2 : "cuyo objetivo consiste en fabricar la primera bomba atómica.",
    fotob: "https://pbs.twimg.com/media/FvnRS1tXwAMZTN-.jpg" ,
    fotoc: "https://pics.filmaffinity.com/Oppenheimer-828933592-large.jpg"
    }
    ,
    {
    movie : 7,
    titulo : "Gran Turismo",
    rating : "(5/5 ratings)",
    edad : "7+",
    descripcion1 : "El joven Jann Mardenborough gana una serie de competiciones del videojuego Gran Turismo organizadas por una importante empresa automovilística ",
    descripcion2 : "y obtiene la oportunidad de convertirse en piloto de carreras profesional. Pero eso no será un juego.",
    fotob: "https://www.thefilmagazine.com/wp-content/uploads/2020/04/Howls-Moving-Castle-Review-Banner.jpg" ,
    fotoc: "https://pics.filmaffinity.com/Gran_Turismo-703890981-large.jpg"
    }
    ,
    {
    movie : 8,
    titulo : "Barbie",
    rating : "(4/5 ratings)",
    edad : "7+",
    descripcion1 : "Después de ser expulsada de Barbieland por no ser una muñeca de aspecto perfecto,",
    descripcion2 : "Barbie parte hacia el mundo humano para encontrar la verdadera felicidad.",
    fotob: "https://i.ytimg.com/vi/fUx_Z2Ue_K4/maxresdefault.jpg" ,
    fotoc: "https://es.web.img2.acsta.net/pictures/23/07/20/11/29/5479684.jpg"
    }
    ,
    {
    movie : 8,
    titulo : "UP",
    rating : "(4.8/5 ratings)",
    edad : "16+",
    descripcion1 : "Carl Fredricksen es un vendedor de globos de 78 años de edad dispuesto a cumplir su sueño: atar miles de globos a su casa y volar a Sudamérica. ",
    descripcion2 : " Sin embargo, descubre demasiado tarde a un joven e inesperado polizón. Lo que en principio será recelo.",
    fotob: "https://img.remediosdigitales.com/e1ecb8/up-disney/1366_2000.jpg" ,
    fotoc: "https://www.funeralnatural.net/sites/default/files/pelicula/imagen/upcartel.jpg"
    }
    ,
    {
    movie : 9,
    titulo : "Mario Bross",
    rating : "(5/5 ratings)",
    edad : "7+",
    descripcion1 : "Dos hermanos plomeros, Mario y Luigi, caen por las alcantarillas y llegan a un mundo subterráneo mágico en el que deben enfrentarse al malvado Bowser para rescatar a la princesa Peach.",
    descripcion2 : "Mario bross.",
    fotob: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7229d393-c3b8-4703-a41e-e876546d2612/dfpzzwa-06cfc6f0-84e7-4cc4-9b21-94673c86ce73.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyMjlkMzkzLWMzYjgtNDcwMy1hNDFlLWU4NzY1NDZkMjYxMlwvZGZwenp3YS0wNmNmYzZmMC04NGU3LTRjYzQtOWIyMS05NDY3M2M4NmNlNzMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u25-PnB_M6LoWhKs2d428nPdKqLAK2RHOXfZ6jE-KVUhttps://i.blogs.es/055d8c/mario-pelicula/1366_2000.jpeg" ,
    fotoc: "https://pics.filmaffinity.com/Super_Mario_Bros_La_pelaicula-521125124-large.jpg"
    }


]

const firstLineMovies = movies.slice(0, 5);
const secondLineMovies = movies.slice(5, 10);