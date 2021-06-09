
$(document).ready(function () {


	var parametros = new URLSearchParams(window.location.search);
	var id_produto = parametros.get('id');
	console.log(id_produto);



	$.ajax({
		//consumir API passando o ID PRODUTO
		url: "peça-xadrez.txt",			
		
		success: function(resultado){
			var json = JSON.parse(resultado);
			
			$('#nome-produto').html(json.nome);
			$('#preco-produto').html(json.preco);
			$('#descricao-produto').html(json.descricao);
			$('#fabricante-produto').html(json.fabricante);
			
			$.each(json.galeria, function(index, item) {
				$('<div class="carousel-item"><img class="d-block w-100" src="img/'+item+'"></div>').appendTo('.carousel-inner');
			});
			
			$('#carousel').carousel();
            $('.carousel-indicators > li').first().addClass('active');
            $('.carousel-item').first().addClass('active');			
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
	





	


