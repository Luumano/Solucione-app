document.getElementById('btnComprar').addEventListener('click', function() {
    const produto = {
        nome: 'Poty - Cimento Bom Demais',
        preco: 45.00,
        imagem: './img/produtos/cimento_solucione.png'
    };

    localStorage.setItem('carrinho_compra', JSON.stringify(produto));
    app.views.main.router.navigate('/carrinho_compra/');
});