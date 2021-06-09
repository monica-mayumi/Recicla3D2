
$(document).ready(function () {


	$.ajax({
		url: "index.txt",					
		success: function(resultado){
			var json = JSON.parse(resultado);

			var html = '';
			$.each(json, function (key, item) {
				
					
				html += '<li class="list-group-item lista-produto">';
				html += '<div class="card">';
				html += '<img class="card-img-top img-fluid" src="img/' + item.imagem + '">';

				html += '<div class="card-body">';
				html += '<h4 class="card-title text-center"><a href=" ' + item.url + '">' + item.nome + '</a></h4>';
				html += '<p class="card-text">' + item.descricao + '</p>';
				html += '<div class="d-flex justify-content-between align-items-center">';
				//html += '<div class="text-success"><h5 class="mt-4">R$' + item.preco + '</h5></div>';
				html += '<a href=" ' + item.url + '" button class="btn btn-outline-primary mt-4"> Comprar </a>';
				
				html += '</div>';
				html += '</div>';
				html += '</li>';
				//html += '<a href=" ' + item.url + '"> class="btn btn-outline-primary mt-4"><i class="fas fa-shopping-cart"></i> Add to Cart</a>';
			});

			
			$(html).appendTo($('#lista-produto'));
			

		},

	});	

	
});





	


