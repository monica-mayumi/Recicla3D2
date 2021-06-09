
$(document).ready(function () {


	$("#btn-acessar").click(function() {
		//montagem de um array com os dados preenchidos em tela
		var dados = {
			login: $("#login").val(),
			senha:$("#senha").val()
		};

	
		$.ajax({           
			url: 'login.txt',
			// - envio de dados POST
			type: 'get',
			
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(dados),
			
			success: function (result) {
				
				var json = JSON.parse(JSON.stringify(result));
				console.log (json);
				

					
				if (json.acesso ==1){
					
					html='<div class="alert alert-success alert-dismissible fade show" role="alert">';
					html+= json.mensagem;
					html+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
					html+='<span aria-hidden="true">&times;</span>';
					html+='</button>';
					html+='</div>';
				
					$("#validacao-login").html(html);					
				
					
				}else{
					
					html='<div class="alert alert-danger alert-dismissible fade show" role="alert">';
					html+= json.mensagem;
					html+='<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
					html+='<span aria-hidden="true">&times;</span>';
					html+='</button>';
					html+='</div>';
				
					$("#validacao-login").html(html);						
					
					$("#login").val("");
					$("#senha").val("");
					$("#login").focus();
				}
			}
				
		});

		
	});

	
});




	


