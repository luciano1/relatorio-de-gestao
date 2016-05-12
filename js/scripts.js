/*******************************************************************************************
                RELATÓRIO DE ATIVIDADES 2015 - UNIMONTES 

        Desenvolvido pela Diretoria de Tecnologia da Informação - DTI
                     Dezembro de 2015 a maio de 2016
     Repositório do Projeto: https://github.com/JessicaFFerreira/relatorio-de-gestao

Jéssica Ferreira / Marcony Caldeira / Tarcisio Batista / Fellipe Botelho / Rodrigo Oliveira 

*******************************************************************************************/
$(document).ready(function() {
    //Pausar todos os carouséis
    /*$('.carousel').carousel('pause');
    $('#carouselAtividades').carousel('pause');
    $('#carouselEnsino').carousel('pause');
    $('#carouselcead').carousel('pause');
    $('#carouselpos').carousel('pause');
    $('#carouselExtensao').carousel('pause');
    $('#carouselExtensao').carousel(0);
    $('#carouselpesquisa').carousel('pause');
    $('#carouselpesquisa').carousel(0);

    $('#carouselBiblioteca').carousel('pause');
    $('#carouselProcessosSeletivos').carousel('pause');
    $('#carouselHU').carousel('pause');
    $('#carouselCepedor').carousel('pause');
    $('#carouselEditora').carousel('pause');
    $('#carouselSaj').carousel('pause');
    $('#carouselIntercambio').carousel('pause');
    $('#carouselMuseu').carousel('pause');
    $('#carouselAscom').carousel('pause');
    //$('#carouselMidias').carousel('pause');
    $('#carouselRadio').carousel('pause');
    $('#carouselImprensa').carousel('pause');
    $('#carouselInfraestrutura').carousel('pause');
    $('#carouselOrcamentoefinancas').carousel('pause');

    */

    $('.right').click(function() {
        $('.carousel').carousel('next');
    })
    $('.left').click(function() {
        $('.carousel').carousel('prev');

    })

});
$(document).ready(function() {
    if (($(window).width()) < 980) {
        location.href = "m.index.html";
    }
    $('.metade-esquerda, .metade-direita').height($(window).height());


    //Efeitos da timeline ao passar o cursor do mouse

    $('#list1').hover(function() {
        $(".list_effect1").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect1").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list2').hover(function() {
        $(".list_effect2").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect2").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list3').hover(function() {
        $(".list_effect3").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect3").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list4').hover(function() {
        $(".list_effect4").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect4").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list5').hover(function() {
        $(".list_effect5").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect5").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list6').hover(function() {
        $(".list_effect6").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect6").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list7').hover(function() {
        $(".list_effect7").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect7").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list8').hover(function() {
        $(".list_effect8").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect8").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list9').hover(function() {
        $(".list_effect9").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect9").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list10').hover(function() {
        $(".list_effect10").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect10").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list11').hover(function() {
        $(".list_effect11").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect11").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list12').hover(function() {
        $(".list_effect12").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect12").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list13').hover(function() {
        $(".list_effect13").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect13").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list14').hover(function() {
        $(".list_effect14").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect14").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list15').hover(function() {
        $(".list_effect15").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect15").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list16').hover(function() {
        $(".list_effect16").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect16").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list17').hover(function() {
        $(".list_effect17").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect17").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list18').hover(function() {
        $(".list_effect18").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect18").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list19').hover(function() {
        $(".list_effect19").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect19").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list20').hover(function() {
        $(".list_effect20").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect20").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list21').hover(function() {
        $(".list_effect21").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect21").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list22').hover(function() {
        $(".list_effect22").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect22").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list23').hover(function() {
        $(".list_effect23").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect23").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list24').hover(function() {
        $(".list_effect24").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect24").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list25').hover(function() {
        $(".list_effect25").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect25").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list26').hover(function() {
        $(".list_effect26").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect26").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list27').hover(function() {
        $(".list_effect27").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect27").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
    $('#list28').hover(function() {
        $(".list_effect28").animate({
            opacity: 1,
        }, 200);
    }, function() {
        $(".list_effect28").animate({
            opacity: 0,
        }, 200);
    });

    //-------------------------------------------------
});


//Função que aplica efeito de transição na logomarca da unimontes no centro da página
function EfeitoLogo(efeito, img) {
    $("#logocentral").toggle(efeito, 800, function() {
        $('#logocentral').attr("src", "img/" + img + ".png");
        $("#logocentral").toggle(efeito, 400, function() {
            $('#logocentral').attr("src", "img/" + img + ".png");
        });
    });
}


//Função que aplica os efeitos de transições, mudança de cores
function EfeitoMetade(efeito, img, margin, coricone, cortexto, imgbackground, corbody) {


    $(".fa-circle").css("color", cortexto);
    $("body").css("background", corbody);


    $(".metade-esquerda").toggle(efeito, 800, function() {

        $('.encapsulador-conteudo').css("margin-top", margin + "px");
        $(".metade-esquerda").css({
            "background": "url(img/relatorio/" + img + ".jpg)",
            "background-repeat": "no-repeat",
            backgroundSize: "cover"
        });
        $(".metade-esquerda").toggle(efeito, 400, function() {

            //$(".metade-esquerda").css({"background": coricone, "background-repeat": "no-repeat", backgroundSize: "cover"});
            $(".metade-esquerda").css({
                "background": "url(img/relatorio/" + img + ".jpg)",
                "background-repeat": "no-repeat",
                backgroundSize: "cover"
            });
        });
        //$("#foto6").attr("src", "img/" + retangulo + ".png"); 


    });


    // MUDA O BACKGRDOUND DA METADE DIREITA                     
    $(".metade-direita").animate({
        opacity: 0.1
    }, 800, function() {

        $('.encapsulador-conteudo').css("color", cortexto);
        $('.botao').css("visibility", "visible");
        $('.botao').css("color", cortexto);
        $('.botao').css("border-color", cortexto);
        $('.icone1').css("color", coricone);
        $(".metade-direita").css({
            "background": "url(img/relatorio/" + imgbackground + ".jpg)",
            "background-repeat": "no-repeat",
            backgroundSize: "cover"
        });
    });
    $(".metade-direita").animate({
        opacity: 1
    }, 800);



}


//Função que muda os títulos, parágrafos e links dos botões na metade direita
function MudaConteudo(titulo, paragrafo, link) {

    //ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
    $('.h1-desk, .p').fadeOut("slow", function() {
            $('.h1-desk').html(titulo);
            $('.p').html(paragrafo);
            $('.h1-desk, .p').fadeIn("slow");
        })
        // MUDA O LINK DOS BOTOES
    $('.b-desk').attr("href", link);

}

//MUDA CORES DOS BOTÕES DE VOLTAR AO TOPO E VOLTAR AO INÍCIO
function MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover) {

    $(".voltarInicio").css("color", textoinicio);
    $(".voltarTopo").css("color", textoinicio);

    $(".voltarInicio").hover(
        function() {
            $(this).css("background-color", backgroundhover);
            $(this).css("color", textohover);
        },
        function() {
            $(this).css("background-color", backgroundinicio);
            $(this).css("color", textoinicio);
        }
    );


    $(".voltarTopo").hover(
        function() {
            $(this).css("background-color", backgroundhover);
            $(this).css("color", textohover);
        },
        function() {
            $(this).css("background-color", backgroundinicio);
            $(this).css("color", textoinicio);
        }
    );

}

function paginacao(paginaatual, proximapagina) {
    $("'" + paginaatual + "'").css("visibility", hidden);
    $("'" + proximapagina + "'").css("visibility", visible);

}

setInterval(
    function() {
        $('.foto').animate({
            rotate: '+=0.12deg'
        }, 0);
        $('.foto1').animate({
            rotate: '-=0.12deg'
        }, 0);
    },
    100
);


function handledot(item, listname) {
    var num_listas;
    item = item - 1;
    $("#list" + item).css(efeitolista);
    $(".list_effect" + item).animate({
        opacity: 1,
    }, 4000);


    for (num_listas = 1; num_listas < 29; num_listas++) {
        //alert(num_listas);
        if (num_listas != item) {
            $("#list" + num_listas).css(listapadrao);
            //$("#list"+num_listas).html("");



        }
    }

}

var posicao = 5;
var listapadrao = {
    marginLeft: "0px",
    fontSize: "1em",
    marginTop: ""
};
var efeitolista = {
    marginLeft: "0px",
    fontSize: "2em",
    marginTop: "3px"
};
var titulo = "Título default";
var paragrafo = "Texto default";
var link = '';


function handle(delta, ver) {



    if (posicao >= 214) {

        posicao = 214;
        if (ver == 2) {
            posicao = 156;
        }
    } else if (posicao <= 0) {
        posicao = 0;
        if (ver == 2) {
            posicao = 156;
        }
        if (ver > 2) {
            posicao = ver;
        }


    }



    /* EVENTO COM O MOUSE WHEEL DESCENDO */
    else if (delta < 0) {
        if ((posicao % 6) == 0) {
            function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds) {
                        break;
                    }
                }
            }
            sleep(500);
            posicao++;
        }
        posicao = posicao + 1;



        //  $('.text').html('para baixo'+posicao);

        if (ver == 2) {
            posicao = 156;
        }

        if (ver > 2) {
            posicao = ver;
        }

    }

    /* EVENTO COM O MOUSE WHEEL SUBINDO */
    else {
        if ((posicao % 6) == 0) {
            function sleep(milliseconds) {
                var start = new Date().getTime();
                for (var i = 0; i < 1e7; i++) {
                    if ((new Date().getTime() - start) > milliseconds) {
                        break;
                    }
                }
            }
            sleep(1000);
            posicao--;
        }
        posicao = posicao - 1;


        //  $('.text').html('para cima'+posicao);

        if (ver == 2) {
            posicao = 156;
        }

        if (ver > 2) {
            posicao = ver;
        }

    }
    //$('.h1-desk').html("Hello world");

    //A partir daqui é a identificação do que acontece em cada item do relatório. 
    //Transição de imagens e background, mudança de textos e modal
    switch (posicao) {

        case 0:

            posicao = 161;
            break;

        case 12:

            paragrafo = "Durante o ano de 2015, a Universidade Estadual de Montes Claros (Unimontes) realizou uma série de atividades voltadas para o crescimento da Instituição, reforçando as parcerias com outros entes públicos e entidades da sociedade civil. Essas ações possibilitaram a captação de recursos e o incremento das ações nas áreas do ensino, pesquisa, extensão e da prestação de serviços. ";
            titulo = "Atividades Institucionais";
            link = "#atividades";

            handledot(2, titulo);

            $('.go-to').attr("onclick", "handle(handle, 18);");
            $('.go-top').attr("onclick", "location.reload();");
            $('.go-top').css("visibility", "visible");
            $('.go-to i').css("font-size", "2em");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");


            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground)
            EfeitoMetade("puff", "Atividades", "90", "rgba(0, 197, 244, 0.2);", "#000", "atividades_d", "ret-2");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-5");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;



        case 18:

            paragrafo = "Além dos cursos de graduação e pós-graduação (Lato Sensu e Stricto Sensu), a Unimontes promove a qualificação de pessoal nas regiões onde está inserida, possibilitando a melhoria da qualidade de vida. Essa importante ação é viabilizada por intermédio do Centro de Educação Profissional e Tecnológica (CEPT), responsável pela manutenção da Escola Técnica de Saúde (ETS). Em 2015, foram ofertados diversos cursos técnicos a distância. A Universidade também oferece cursos de Tecnólogos.  ";
            titulo = "Ensino superior, profissional e tecnológico";
            link = "#ensino";

            handledot(3, titulo);

            $('.go-top').attr("onclick", "handle(handle, 12);");
            $('.go-to').attr("onclick", "handle(handle, 24);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "Ensino", "25", "rgba(238, 212, 57, 0.49)", "#000", "ensino_d", "rgb(238, 212, 57)");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-6");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);


            break;


        case 24:

            paragrafo = "A educação a distância constitui um dos pilares da atuação da Unimontes, perfeitamente sintonizada com as mudanças e inovações tecnológicas. Os cursos desse modelo são ministrados por intermédio do Centro de Educação a Distância (CEAD), que conta com diversos pólos nas regiões onde a Universidade está inserida.  ";
            titulo = "Educação à Distância";
            link = "#cead";

            handledot(4, titulo);

            $('.go-top').attr("onclick", "handle(handle, 18);");
            $('.go-to').attr("onclick", "handle(handle, 30);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("size", "cead", "140", "rgba(98, 144, 224, 0.29)", "#fff", "cead_d", "rgb(98, 144, 225)");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("size", "ic-7");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 30:

            paragrafo = "O incremento da pós-graduação Stricto sensu é prioridade na Universidade Estadual de Montes Claros, que tem conseguido notável avanço no setor nos últimos anos. Para isso, a Unimontes reforça a parceria com outras universidades e com a Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (Capes/MEC). A perspectiva é aumentar cada vez mais a oferta de cursos de mestrado e doutorado, o que repercute diretamente na capacitação docente e na melhoria da qualidade do ensino, contribuindo também para o aumento da pesquisa e da inovação tecnológica.  ";
            titulo = "Programas de Pós-Graduação";
            link = "#pos";

            handledot(5, titulo);

            $('.go-top').attr("onclick", "handle(handle, 24);");
            $('.go-to').attr("onclick", "handle(handle, 36);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "pos", "25", "rgba(64, 182, 149, 0.09)", "#000", "pos_d", "#40B695");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-3");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;


        case 36:

            paragrafo = "A Unimontes busca de forma permanente a inserção na comunidade ao seu redor. Essa missão é cumprida por meio dos projetos e programas desenvolvidos junto à população. As ações implementadas buscam cada vez mais a participação dos professores e alunos, contribuindo diretamente com a melhoria da qualidade de vida da população. ";
            titulo = "Extensão";
            link = "#extensao";

            handledot(6, titulo);

            $('.go-top').attr("onclick", "handle(handle, 30);");
            $('.go-to').attr("onclick", "handle(handle, 42);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("size", "extensao", "150", "rgba(217, 153, 28, 0.19)", "#000", "extensao_d", "#F0D339");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("size", "ic-6");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;


        case 42:

            paragrafo = "A Unimontes busca de forma permanente a inserção na comunidade ao seu redor. Essa missão é cumprida por meio dos projetos e programas desenvolvidos junto à população. As ações implementadas buscam cada vez mais a participação dos professores e alunos, contribuindo diretamente com a melhoria da qualidade de vida da população. ";
            titulo = "Pesquisa";
            link = "#pesquisa";

            handledot(7, titulo);

            $('.go-top').attr("onclick", "handle(handle, 36);");
            $('.go-to').attr("onclick", "handle(handle, 48);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("puff", "pesquisa", "140", "rgba(0, 136, 204, 0.11)", "#fff", "pesquisa_d", "#9DB2C5");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-1");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;


        case 48:

            paragrafo = "As bibliotecas representam um dos principais espaços da Universidade, por possibilitarem o acesso ao conhecimento. A Unimontes conta com um sistema de bibliotecas, que recebe atenção especial por parte da gestão superior da Universidade. A comunidade acadêmica dispõe da estrutura da Biblioteca Central Professor Antônio Jorge no campus sede universitário e das Bibliotecas Setoriais nos demais campi. O acervo bibliográfico é constantemente atualizado e ampliado. ";
            titulo = "Sistema de Bibliotecas";
            link = "#biblioteca";

            handledot(8, titulo);

            $('.go-top').attr("onclick", "handle(handle, 42);");
            $('.go-to').attr("onclick", "handle(handle, 54);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, cordoby)
            EfeitoMetade("blind", "biblioteca", "85", "rgba(236, 124, 38, 0.15)", "#000", "biblioteca_d", "#E5C51A");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-6");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 54:

            paragrafo = "A Universidade Estadual de Montes Claros realiza processos seletivos para o acesso aos seus cursos de graduação. Também promove concursos públicos para provimento dos cargos da própria universidade, de prefeituras, câmaras municipais e de outras instituições. O trabalho é de responsabilidade da Comissão Técnica de Concursos (Cotec).";
            titulo = "Processos Seletivos";
            link = "#processosseletivos";

            handledot(9, titulo);

            $('.go-top').attr("onclick", "handle(handle, 48);");
            $('.go-to').attr("onclick", "handle(handle, 60);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "processos_seletivos", "85", "rgba(33, 37, 163, 0.06)", "#fff", "processos_seletivos_d", "#5389DC");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-1");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 60:

            paragrafo = "O Hospital Universitário Clemente de Faria (HUCF), vinculado a Universidade Estadual de Montes Claros (Unimontes), se destaca pela promoção da saúde e pela permanente busca do aprimoramento de seus procedimentos, sem perder de vista o cuidado com as pessoas e o atendimento humanizado. Os constantes investimentos em tecnologia, infraestrutura e crescimento profissional e de todos os colaboradores que nele atuam reafirmam seu compromisso como instituição de saúde moderna e avançada, voltada para o diagnóstico, o tratamento e a prevenção. ";
            titulo = "Hospital Universitário Clemente de Faria";
            link = "#hospital";

            handledot(10, titulo);

            $('.go-top').attr("onclick", "handle(handle, 54);");
            $('.go-to').attr("onclick", "handle(handle, 66);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("size", "hospital", "25", "rgba(51, 103, 46, 0.12)", "#000", "hospital_d", "#A1E4AF");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("size", "ic-3");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;


        case 66:

            paragrafo = "A Conservação da memória e da história está entre uma das atribuições da Unimontes. Essa missão é exercida por meio do Centro de Pesquisa e Documentação Regional (Cepedor), que reúne e guarda nos seus arquivos documentos, fotos e outros materiais relativos à história da Universidade, da cidade e da região. O setor é aberto à visitação pública.";
            titulo = "Cepedor";
            link = "#cepedor";
            $('.go-top').attr("onclick", "handle(handle, 60);");
            $('.go-to').attr("onclick", "handle(handle, 72);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            handledot(11, titulo);

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "cepedor", "150", "rgba(197, 184, 72, 0.22)", "#270202", "cepedor_d", "#E2C636");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-6");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 72:

            paragrafo = "A editora da Universidade tem como missão a valorização da cultura e a partir da edição de obras de professores e pesquisadores ligados à instituição e escritores regionais. Os trabalhos são submetidos a um conselho editorial que valoriza a qualidade e a difusão do conhecimento.";
            titulo = "Editora Unimontes";
            link = "#editora";

            handledot(12, titulo);

            $('.go-top').attr("onclick", "handle(handle, 66);");
            $('.go-to').attr("onclick", "handle(handle, 78);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("puff", "editora", "120", "rgba(122, 211, 255, 0.36)", "#000", "editora_d", "#5EC5FF");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-5");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 78:

            paragrafo = "";
            titulo = "Índice de Preços ao Consumidor";
            link = "#ipc";

            handledot(13, titulo);

            $('.go-top').attr("onclick", "handle(handle, 74)");
            $('.go-to').attr("onclick", "handle(handle, 84)");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("size", "ipc", "100", "rgba(65, 143, 181, 0.22)", "#000", "ipc_d", "#ABB0CD");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("size", "ic-8");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 84:

            paragrafo = "O Serviço de Assistência Judiciária Itinerante (SAJ Itinerante) facilita o acesso à justiça, orientando a população de baixa renda sobre os seus direitos. O trabalho é implementado a partir da interação entre os professores e acadêmicos do curso de Direito. Em 2015, o SAJ Itinerante realizou atendimento gratuito em escolas, praças, associações de bairros, distritos e povoados de Montes Claros.";
            titulo = "SAJ Itinerante";
            link = "#saj";

            handledot(14, titulo);

            $('.go-top').attr("onclick", "handle(handle, 78);");
            $('.go-to').attr("onclick", "handle(handle, 90);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("puff", "saj", "140", "rgba(75, 31, 67, 0.09)", "#000", "saj_d", "#C8A0A0");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-9");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 90:

            paragrafo = "O Núcleo de Intercâmbio e Cooperação Institucional (NIC) promove a excelência na cooperação institucional, a internacionalização e a mobilidade acadêmica da Universidade. Além de abrir novas possibilidades de intercâmbio para professores, pesquisadores e acadêmicos em instituições estrangeiras, a universidade incrementa as atividades de ensino, pesquisa, extensão e pós-graduação, por meio da internacionalização.";
            titulo = "Intercâmbio e Cooperação Interinstitucional";
            link = "#intercambio";

            handledot(15, titulo);

            $('.go-top').attr("onclick", "handle(handle, 84);");
            $('.go-to').attr("onclick", "handle(handle, 96);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "intercambio", "30", "rgba(72, 94, 131, 0.13)", "#fff", "intercambio_d", "#AFBCC2");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-1");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 96:

            paragrafo = "O Museu Regional do Norte de Minas - MRNM prioriza atividades voltadas para a pesquisa, a identificação,  a conservação e a  divulgação de registros da cultura material e imaterial do Norte de Minas Gerais. A democratização e o acesso aos bens culturais são pilares do museu. Por meio das exposições e ações, prioriza o reconhecimento de sua identidade e a valorização do patrimônio cultural de sua localidade, tornando-se espaço para o diálogo, reflexão histórica e da inclusão social.";
            titulo = "Museu Histórico Regional";
            link = "#museu";

            handledot(16, titulo);

            $('.go-top').attr("onclick", "handle(handle, 90);");
            $('.go-to').attr("onclick", "handle(handle, 102);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("size", "museu", "30", "rgba(85, 159, 254, 0.17)", "#000", "museu_d", "#559FFE");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("size", "ic-5");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 102:

            paragrafo = "Focada na transparência de suas ações, a Unimontes mantém um canal aberto com a comunidade acadêmica, com as demais instituições e com a população em geral. Na divulgação do seu trabalho, a Universidade utiliza-se das mídias sociais (Facebook, Twitter, Instagram), dispondo de portal com informações atualizadas sobre todas as ações nas áreas de ensino, pesquisa, extensão e prestação de serviços. O objetivo é o estreitamento e a melhoria do relacionamento com todos os seguimentos da sociedade.  ";
            titulo = "Comunicação Institucional";
            link = "#ascom";

            handledot(17, titulo);

            $('.go-top').attr("onclick", "handle(handle, 96);");
            $('.go-to').attr("onclick", "handle(handle, 108);");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("puff", "ascom", "80", "rgba(83, 85, 161, 0.23)", "#000", "ascom_d", "#9870A2");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-8");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 108:

            paragrafo = "A interação é a máxima na proposta de relacionamento com o cidadão no ambiente digital. Alinhada à missão e aos objetivos institucionais, a Unimontes mantém-se aberta ao diálogo permanente com a comunidade, focada em posicionamento estratégico e distribuição de conteúdo nas mídias sociais (Facebook, Twitter, Instagram, YouTube e Flickr). Tendo o portal institucional como agregador de conteúdo central, cada mídia tem papel definido na estratégia da Universidade. A apresentação de boas práticas e conteúdo relevante e útil, seguindo a máxima da prestação de serviços, potencializa a comunicação com o cidadão.";
            titulo = "Mídias Sociais";
            link = "#midiassociais";

            handledot(18, titulo);

            $('.go-top').attr("onclick", "handle(handle, 102)");
            $('.go-to').attr("onclick", "handle(handle, 114)");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "midias_sociais", "140", "rgba(30, 136, 224, 0.16)", "#000", "midias_sociais_d", "#7ED5FF");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-5");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 114:

            /*paragrafo = "Novo parágrafo";
                titulo = "Publicidade";
                link = "#publicidade";

                handledot(19, titulo);

                $('.go-top').attr("onclick", "handle(handle, 108)");
                $('.go-to').attr("onclick", "handle(handle, 120)");
                $('.voltarTopo').css("visibility", "visible");
                $('.time-line').css("visibility", "visible");

                //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
                EfeitoMetade("size", "publicidade", "200", "rgba(245, 152, 15, 0.26)", "#000", "publicidade_d", "#F2D034");
                //EfeitoLogo(efeito,img)
                EfeitoLogo("size", "ic-4");
                MudaConteudo(titulo, paragrafo, link);

                break;

            case 120:*/

            paragrafo = "Vinculada à Unimontes, a Rádio FM 101,1 promove as atividades de ensino, extensão, pesquisa e ações educacionais e culturais da Instituição. A Rádio Unimontes mantém convênios com as principais agências de notícias do país e com a Associação Mineira de Rádio e Televisão – AMIRT. A emissora universitária fundamenta sua programação na boa música popular brasileira e mantém amplo noticiário jornalístico.";
            titulo = "Rádio Unimontes";
            link = "#radio";

            $('.go-top').attr("onclick", "handle(handle, 108)");
            $('.go-to').attr("onclick", "handle(handle, 120)");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            handledot(20, titulo);

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "radio", "100", "rgba(52, 41, 57, 0.17)", "#fff", "radio_d", "#8D6297");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-8");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;


        case 120:

            paragrafo = "A Imprensa universitária imprime a qualidade e a presteza no atendimento, oferecendo serviços gráficos necessários ao desenvolvimento das atividades de ensino, pesquisa e extensão. Atende demandas de toda a Universidade e das unidades administrativas. ";
            titulo = "Imprensa Universitária";
            link = "#imprensa";

            handledot(21, titulo);

            $('.go-top').attr("onclick", "handle(handle, 114)");
            $('.go-to').attr("onclick", "handle(handle, 126)");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("puff", "imprensa", "100", "rgba(223, 127, 77, 0.18)", "#000", "imprensa_d", "#D8A644");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-6");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 126:

            paragrafo = "";
            titulo = "Infraestrutura";
            link = "#infraestrutura";

            handledot(22, titulo);

            $('.go-top').attr("onclick", "handle(handle, 120)");
            $('.go-to').attr("onclick", "handle(handle, 132)");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");

            //EfeitoMetade(efeito,img,margin,coricone,cortexto,imgbackground, corbody)
            EfeitoMetade("blind", "infraestrutura", "200", "rgba(144, 186, 237, 0.14)", "#000", "infraestrutura_d", "#ADFEFF");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("blind", "ic-5");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#000", "#fff", "rgba(255, 255, 255, 0)", "#000");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 132:

            paragrafo = "O setor está vinculado à Pró-reitoria de Gestão e Finanças da Universidade, responsável pela gestão e aplicação dos recursos e execução de convênios. O setor também zela pelo patrimônio físico da instituição, garantindo suporte às atividades de ensino, pesquisa e extensão e prestação de serviços. ";
            titulo = "Orçamento e Finanças";
            link = "#orcamentoefinancas";

            handledot(23, titulo);

            $('.go-top').attr("onclick", "handle(handle, 126)");
            $('.go-to').attr("onclick", "location.reload()");
            $('.voltarTopo').css("visibility", "visible");
            $('.time-line').css("visibility", "visible");


            //EfeitoMetade(efeito,img,margin,cor,imgbackground, corbody)
            EfeitoMetade("puff", "orcamento_financas", "100", "rgba(95, 118, 198, 0.18)", "#fff", "orcamento_financas_d", "#849FD4");
            //EfeitoLogo(efeito,img)
            EfeitoLogo("puff", "ic-8");
            //MudaBotoes(textoinicio, textohover, backgroundinicio, backgroundhover)
            MudaBotoes("#fff", "#000", "rgba(255, 255, 255, 0)", "#fff");
            MudaConteudo(titulo, paragrafo, link);

            break;

        case 136:

            posicao = 5;
            break;

    }

}

function wheel(event) {
    var delta = 0;
    if (!event) event = window.event;

    if (event.wheelDelta) {


        delta = event.wheelDelta / 120;

        if (window.opera) {
            delta = -delta;

        }

    } else if (event.detail) {
        delta = -event.detail / 3;
    }

    if (delta) handle(delta);

    if (event.preventDefault) {
        event.preventDefault();
        event.returnValue = false;
    }
}



if (window.addEventListener) {



    window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
}
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.addEventListener) {

        window.addEventListener('DOMMouseScroll', wheel, false);
        window.onmousewheel = document.onmousewheel = wheel;
    }
}



function ItemModal(pagina) {
    $(document).ready(function() {
        $('.carousel').carousel(pagina);
    })
}

var parametro = window.location.search.split("=");
var topico = parametro[1];
$(document).ready(function() {
    switch (topico) {
        case "atividades":
            handle(event, 12);
            break;
        case "ensino":
            handle(event, 18);
            break;
        case "cead":
            handle(event, 24);
            break;
        case "pos":
            handle(event, 30);
            break;
        case "extensao":
            handle(event, 36);
            break;
        case "pesquisa":
            handle(event, 42);
            break;
        case "bibliotecas":
            handle(event, 48);
            break;
        case "processos_seletivos":
            handle(event, 54);
            break;
        case "hu":
            handle(event, 60);
            break;
        case "cepedor":
            handle(event, 66);
            break;
        case "editora":
            handle(event, 72);
            break;
        case "ipc":
            handle(event, 78);
            break;
        case "saj":
            handle(event, 84);
            break;
        case "intercambio":
            handle(event, 90);
            break;
        case "museu":
            handle(event, 96);
            break;
        case "ascom":
            handle(event, 102);
            break;
        case "midias":
            handle(event, 108);
            break;
        case "publicidade":
            handle(event, 114);
            break;
        case "radio":
            handle(event, 120);
            break;
        case "imprensa":
            handle(event, 126);
            break;
        case "infraestrutura":
            handle(event, 132);
            break;
        case "financas":
            handle(event, 138);
            break;

    }
});