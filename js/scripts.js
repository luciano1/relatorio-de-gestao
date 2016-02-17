	$(document).ready(function(){
		$('.metade-esquerda, .metade-direita').height($( window ).height());
	});


	//Função que aplica efeito de transição na logomarca da unimontes no centro da página
	function EfeitoLogo(efeito,img){
		$("#logocentral").toggle(efeito, 800, function(){
						$('#logocentral').attr("src", "img/"+img+".png");
						$("#logocentral").toggle(efeito, 400, function(){
							$('#logocentral').attr("src", "img/"+img+".png");
						});	
					});
	}


	//Função que aplica os efeitos de transições, mudança de cores
	function EfeitoMetade(efeito,img,margin,coricone,cortexto,corbackground,logo1,logo2){

		$(".fa-circle").css("color", coricone);
		$("body").css("background", corbackground);

		$(".metade-esquerda").toggle(efeito, 800, function(){
						$('.encapsulador-conteudo').css("margin-top", margin+"px");
						$('.encapsulador-conteudo').css("color", cortexto);
						$('.icone1').css("color", "#000");
						$(".metade-esquerda").css({"background": "url(img/relatorio/"+ img +".jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});
						$(".metade-esquerda").toggle(efeito, 400, function(){	
							$(".metade-esquerda").css({"background": "url(img/relatorio/"+ img +".jpg)", "background-repeat": "no-repeat", backgroundSize: "cover"});						
						});	
						
					});

		// MUDA O BACKGRDOUND DA METADE DIREITA						
		$( ".metade-direita" ).animate({opacity: 0.1 }, 800, function(){
				$(".metade-direita").css("background" ,corbackground); //COLOCAREMOS IMAGEM OU COR						
			});
		$( ".metade-direita" ).animate({opacity: 1}, 800);


		//DEFINE OS TAMANHOS DAS LOGOS DA UNIMONTES GIRANDO
		$("#foto3").attr("src","img/"+logo1+".png");
		$("#foto3").attr("id", "foto6");						
		$("#foto6").attr("src","img/"+logo2+".png");
		$("#foto6").attr("id", "foto3");
		

	}


	//Função que muda os títulos, parágrafos e links dos botões na metade direita
	function MudaConteudo(titulo,paragrafo,link){

		//ESSE SCRIPT MUDA O CONTEUDO DO TITULO E PARÁGRAFO
		$('.h1-desk, .p').fadeOut("slow", function(){
			$('.h1-desk').html(titulo);
			$('.p').html(paragrafo);
			$('.h1-desk, .p').fadeIn("slow");
		})
		// MUDA O LINK DOS BOTOES
		$('.b-desk').attr("href", link);

	}


	setInterval(
	    function () {
	        $('.foto').animate({rotate: '+=0.05deg'}, 0);
	        $('.foto1').animate({rotate: '-=0.05deg'}, 0);
	    },
	    100
	);

	//Função que monta a timeline
	function handledot (item, listname){
		var num_listas;
		item = item-1;
		$("#list"+item).css(efeitolista);
		$(".list_effect"+item).css('padding-top', '6px');
		$(".list_effect"+item).animate({opacity: 1,	},4000);


		for(num_listas = 1; num_listas < 29; num_listas++){		
			//alert(num_listas);
			if(num_listas != item){
				$("#list"+num_listas).css(listapadrao);
				$(".list_effect"+num_listas).css('padding-top', '');
				$(".list_effect"+num_listas).animate({opacity: 0.5,},2000);
				//$("#list"+num_listas).html("");
			}
		}
		
	}

	var posicao	= 5;
	var listapadrao = {marginLeft: "0px", fontSize: "1em", marginTop: ""};
	var efeitolista = {marginLeft: "0px", fontSize: "2em", marginTop: "3px"};
	var titulo = "Título default";
	var paragrafo = "Texto default";
	var link = '';
	

	
		function handle(delta, ver) {
			


			if(posicao >= 214){

		    	posicao = 214;
		    	if(ver == 2){
					posicao = 156;
				}
		    }

		   	else if(posicao <= 0){
		    	posicao = 0 ;
	 			if(ver == 2){
					posicao = 156;
				}
				if(ver > 2){
					posicao=ver;
				}

		    
		    }



		    /* EVENTO COM O MOUSE WHEEL DESCENDO */
			
		    else if (delta < 0){ 
		   		if((posicao%6)==0){
						function sleep(milliseconds) {
	 						var start = new Date().getTime();
	  						for (var i = 0; i < 1e7; i++) {
	    						if ((new Date().getTime() - start) > milliseconds){
	      						break;
	    						}
	  						}
						}
				sleep(500);
				posicao++;
				}
		        posicao = posicao + 1;
		        
		  		

		      //  $('.text').html('para baixo'+posicao);

		        if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){ 
					posicao = ver;
				}

		    }

		   /* EVENTO COM O MOUSE WHEEL SUBINDO */
		    else {
		    	        if((posicao%6)==0){
					function sleep(milliseconds) {
 						var start = new Date().getTime();
  						for (var i = 0; i < 1e7; i++) {
    						if ((new Date().getTime() - start) > milliseconds){
      						break;
    						}
  						}
					}
				sleep(1000);
				posicao--;
				}
		        posicao = posicao - 1;

		
		      //  $('.text').html('para cima'+posicao);

				if(ver == 2){
					posicao = 156;
				}

				if(ver >2 ){
					posicao=ver;
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
										
					paragrafo = "Testando novo parágrafo";
					titulo = "Atividades Institucionais";
					link = "#atividades";

					handledot(2,titulo);

				    $('.go-to').attr("onclick", "handle(handle, 18);");
				    $('.go-top').attr("onclick", "location.reload();");				    
				    $('.go-top').css("visibility", "visible");
				    $('.go-to i').css("font-size", "2em");
				    $('.voltarTopo').css("visibility", "visible");
				    $('.time-line').css("visibility", "visible");				    
				    
			
					//EfeitoMetade(efeito,img,margin,coricone,cortexto,corbackground,logo1,logo2)
					EfeitoMetade("puff", "Atividades", "180", "#B98A09", "#000", "#F0F0B2", "ic-5", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-6");
					MudaConteudo(titulo,paragrafo,link);

					break;



				case 18:					

					paragrafo = "Novo parágrafo";
					titulo = "Ensino superior, profissional e tecnológico";
					link = "#ensino";

					handledot(3,titulo);

					$('.go-top').attr("onclick", "handle(handle, 12);");
					$('.go-to').attr("onclick", "handle(handle, 24);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","Ensino","100","#0E2FAF","#DCE3FE", "ic-3", "ic-5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-7");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 24:

					paragrafo = "Novo parágrafo";
					titulo = "Educação à Distância";
					link = "#cead";

					handledot(4,titulo);

					$('.go-top').attr("onclick", "handle(handle, 18);");
					$('.go-to').attr("onclick", "handle(handle, 30);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","cead","120","#fff","#F287B4", "ic-4", "ic-3");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-7");
					MudaConteudo(titulo,paragrafo,link);
						
					break;

				case 30:

					paragrafo = "Novo parágrafo";
					titulo = "Programas de Pós-Graduação";
					link = "#pos";

					handledot(5,titulo);

					$('.go-top').attr("onclick", "handle(handle, 24);");		
					$('.go-to').attr("onclick", "handle(handle, 36);");	

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","pos","100","#288183","#ACEDCF", "ic-4", "ic-3");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-3");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 36:

					paragrafo = "Novo parágrafo";
					titulo = "Extensão";
					link = "#extensao";

					handledot(6,titulo);

					$('.go-top').attr("onclick", "handle(handle, 30);");
					$('.go-to').attr("onclick", "handle(handle, 42);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","extensao","200","#fff","#E3DAC6", "ic-1", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-6");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 42:

					paragrafo = "Novo parágrafo";
					titulo = "Pesquisa";
					link = "#pesquisa";

					handledot(7,titulo);

					$('.go-top').attr("onclick", "handle(handle, 36);");
					$('.go-to').attr("onclick", "handle(handle, 48);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","pesquisa","200","#000","#9FECF4", "ic-3", "ic-1");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-1");
					MudaConteudo(titulo,paragrafo,link);	

					break;


				case 48:

					paragrafo = "Novo parágrafo";
					titulo = "Sistema de Bibliotecas";
					link = "#biblioteca";

					handledot(8,titulo);

					$('.go-top').attr("onclick", "handle(handle, 42);");
					$('.go-to').attr("onclick", "handle(handle, 54);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","biblioteca","150","#4E639F","#4DC5D8", "ic-6", "ic-4");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-1");
					MudaConteudo(titulo,paragrafo,link);			
						
					break;

				case 54: 
	
					paragrafo = "Novo parágrafo";
					titulo = "Processos Seletivos";
					link = "#processosseletivos";

					handledot(9, titulo);

					$('.go-top').attr("onclick", "handle(handle, 48);");
					$('.go-to').attr("onclick", "handle(handle, 60);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","processos_seletivos","150","#000","#72789E", "ic-5", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","lg6");
					MudaConteudo(titulo,paragrafo,link);			

					break;

				case 60:

					paragrafo = "Novo parágrafo";
					titulo = "Hospital Universitário Clemente de Faria";
					link = "#hospital";

					handledot(10,titulo);

					$('.go-top').attr("onclick", "handle(handle, 54);");
					$('.go-to').attr("onclick", "handle(handle, 66);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","hospital","80","#000","#86E19C", "ic-6", "ic-3");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-3");
					MudaConteudo(titulo,paragrafo,link);		

					break;


				case 66:

					paragrafo = "Novo parágrafo";
					titulo = "Cepedor";
					link = "#cepedor";
					$('.go-top').attr("onclick", "handle(handle, 60);");
					$('.go-to').attr("onclick", "handle(handle, 72);");

					handledot(11,titulo);

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","cepedor","200","#270202","#2677CA", "ic-2", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-4");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 72:

					paragrafo = "Novo parágrafo";
					titulo = "Editora Unimontes";
					link = "#editora";

					handledot(12,titulo);

					$('.go-top').attr("onclick", "handle(handle, 66);");
					$('.go-to').attr("onclick", "handle(handle, 78);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","editora","160","#000","#EDECD6", "ic-1", "ic-6");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-1");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 78:

					paragrafo = "Novo parágrafo";
					titulo = "Índice de Preços ao Consumidor";
					link = "#ipc";

					handledot(13,titulo);

					$('.go-top').attr("onclick", "handle(handle, 74)");
					$('.go-to').attr("onclick", "handle(handle, 84)");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","ipc","100","#fff","#8BE181", "ic-1", "ic-6");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-1");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 84:

					paragrafo = "Novo parágrafo";
					titulo = "SAJ Itinerante";
					link = "#saj";

					handledot(14,titulo);

					$('.go-top').attr("onclick", "handle(handle, 78);");
					$('.go-to').attr("onclick", "handle(handle, 90);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","saj","200","#000","#E44637", "ic-4", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","lg3");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 90:

					paragrafo = "Novo parágrafo";
					titulo = "Intercâmbio e Cooperação Interinstitucional";
					link = "#intercambio";

					handledot(15,titulo);

					$('.go-top').attr("onclick", "handle(handle, 84);");
					$('.go-to').attr("onclick", "handle(handle, 96);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","intercambio","100","#000","#E062EA", "ic-3", "ic-5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-1");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 96:

					paragrafo = "Novo parágrafo";
					titulo = "Museu Histórico Regional";
					link = "#museu";

					handledot(16,titulo);

					$('.go-top').attr("onclick", "handle(handle, 90);");
					$('.go-to').attr("onclick", "handle(handle, 102);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","museu","200","#000","#2729A2", "ic-2", "ic-4");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-5");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 102:

					paragrafo = "Novo parágrafo";
					titulo = "Comunicação organizacional (Ascom)";
					link = "#ascom";

					handledot(17,titulo);

					$('.go-top').attr("onclick", "handle(handle, 96);");
					$('.go-to').attr("onclick", "handle(handle, 108);");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","ascom","200","#000","#E2BD79", "ic-2", "ic-3");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-5");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 108:

					paragrafo = "Novo parágrafo";
					titulo = "Mídias Sociais";
					link = "#midiassociais";

					handledot(18,titulo);

					$('.go-top').attr("onclick", "handle(handle, 102)");
					$('.go-to').attr("onclick", "handle(handle, 114)");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","midias_sociais","200","#000","#2FBC34", "ic-1", "ic-6");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-5");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 114:

					paragrafo = "Novo parágrafo";
					titulo = "Publicidade";
					link = "#publicidade";

					handledot(19,titulo);

					$('.go-top').attr("onclick", "handle(handle, 108)");
					$('.go-to').attr("onclick", "handle(handle, 120)");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("size","publicidade","200","#1B5877","#E3B834", "ic-3", "ic-5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("size","ic-4");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 120:

					paragrafo = "Novo parágrafo";
					titulo = "Rádio Unimontes";
					link = "#radio";

					$('.go-top').attr("onclick", "handle(handle, 114)");
					$('.go-to').attr("onclick", "handle(handle, 126)");

					handledot(20,titulo);

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","radio","200","#fff","#C7D8EA", "ic-1", "ic-5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","lg6");
					MudaConteudo(titulo,paragrafo,link);

					break;


				case 126:

					paragrafo = "Novo parágrafo";
					titulo = "Imprensa Universitária";
					link = "#imprensa";

					handledot(21,titulo);

					$('.go-top').attr("onclick", "handle(handle, 120)");
					$('.go-to').attr("onclick", "handle(handle, 132)");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","imprensa","200","#000","#EBECC3", "ic-6", "ic-2");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-6");
					MudaConteudo(titulo,paragrafo,link);
					
					break;

				case 132:
	
					paragrafo = "Novo parágrafo";
					titulo = "Infraestrutura (obras, TI)";
					link = "#infraestrutura";

					handledot(22,titulo);

					$('.go-top').attr("onclick", "handle(handle, 126)");
					$('.go-to').attr("onclick", "handle(handle, 138)");

					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("blind","infraestrutura","200","#fff","#8084EB", "ic-3", "ic-5");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("blind","ic-5");
					MudaConteudo(titulo,paragrafo,link);

					break;

				case 138:

					paragrafo = "Novo parágrafo";
					titulo = "Orçamento e Finanças";
					link = "#orcamentoefinancas";

					handledot(23,titulo);

					$('.go-top').attr("onclick", "handle(handle, 132)");
					$('.go-to').attr("onclick", "location.reload()");
					
					//EfeitoMetade(efeito,img,margin,cor,corbackground,logo1,logo2)
					EfeitoMetade("puff","orcamento_financas","180","#fff","#59CF7B", "ic-6", "ic-1");
					//EfeitoLogo(efeito,img)
					EfeitoLogo("puff","ic-3");
					MudaConteudo(titulo,paragrafo,link);
					
					break;

				case 180:
						
						posicao = 5;
						break;

			}

		}

	function wheel(event){
		var delta = 0;
		if(!event)event=window.event;

		if(event.wheelDelta){
			
		
			delta=event.wheelDelta/120;

			if(window.opera){delta=-delta;

			}

		}
		else if(event.detail){
			delta=-event.detail/3;
		}

		if(delta)handle(delta);
			
		if(event.preventDefault){
			event.preventDefault();
			event.returnValue=false;
		}
	}



	if(window.addEventListener){
		
			
				
				window.addEventListener('DOMMouseScroll',wheel,false);
				window.onmousewheel=document.onmousewheel=wheel;
	}
	var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
		  window.ontouchmove  = preventDefault; // mobile
		  document.onkeydown  = preventDefaultForScrollKeys;
	}

	function enableScroll() {
    if(window.addEventListener){
		
				window.addEventListener('DOMMouseScroll',wheel,false);
				window.onmousewheel=document.onmousewheel=wheel;
	}
}

