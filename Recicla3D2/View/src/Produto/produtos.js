$(document).ready(function () {


	$.ajax({
		url: "produtos.txt",					
		success: function(resultado){
			var json = JSON.parse(resultado);

			var html = '';
			$.each(json, function (key, item) {
				
					
				html += '<li class="list-group-item lista-produto">';
				html += '<div class="card">';
				html += '<img class="card-img-top img-fluid" src="img/' + item.imagem + '">';

				html += '<div class="card-body">';
				html += '<h5 class="card-title text-center"><a href=" ' + item.url + '">' + item.nome + '</a></h5>';
				html += '<p class="card-text">' + item.descricao + '</p>';
				html += '<div class="d-flex justify-content-between align-items-center">';
				//html += '<div class="text-success"><h5 class="mt-4">R$' + item.preco + '</h5></div>';

				html += '<a href="#" class="btn btn-outline-primary mt-4" id="add-produto" data-id=' + item.id + '><i class="fas fa-shopping-cart"></i> Add to Cart</a>';
				//html += '<a href=" ' + item.url + '" button class="btn btn-outline-primary mt-4"> Comprar </a>';
				
				html += '</div>';
				html += '</div>';
				html += '</li>';
				//html += '<a href=" ' + item.url + '"> class="btn btn-outline-primary mt-4"><i class="fas fa-shopping-cart"></i> Add to Cart</a>';
			});

			
			$(html).appendTo($('#lista-produto'));

		},

	});	

			//adicionar produto unitario
	$(document).on('click',"#add-produto",function(){

		//pega IDProduto pelo atributo data-id botão
		var IDProduto = $(this).attr('data-id');
		
		//montagem do array do produto
		item = {
			id: IDProduto,
			qtde: 1
		};
		
		//montagem do array em storage, caso exista
		var carrinho = localStorage.getItem('carrinhoLocal') ? JSON.parse(localStorage.getItem('carrinhoLocal')) : [];

		//valida se o ID produto existe	
		if (carrinho.some(elem => elem.id == item.id)){
			  carrinho.forEach(elem => {
				if(elem.id == item.id){
				  elem.qtde += 1;
				}
			  })
		}else{
			carrinho.push(item);
		}
		
		//cria o carrinho em storage
		localStorage.setItem('carrinhoLocal', JSON.stringify(carrinho)); 
		
		//redireciona para pagina carrinho
		$(location).attr('href', 'carrinho.html');
		
	});	
	
	


	$('#carrinho_tooltip').popover({
		content: carrinho_pop,
		placement:'bottom',
		trigger: 'focus',
		delay: { "show": 100, "hide": 100 },
		html: true
	   });
  

	function carrinho_pop(){
		//pega carrinho do localstorage
		var carrinho = localStorage.getItem('carrinhoLocal') ? JSON.parse(localStorage.getItem('carrinhoLocal')) : [];
		//montagem variavel para montagem dos elementos
		var html= '<br><ul class="list-group">';
	
		if (carrinho.length > 0){
				$.each(carrinho, function (key, item) {
					//montagem de 1 item - lista
					html += '<li class="list-group-item py-2">';
					//criação do produto
					html += '<div class="row">';
					//montagem da foto
					html += '<div class="col-6">';
					html += '<img height="100" src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Item_sem_imagem.svg">';
					html += '</div>';
					//montagem do subtotal
					html += '<div class="col-6 align-self-center text-center">';
					html += 'SUB-TOTAL';
					html += '</div>';				
					//fechamento do produto
					html += '</div>';
					//fialização do item -  lista
					html += '</li>';
				});	
				
		}else{
			//montagem de 1 item - carrinho vazio
			html += '<li class="list-group-item">';
			html += '<div class="row">';
			html += '<div class="col-12">';
			html += 'Carrinho Vazio';
			html += '</div>';
			html += '</div>';
			html += '</li>';	
		}

		html +='</ul>';
		//adicionar botão Carrinho de Compras
		html +='<br><a class="btn btn-success  mx-auto d-block" href="carrinho.html">Ir Carrinho de Compras</a>';
		return html;
   
}


	
});
			

	





	


