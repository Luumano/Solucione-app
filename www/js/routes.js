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
      path: '/carrinho_compra/',
      url: 'carrinho_compra.html',
      options: {
        transition: 'f7-push',
      },

      on: {
        pageBeforeIn: function () {
          // Esconde o menu inferior
          $('#menuPrincipal').hide('fast');
        },

        pageBeforeOut: function () {
          // Mostra o menu ao sair
          $('#menuPrincipal').show('fast');
        },
        pageInit: function (event, page) {

  const produto = JSON.parse(localStorage.getItem('carrinho'));

  if (!produto) {
    app.dialog.alert('Carrinho vazio!');
    app.views.main.router.back();
    return;
  }

  const img = page.el.querySelector('#cart-img');
  const nome = page.el.querySelector('#cart-nome');
  const preco = page.el.querySelector('#cart-preco');
  const totalSpan = page.el.querySelector('#total');

  img.src = produto.imagem;
  nome.textContent = produto.nome;
  preco.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;

  // Inicializa Stepper corretamente
  const stepper = app.stepper.create({
    el: page.el.querySelector('#stepperQtd'),
    min: 1,
    value: 1,
    on: {
      change(stepper) {
        const total = stepper.value * produto.preco;
        totalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
      }
    }
  });

  // Total inicial
  totalSpan.textContent = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;

  // Limpar carrinho
  $$('#limparCarrinho').on('click', function () {
    app.dialog.confirm(
      'Deseja realmente limpar o carrinho?',
      function () {
        localStorage.removeItem('carrinho');
        app.views.main.router.back();
      }
    );
  });

  // Finalizar pedido
  $$('#finalizarPedido').on('click', function () {
    app.dialog.alert('Pedido finalizado com sucesso!');
    localStorage.removeItem('carrinho');
  });
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
        path: '/cadastro_usuario/',
        url: 'cadastro_usuario.html',
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
