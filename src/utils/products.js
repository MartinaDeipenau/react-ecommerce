const products = [
    {
        id: 1,
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSo53dCXCj74sgr55UIIuK0xYgTASjpCZTzs9E2CtDr4yal9vfXj9u2LNwCsOE2Wi62BB3zxv5bw5SLK19gqUkzU90Dr6Lbv952nPtLcZ0Umrnwpy5xWknehA&usqp=CAE",
        title: "Cama acolchonada",
        price: 7000,
        categoryId: 1,
        stock: 23,
        description: "Suave y comoda, le brinda comodidad total a las mascotas. Medida de: 45x40x30. Tela tipo peluche."
    },
    {
        id: 2,
        image: "https://http2.mlstatic.com/D_NQ_NP_993100-MLA51705797633_092022-O.webp",
        title: "Comedero automatico",
        price: 27.500,
        categoryId: 2,
        stock: 30,
        description: "Lo mejor para tu mascota.El comedero automático para mascotas de 4L con temporizador puede dispensar alimentos secos de 1 a 4 comidas por día.Programación de horarios.Configuración de raciones diarias.Compartimento para bolsa deshidratante.Plato plástico removible."
    },
    {
        id: 3,
        image: "https://i.pinimg.com/550x/13/b1/f3/13b1f33101bd3364abee0becd575484b.jpg",
        title: "Collares",
        price: 400,
        categoryId: 2,
        stock: 16,
        description: "Diferentes medidas y colores.Ideal para correa."
    },
    {
        id: 4,
        image: "https://cdnlaol.laanonimaonline.com/web/images/fotos/b/0000038000/22358_2.jpg",
        title: "Cama curver",
        price: 12.000,
        categoryId: 1,
        stock: 15,
        description: "La bandeja de arena le permite cambiar fácilmente la arena para gatos con el práctico sistema de cajones.También puede quitar todo el capó y levantarlo usando la manija de transporte.La bandeja de arena para gatos está hecha con un filtro de carbón activado, para ayudar a prevenir olores desagradables."
    },
    {
        id: 5,
        image: "https://falabella.scene7.com/is/image/FalabellaPE/19140320_1?wid=800&hei=800&qlt=70",
        title: "Mochila tipo capsula",
        price: 8900,
        categoryId: 2,
        stock: 10,
        description: "Mochila para transportar a tu mascota, con visor transparente."
    },
    {
        id: 6,
        image: "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000016000/16774.jpg",
        title: "Cama y transportadora de gatos",
        price: 17.560,
        categoryId: 1,
        stock: 34,
        description: "Bunkbed 3 en 1.Funcional, práctico y elegante, este producto es una pieza de mobiliario modular para mascotas adaptado a las necesidades de su familia.Una casa para mascotas formada por una cama inferior cerrada y otra superior abierta, que incluye piezas adicionales para convertirla en un trasporte o en una jaula.Facil de limpiar."
    },
    {
        id: 7,
        image: "https://nanolog.vteximg.com.br/arquivos/ids/165028-1000-1000/Sin-titulo-1.jpg?v=637388049240500000",
        title: "Comedero economico",
        price: 650,
        categoryId: 2,
        stock: 22,
        description: "Varios colores.Practico para tu mascota y para transportar."
    },
    {
        id: 8,
        image: "https://www.diariodesevilla.es/2021/04/26/sociedad/Arbol-rascador_1568553352_137656221_1200x2290.jpg",
        title: "Rascador",
        price: 9300,
        categoryId: 2,
        stock: 8,
        description: "Contiene diferentes pisos para que tu gato pueda moverse y divertirse.Tela suave y lavable."
    },
    {
        id: 9,
        image: "https://m.media-amazon.com/images/I/510h1FSgeJL._AC_SL1024_.jpg",
        title: "Comedero y bebedero",
        price: 5.000,
        categoryId: 2,
        stock: 11,
        description: "Comodo y practico.Comedero elevado para la comodidad de tu mascota."
    },
    {
        id: 10,
        image: "https://cdn.shopify.com/s/files/1/0549/6848/4082/products/alimento-vitalcan-premium-gato-adulto_500x.png?v=1651175209",
        title: "Vital Can premium ADULTOS",
        price: 6000,
        categoryId: 3,
        stock: 48,
        description: "De 7,5kg.Gatos adultos."
    },
    {
        id: 11,
        image: "https://jumboargentina.vtexassets.com/arquivos/ids/624384-800-auto?v=637508133675800000&width=800&height=auto&aspect=true",
        title: "Sabrositos gatos ADULTOS",
        price: 1500,
        categoryId: 3,
        stock: 29,
        description: "De 3kg.Gatos adultos.Mas economico."
    },
    {
        id: 12,
        image: "https://puppis.vteximg.com.br/arquivos/ids/184564-1000-1000/150067.png?v=637750189284800000",
        title: "Purina excellent",
        price: 9860,
        categoryId: 3,
        stock: 16,
        description: "De 7,5kg.Gatos en crecimiento."
    },
    {
        id: 13,
        image: "https://i.pinimg.com/originals/04/37/18/0437183181935a606a6178c883216425.jpg",
        title: "Tapados",
        price: 800,
        categoryId: 2,
        stock: 17,
        description: "Diferentes talles y colores.Ideal para que tu mascota no pase frio.Tela elastizada."
    },
    {
        id: 14,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6IfY23ldM7G6UgqbyqN4JbL3BDtLFq7nmM2Yk3HTlNChZ0A0lKldvVJyv1s4xheEMjkNxhNgWtexLq_BgTeCyu1-oLM_q1Z4DvvYpXm4ePergsPmo2lgV&usqp=CAE",
        title: "Whiskas",
        price: 2900,
        categoryId: 3,
        stock: 27,
        description: "De 3kg.Para gatos pequeños."
    },
    {
        id: 15,
        image: "https://jumboargentina.vteximg.com.br/arquivos/ids/681933-1000-1000/Alim-Gati-Salmon-Y-Pollo-3k-1-882646.jpg?v=637757194101030000",
        title: "Alimento Gati",
        price: 1730,
        categoryId: 3,
        stock: 32,
        description: "De 3kg. Pollo y salmon."
    }
]

export default products;