
var data = [
    "Todos"
    ,
    "Prime Video"
    ,
    "Música, CD y vinilos"
    ,
    "Música digital"
    ,
    "Tienda Kindle"
    ,
    "Arte y artesanías"
    ,
    "Automotriz"
    ,
    "Bebé"
    ,
    "Belleza y cuidado personal",
    "Computadoras"
    ,
    "Libros"
    ,
    "Moda"
    ,
    "Hogar y cocina"
    ,
    "Salud y productos para el hogar"
    ,
    "Industrial y científico"
    ,
    "Películas y televisión"
    ,
    "Software"
    ,
    "Deportes y actividades al aire libre"
    ,
    "Electrónicos"

]


var dep_data = ["Departamentos", "Prime Video", "Música, CD y vinilos", "Música digital", "Tienda Kindle", "Arte y artesanías", "Automotriz", "Bebé", "Belleza y cuidado personal", "Computadoras", "Libros", "Moda", "Hogar y cocina", "Salud y productos para el hogar", "Industrial y científico", "Películas y televisión", "Software", "Deportes y actividades al aire libre", "Electrónicos"]

var f_container = [
    { title: '¿Necesitas ayuda?', image: './resources/images/mystery-box.png', description: 'Más información sobre cómo comprar en Amazon', link: 'Más infromación ' },
    { title: 'Ofertas y Promociones', image: './resources/images/gifts.png', description: 'Más información sobre cómo comprar en Amazon', link: 'Más infromación ' },
    { title: '¿Necesitas ayuda?', image: './resources/images/shoe.png', description: 'Más información sobre cómo comprar en Amazon', link: 'Más infromación ' },
]

var meetus = ['<span class="font-bold">Conócenos</span>', 'Trabaja en Amazon', 'Blog', 'Acerca de Amazon', 'Relaciones con los inversionistas', 'Dispositivos Amazon', 'Visita un centro logístico de Amazon'];
var winmoney = ['<span class="font-bold">Gana dinero con nosotros</span>', 'Vende en Amazon', 'Vende tus servicios en Amazon', 'Vende en Amaon Business', 'Vende tus Apps en Amazon', 'Programa de afiliados', 'Anuncia tus productos', 'Pubilca tu libro en Kindle']
var products = ['<span class="font-bold">Productos de Pago Amazon</span>', 'Compra con puntos', 'Recarga tu Saldo', 'Convertidor de Moneda de Amazon'];
var help = ['<span class="font-bold">Podemos ayudarte</span>', 'Tu cuenta', 'Tus pedidos', 'Tarifas de Envío y Políticas', 'Devoluciones y Reemplazos', 'Admistrar dispositivos', 'Amazon Assistant', 'Ayuda']
var order = ['Destacados', 'Precio: de más alto a más bajo', 'Precio: de más bajo a más alto', 'Opinión media de los clientes'];

var detail_products = [
    {
        description: 'MEGNYA Women’s flip Flops Sandals Arch Support Comfortable Walking Summer Water Beachs Slipper',
        views: '55,998',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>21<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>29<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    },
    {
        description: 'Dlgjpa - Zapatillas de agua para mujer de secado rápido y ligero',
        views: '308',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>15<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>39<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: ''
    },
    {
        description: 'Water Shoes for Womens Mens Baregoot Quick-Dry Aqua Socks for Beach Swim Surf Yoga Exercise New Translucent Color Soles',
        views: '55',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>24<sup ' +
            'class="font-normal text-xxs">90</sup> - <sup class="font-normal text-xxs">US$</sup>68<sup ' +
            'class="font-normal text-xxs">60</sup></p>',
        extra: ''
    },
    {
        description: 'CUSHIONAIRE Lane - Sandalia de corcho para mujer con plantilla + comodidad',
        views: '81',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>18<sup ' +
            'class="font-normal text-xxs">88</sup> - <sup class="font-normal text-xxs">US$</sup>13<sup ' +
            'class="font-normal text-xxs">88</sup></p>',
        extra: ''
    }, {
        description: 'MEGNYA Women’s flip Flops Sandals Arch Support Comfortable Walking Summer Water Beachs Slipper',
        views: '55,998',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>21<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>29<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    },
    {
        description: 'Dlgjpa - Zapatillas de agua para mujer de secado rápido y ligero',
        views: '308',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>15<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>39<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    },
    {
        description: 'Water Shoes for Womens Mens Baregoot Quick-Dry Aqua Socks for Beach Swim Surf Yoga Exercise New Translucent Color Soles',
        views: '55',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>24<sup ' +
            'class="font-normal text-xxs">90</sup> - <sup class="font-normal text-xxs">US$</sup>68<sup ' +
            'class="font-normal text-xxs">60</sup></p>',
        extra: ''
    },
    {
        description: 'CUSHIONAIRE Lane - Sandalia de corcho para mujer con plantilla + comodidad',
        views: '81',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>18<sup ' +
            'class="font-normal text-xxs">88</sup> - <sup class="font-normal text-xxs">US$</sup>13<sup ' +
            'class="font-normal text-xxs">88</sup></p>',
        extra: ''
    },
    {
        description: 'MEGNYA Women’s flip Flops Sandals Arch Support Comfortable Walking Summer Water Beachs Slipper',
        views: '55,998',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>21<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>29<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    },
    {
        description: 'Dlgjpa - Zapatillas de agua para mujer de secado rápido y ligero',
        views: '308',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>15<sup ' +
            'class="font-normal text-xxs">99</sup> - <sup class="font-normal text-xxs">US$</sup>39<sup ' +
            'class="font-normal text-xxs">99</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    },
    {
        description: 'Water Shoes for Womens Mens Baregoot Quick-Dry Aqua Socks for Beach Swim Surf Yoga Exercise New Translucent Color Soles',
        views: '55',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>24<sup ' +
            'class="font-normal text-xxs">90</sup> - <sup class="font-normal text-xxs">US$</sup>68<sup ' +
            'class="font-normal text-xxs">60</sup></p>',
        extra: ''
    },
    {
        description: 'CUSHIONAIRE Lane - Sandalia de corcho para mujer con plantilla + comodidad',
        views: '81',
        prices: '<p class="text-sm font-bold"><sup class="font-normal text-xxs">US$</sup>18<sup ' +
            'class="font-normal text-xxs">88</sup> - <sup class="font-normal text-xxs">US$</sup>13<sup ' +
            'class="font-normal text-xxs">88</sup></p>',
        extra: '<p class="text-gray-700 text-xxs"><span class="bg-green-300 text-xs">Ahorra 5%</span>Ahorra 5% con cupón (talles/colores límitados)</p>'
    }

]


var caracteristicas_producto = [

    '100 % poliéster',
    'Importado',
    'Siente la diferencia, duerme mejor y despierta cada mañana sintiéndote renovado y lleno de energía. Sedoso suave, más cómodo y hojas de cama de lujo que puedes encontrar. Lo mejor para cualquier habitación de tu casa, habitación, habitación de huéspedes, sala de niños, RV, casa de día festivo. Idea de regalo para hombres y mujeres, madres y padres día del padre, de San Valentín y la Navidad.',
    'Tamaño Queen, juego de cama de 4 piezas, 1 sábana lisa de 102 x 90 pulgadas, 1 sábana bajera de 80 x 60 pulgadas, 2 fundas de almohada de 20 x 30 pulgadas. Sábana ajustable con bolsillo profundo con elástico alrededor (no sólo las esquinas, como otras sábanas). Se adapta a colchones de hasta 16 pulgadas.',
    'Fácil cuidado, resistente a manchas, la decoloración, resistente a las arrugas. Lavable a máquina en frío. Se seca rápido en secadora baja. Más duradero que el algodón. Hipoalergénico y resistente a los ácaros del polvo.',
    'Más alta calidad: hecho de los materiales de la más alta calidad y mano de obra, por eso sabes lo que dura. La fabulosa selección de colores hará que tu habitación parezca sacada de una revista.'
]

$(document).ready(function () {
    var deps = "";
    data.forEach(element => {
        deps += "<option>" + element + "</option>\n"
    });

    $('#select-box').html(deps);

    var dep2 = "";
    dep_data.forEach(element => {
        dep2 += "<option class='text-black'>" + element + "</option>\n"
    });
    $('#departamentos').html(dep2);
    var first = "";
    f_container.forEach(element => {
        first += "<div class='flex flex-wrap items-center h-72 w-68 bg-white py-5 px-5'><h1>" + element.title + "</h1><img src='" + element.image + "' class='w-9/12' alt=''><div><p class='text-xs font-normal'>" + element.description + "</p> <br><p class='text-xs text-blue-500'>" + element.link + "</p></div></div>"
    });
    $('#first-container').html(first);


    $('.carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });


    var first_div = "";
    var second_div = "";
    var third_div = "";
    var fourth_div = "";

    meetus.forEach(element => {
        first_div += '<p>' + element + '</p>'
    });
    $('#div-meet').html(first_div);


    winmoney.forEach(element => {
        second_div += '<p>' + element + '</p>'
    });
    $('#div-win').html(second_div);

    products.forEach(element => {
        third_div += '<p>' + element + '</p>'
    });
    $('#div-pay').html(third_div);

    help.forEach(element => {
        fourth_div += '<p>' + element + '</p>'
    });
    $('#div-help').html(fourth_div);


    var orderString = "";

    order.forEach(element => {
        orderString += '<option class="text-black">Ordernar por:   ' + element + '</option>'
    });
    $('#order-by').html(orderString);

    var sheet_product = "";


    detail_products.forEach(element => {
        sheet_product += '<div class="flex flex-wrap mr-2 justify-center w-48 px-4 pt-2 pb-8 border-b border-gray-400">' +
            '<img src="./resources/images/sabanas.png" alt="">' +
            ' <p class="text-xs font-bold mb-2">' + element.description + '</p>' +
            '<div class="flex text-amazon text-yellow-amazon "><span class="icon-star "></span><span class="icon-star">' +
            '</span><span class="icon-star"></span><span class="icon-star"></span><span class="icon-star-empty"></span><svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">' +
            '<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg><span class="text-blue-500 text-xxs">' + element.views +
            '</span></div>' +
            element.prices +
            element.extra + '</div>'
    });
    $('#sheets').html(sheet_product);



    $("body").on("click", ".label-first", function (e) {
        var getValue = $(this).attr("value");
        var goToParent = $(this).parents(".select-size");
        var getInputRadio = goToParent.find("input[id = " + getValue + "]");
        console.log(getInputRadio.attr("id"));

        //alert(getValue)
        // var radioValue = $("input[name='s-size']:checked").val();
        $('#tamanio').html(getValue);

    });


    $("body").on("click", ".label-special", function (e) {
        var getValue = $(this).attr("value");
        var goToParent = $(this).parents(".select-size-special");
        var getInputRadio = goToParent.find("input[id = " + getValue + "]");
        console.log(getInputRadio.attr("id"));

        //alert(getValue)
        // var radioValue = $("input[name='s-size']:checked").val();
        $('#sheet-color').html(getValue);

    });

    var caract = '';
    caracteristicas_producto.forEach(element => {
        caract += '<li>' + element + '</li>';
    });
    $('#caracteristicas-producto').html(caract);

    var cantidad = "";

    for (let index = 1; index <= 14; index++) {
        cantidad += "<option>" + index + "</option>\n"

    }

    $('#select-quantity').html(cantidad);

});

