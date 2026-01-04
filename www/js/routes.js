//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'Solucione',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
    $("#menuPrincipal").show("fast");
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
      $.getScript("js/index.js");
      /* Swiper initialization */
        var swiper = new Swiper(".mySwiper", {
              slidesPerView: 1,
              spaceBetween: 30,
              autoplay: true,
              delay: 2000,
              loop: true,
              breakpoints: {
                50:{
                  slidesPerView: 1,
                  spaceBetween: 30
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                992:{
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1200:{
                  slidesPerView: 4,
                  spaceBetween: 30
                }
              }
        });

        var swiper2 = new Swiper(".categorias", {
            slidesPerView: 3,
            spaceBetween: 10,
            freeMode: true,
            breakpoints: {
                50:{
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                640: {
                  slidesPerView: 6,
                  spaceBetween: 10
                },
                992:{
                  slidesPerView: 8,
                  spaceBetween: 10
                },
                1200:{
                  slidesPerView: 12,
                  spaceBetween: 10
                }
              }
        });
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/pesquisa/',
      url: 'pesquisa.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/conta/',
      url: 'conta.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },

    {
      path: '/favoritos/',
      url: 'favoritos.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
        path: '/detalhes_produtos/',
        url: 'detalhes_produtos.html',
        options: {
          transition: 'f7-push'
        },
          on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          $("#menuPrincipal").hide("fast");
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/carrinho/',
        url: 'carrinho.html',
        options: {
          transition: 'f7-push',
        },
          on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          $("#menuPrincipal").hide("fast");
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/login/',
        url: 'login.html',
        options: {
          transition: 'f7-push',
        },
          on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          //$("#menuPrincipal").hide("fast");
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/login_lojas/',
        url: 'login_lojas.html',
        options: {
          transition: 'f7-push',
        },
          on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          //$("#menuPrincipal").hide("fast");
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/loja_home/',
        url: 'loja_home.html',
        options: {
          transition: 'f7-push',
        },
          on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          //$("#menuPrincipal").hide("fast");
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/engenheiro_home/',
        url: 'engenheiro_home.html',
        animate: false,
        on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      {
        path: '/adicionar_servico/',
        url: 'adicionar_servico.html',
        animate: false,
        on: {
          pageBeforeIn: function (event, page) {
          // fazer algo antes da página ser exibida
          },
          pageAfterIn: function (event, page) {
          // fazer algo depois da página ser exibida
          },
          pageInit: function (event, page) {
          // fazer algo quando a página for inicializada
          },
          pageBeforeRemove: function (event, page) {
          // fazer algo antes da página ser removida do DOM
          },
        }
      },
      
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

// Adicionamento do atributo 'inert' à página que está saidno (page-previous)
mainView.router.on('pageBeforeOut', function (page) {
  if (page.el) {
    // se o foco estiver dentro da página que está saindo, remove o foco
    if (document.activeElement && page.el.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    // agora sim pode aplicar inert
    page.el.setAttribute('inert', '');
  }
});

mainView.router.on('pageAfterIn', function (page) {
  if (page.el) {
    page.el.removeAttribute('inert');
  }
});


//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
  var mainView = app.views.create('.view-main', { url: '/login/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
