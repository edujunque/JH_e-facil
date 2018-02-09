$(document).ready(function () {

    // page scrolling
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /* slider */
    $(function () {
        $('.slider').bxSlider({
            mode: 'fade',
            captions: false,
            responsive: true,
            auto: true
        });
    });

    /* menu mobile */
    var larguraTela = $(window).width();
    if (larguraTela < 767) {

        $('.menu').hide();
        $('.area-de-clientes').hide();

        $('.fa-bars').click(function () {
            $('.menu').slideToggle();
        });
        $('.page-scroll').click(function () {
            $('.menu').slideUp();
        });

        $('.fa-user').click(function () {
            $('.area-de-clientes').slideToggle();
        });
    }

    /* vídeo aulas */
    $('.video-1').show();
    $('.video-2').hide();
    $('.video-3').hide();
    $('.video-4').hide();
    $('.video-5').hide();
    $('.video-6').hide();
    $('.video-7').hide();
    $('.link-video-1').click(function () {
        $('iframe').hide();
        $('.video-1').show();
    });
    $('.link-video-2').click(function () {
        $('iframe').hide();
        $('.video-2').show();
    });
    $('.link-video-3').click(function () {
        $('iframe').hide();
        $('.video-3').show();
    });
    $('.link-video-4').click(function () {
        $('iframe').hide();
        $('.video-4').show();
    });
    $('.link-video-5').click(function () {
        $('iframe').hide();
        $('.video-5').show();
    });
    $('.link-video-6').click(function () {
        $('iframe').hide();
        $('.video-6').show();
    });
    $('.link-video-7').click(function () {
        $('iframe').hide();
        $('.video-7').show();
    });

});

// Função para criptografar a senha

function base64_encode(data) {
    
    //   example 1: base64_encode('Kevin van Zonneveld');
    //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    //   example 2: base64_encode('a');
    //   returns 2: 'YQ=='

    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
        ac = 0,
        enc = '',
        tmp_arr = [];

    if (!data) {
        return data;
    }

    do { // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;

        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    
    } while (i < data.length);

    enc = tmp_arr.join('');

    var r = data.length % 3;

    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}

// Função para conferir a consolidadora e criptografar o login

function Consolidadora() {
    
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var sel = document.getElementById('consolidadora').value;

    if (sel == "consolidadora") {
        alert("Selecione uma consolidadora");
    } else {
        document.getElementById("WoobaLogin").value = base64_encode(login);
        document.getElementById("WoobaSenha").value = base64_encode(senha);
        Logar(login, senha, sel);
    }

}

// Função para logar no portal

function Logar(login, senha, consolidadora) {
    
    if (consolidadora == "ancoradouro") {
        var server = Math.floor(Math.random() * 6 + 1)
        document.form.action = "https://ancd.efacilplus.com.br/" + server + "/guiAutenticador.aspx";
        document.form.submit();
    }
    
    if (consolidadora == "grupo brt") {
        var server = Math.floor(Math.random() * 4 + 1)
        document.form.action = "https://brt.efacilplus.com.br/" + server + "/guiAutenticador.aspx";
        document.form.submit();
    }
    
    if (consolidadora == "pvt") {
        document.form.action = "https://pvt.efacilplus.com.br/1/guiAutenticador.aspx";
        document.form.submit();
    }

}

// Função para escolher a consolidadora e redirecionar para a Função LinkEsqueci()

function EsqueciSenha() {
    
    var sel = document.getElementById('consolidadora').value;

    if (sel == "consolidadora") {
        alert("Selecione uma consolidadora");
    } else {
        LinkEsqueci(sel);
    }

}

// Função para ir para o link de Esqueci a Senha

function LinkEsqueci(consolidadora) {
    
    if (consolidadora == "ancoradouro") {
        var server = Math.floor(Math.random() * 6 + 1)
        document.form.action = "https://ancd.efacilplus.com.br/" + server + "/";
        document.form.submit();
    }
    
    if (consolidadora == "grupo brt") {
        var server = Math.floor(Math.random() * 4 + 1)
        document.form.action = "https://brt.efacilplus.com.br/" + server + "/";
        document.form.submit();
    }

    if (consolidadora == "pvt") {
        document.form.action = "https://pvt.efacilplus.com.br/1/";
        document.form.submit();
    }

}