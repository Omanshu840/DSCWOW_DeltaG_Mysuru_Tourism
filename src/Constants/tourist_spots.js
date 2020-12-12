const tourist_spots = [
    {
        id: 0,
        name: "Mysore Palace",
        distance_from_City_centre: "2.0 km",
        img_Link: require('../img/places/mysore_palace.jpeg'),
        description: "The former residence of the royal family of Mysore, the Mysore Palace is an extremely breath-taking example of the Indo-Sarcenic style of architecture. It was built in the year 1912 for the 24th Ruler of the Wodeyar Dynasty, and is till date one of the biggest palaces in the country. It's one of the most popular and well known tourist attractions in India. ",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607589636070!6m8!1m7!1sv3SYK8UGe3GOzSLk4YCnTg!2m2!1d12.3051957008934!2d76.65555769160028!3f275.53764873896563!4f2.254984039381114!5f0.7820865974627469"
    },
    {
        id: 1,
        name: "Somnathpur Temple",
        distance_from_City_centre: "26 km",
        img_Link: require('../img/places/somnathpur.jpeg'),
        description: "The village is named after Somnath, the commander of the Hoysala army who founded this place. It has a perfect natural setting for a family picnic. Also, the Somnathpur temple is a classic example of the stone carvings in Hoysala architecture. ",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607603136538!6m8!1m7!1sCAoSLEFGMVFpcE1jYXNFd1FmWkgyNXNSRU1ySTJ3M05BTjE0b2JsT0pJaDloU095!2m2!1d12.27582494167125!2d76.88168551772833!3f260.436759799684!4f-0.26503225707540423!5f0.7820865974627469"
    },
    {
        id: 2,
        name: "Sri Chamundeshwari Temple",
        distance_from_City_centre: "4 km",
        img_Link: require('../img/places/chamundeshwari.jpeg'),
        description: "Built atop the Chamundi Hills, this temple dates back to the 12th century. The idol of the main deity is made of gold. Also featured in this temple is a intricately engraved seven storey Gopuram and a silver plated entrance. ",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607603443894!6m8!1m7!1sCAoSLEFGMVFpcE9tQ2xPUmFmdGNSQVpVZW9QTEJDOGs2SThuM0VyWi15WW1pUmlk!2m2!1d12.27258420199774!2d76.6710590198636!3f220.02604283852736!4f13.561805741872917!5f0.7820865974627469"
    },
    {
        id: 3,
        name: "Brindavan Gardens",
        distance_from_City_centre: "16 km",
        img_Link: require('../img/places/brindavan_gardens.jpeg'),
        description: "Built across the Kaveri river, these beautiful gardens were constructed by Krishnaraja Wodeyar. These gardens spread over 60 acres of land and were modeled after the Shalimar gardens of Kashmir. The beauty of these gardens multiplies in the evenings when the fountains light up in various colors. ",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704907571!6m8!1m7!1sCAoSLEFGMVFpcE5lalpDbXc1dGJpRm84aDJjbXdYMEVpbEh4Rjd3dUlfRlR2WGlf!2m2!1d12.42061486581008!2d76.57265447080135!3f347.1588982008494!4f14.242434007507455!5f0.7820865974627469"
    },
    {
        id: 4,
        name: "Mysore Zoo",
        distance_from_City_centre: "3 km",
        img_Link: require('../img/places/mysore_zoo.jpeg'),
        description: "One of the best zoological gardens in India, it was established in the year 1892 by Maharaja Chamaraja Wodeyar for the royals and handed over to the Department of Parks and Gardens of the State Govt on attaining freedom. Along with being home to various species of birds, mammals and reptiles, this zoo also engages in captive breeding of exotic and endangered species.",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704758918!6m8!1m7!1sCAoSLEFGMVFpcFA1aDNROTNSTWFlMkxHcXBNQVlYRkY3bElPbFVmb0EzOVRqYzZr!2m2!1d12.30265975971986!2d76.66349418461323!3f33.49630742108195!4f-14.504444621075521!5f0.7820865974627469>"
    },
    {
        id: 5,
        name: "Shuka Vana",
        distance_from_City_centre: "2 km",
        img_Link: require('../img/places/shuka_vana.jpeg'),
        description: "Home to over 2000 birds, the Shuka Vana in Mysore currently holds the record for most bird species in an aviary in the Guinness Book of World Records. This unique park, commonly known as parrot park, is a part of the Avadhoota Datta Peetham in the Sri Ganapathi Sachidananda Ashram, and also serves as a rehabilitation centre for abused, injured and abandoned birds.",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704659053!6m8!1m7!1sCAoSLEFGMVFpcFBMeXIxUmt2b3RoQXZlMURwLW9LQzh2Qk1PVW9MSVVvdFRNU29Z!2m2!1d12.28436793652048!2d76.65835539547543!3f169.64378314395083!4f17.15103928479759!5f0.7820865974627469" 
    },
    {
        id: 6,
        name: "Bonsai Garden",
        distance_from_City_centre: "2 km",
        img_Link: require('../img/places/bonsai_garden.jpeg'),
        description: "The Bonsai Garden of Mysore is home to over a 100 different varieties of Bonsai trees spread across a vast estate of about 4 acres. It is a part of the Avadoota Datta Peetham of the Sri Ganapathi Sachidananda Ashrama.",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704583915!6m8!1m7!1sCAoSLEFGMVFpcFA4MEdBck00bFlLLTBaUTdrYVFHLWFFdTFUanNMYXFOQmVaTWlG!2m2!1d12.28424569862245!2d76.6577810794115!3f185.74105066921587!4f7.044720078177548!5f0.7820865974627469"
    },
    {
        id: 7,
        name: "St. Philomena's Church",
        distance_from_City_centre: "3 km",
        img_Link: require('../img/places/st_philomena_church.jpeg'),
        description: "Recognized as the second tallest church of Asia, St. Philomena's Church was constructed to pay tribute to the Catholic Saint and martyr of Roman Catholic Church, Saint Philomena. It is one of the most important historical sites in Mysore and is frequently visited by tourists from all over the country. ",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704317559!6m8!1m7!1sCAoSLEFGMVFpcE9YR1EzQlR5dERTYjI4LThxd2ZXSGtIc2pDWk0tUjc3cFRVQzkx!2m2!1d12.3210293!2d76.6583484!3f359.26066318147844!4f41.889678952231975!5f0.7820865974627469"
    },
    {
        id: 8,
        name: "Jaganmohan Palace",
        distance_from_City_centre: "2 km",
        img_Link: require('../img/places/jaganmohan_palace.jpeg'),
        description: " The palace that housed the royals before the construction of The Mysore palace, this structure displays various paintings of the past kings of Mysore and is one of the oldest buildings in the city.",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704219818!6m8!1m7!1sCAoSLEFGMVFpcE5yTVpTaUY1cGNFUmt4cnE0bXZOaDBpZW85bG1Tel9zRWlpdVlG!2m2!1d12.3067858!2d76.65026499999999!3f2.567723695032612!4f10.793255587452364!5f0.7820865974627469"
    },
    {
        id: 9,
        name: "Folklore Museum",
        distance_from_City_centre: "1 km",
        img_Link: require('../img/places/folklore_museum.jpeg'),
        description: "A part of the Mysore University, the museum is home to one of the most elaborate collections of folk art, products and articles. Visit the museum to witness one of the most sprawling depictions of the state's folk art A part of the Mysore University, the museum is home to one of the most elaborate collections of folk art, products and articles. Visit the museum to witness one of the most sprawling depictions of the state's folk art.",
        street_view_url: "https://www.google.com/maps/embed?pb=!4v1607704085681!6m8!1m7!1sCAoSLEFGMVFpcFB0REROcXF4NVBXMDgydWJZWjZPMWl3STdLRTBiempIeVZlaVlR!2m2!1d12.3134478!2d76.6227378!3f159.4452587549798!4f-0.8229030649897027!5f0.7820865974627469"
    }

]

export default tourist_spots;
