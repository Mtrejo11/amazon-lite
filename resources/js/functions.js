
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
    }
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
            element.prices +
            element.extra+'</div>'
    });
    $('#sheets').html(sheet_product);

});
