
$(document).ready(function () {


	var parametros = new URLSearchParams(window.location.search);
	var id_produto = parametros.get('id');
	console.log(id_produto);



	$.ajax({
		//consumir API passando o ID PRODUTO
		url: "vaso.txt",			
		
		success: function(resultado){
			var json = JSON.parse(resultado);
			
			$('#nome-produto').html(json.nome);
			$('#preco-produto').html(json.preco);
			$('#descricao-produto').html(json.descricao);
			$('#fabricante-produto').html(json.fabricante);
			
			$.each(json.galeria, function(index, item) {
				$('<div class="carousel-item"><img class="d-block w-100" src="img/'+item+'" width="300" height="400"></div>').appendTo('.carousel-inner');
			});
			
			$('#carousel').carousel();
            $('.carousel-indicators > li').first().addClass('active');
            $('.carousel-item').first().addClass('active');			
		},

	});	

	
});




	


