
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
        first_div += '<p>' + element + '<p>'
    });
    $('#div-meet').html(first_div);


    winmoney.forEach(element => {
        second_div += '<p>' + element + '<p>'
    });
    $('#div-win').html(second_div);

    products.forEach(element => {
        third_div += '<p>' + element + '<p>'
    });
    $('#div-pay').html(third_div);

    help.forEach(element => {
        fourth_div += '<p>' + element + '<p>'
    });
    $('#div-help').html(fourth_div);


});