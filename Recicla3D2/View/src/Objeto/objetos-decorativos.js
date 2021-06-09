
$(document).ready(function () {


	$.ajax({
		url: "objetos-decorativos.txt",					
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
				
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '</li>';

			});

			
			$(html).appendTo($('#lista-produto'));
			

		},

	});	

	
});


	


