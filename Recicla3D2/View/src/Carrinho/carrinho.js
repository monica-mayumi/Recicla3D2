$(document).ready(function () {

	//pega carrinho do localstorage
	var carrinho = localStorage.getItem('carrinhoLocal') ? JSON.parse(localStorage.getItem('carrinhoLocal')) : [];
	
	//montagem variavel para montagem dos elementos
	var html= '';
	
	if (carrinho.length > 0){
			$.each(carrinho, function (key, item) {
						//montagem de 1 item - lista
						html += '<li class="list-group-item">';
						//criação do botão excluir
						html += '<div class="row">';
						html += '<div class="col-12 d-flex justify-content-end">';
						html += '<a href="#" id="exclui-item-carrinho" class="badge badge-danger align-self-top text-center"  data-id=' + item.id + '>X</a>';
						html += '</div>';				
						html += '</div>';
						//criação do produto
						html += '<div class="row">';
						//montagem da foto
						html += '<div class="col-2">';
						html += '<img class="img-fluid" src="img/'+item.imagem+'">';
						html += '</div>';
						//montagem da descrição do produto
						html += '<div class="col-8">';
						html += '<h4>ID Produto --> ' + item.id + '</h4>';
						html += '<h5>Quantidade --> ' + item.qtde + '</h5>';
						html += '<h6>Valor Unitário --> R$ </h6>';
						html += '</div>';
						//montagem do subtotal
						html += '<div class="col-2 align-self-center text-center">';
						html += 'SUB-TOTAL<br> Valor Produto * Qtde';
						html += '</div>';				
						//fechamento do produto
						html += '</div>';
						//finalização do item -  lista
						html += '</li>';
			});	
			
			//montagem 1 item valor total da compra
			html += '<li class="list-group-item bg-info">';
			html += '<div class="row">';					
			html += '<div class="col-12  d-flex justify-content-end">';
			html += '<h4>R$ --------</h4>';
			html += '</div>';
			html += '</div>';
			html += '</li>';
			
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
	
	$(html).appendTo($('#lista-carrinho'));
	
	
	//limpa carrinho
	$(document).on('click',"#limpa-carrinho",function(){
		
		//remove todas variáveis do localstorage
		localStorage.clear();
		
		//recarrega a página
		location.reload();

	});	
	

	//limpa apenas 1 item do carrinho
	$(document).on('click',"#exclui-item-carrinho",function(){
		
		//pega IDProduto pelo atributo data-id do botão 
		var IDProduto = $(this).attr('data-id');
		
		//montagem do array em storage, caso exista
		var carrinho = localStorage.getItem('carrinhoLocal') ? JSON.parse(localStorage.getItem('carrinhoLocal')) : [];

		//remove o ID PRODUTO ESPECIFICO
		carrinho.splice(carrinho.findIndex((elem) => elem.id == IDProduto),1);

		//cria o carrinho em storage
		localStorage.setItem('carrinhoLocal', JSON.stringify(carrinho));
		
		//redireciona para a página
		$(location).attr('href', 'carrinho.html');

	});			
		
		
		

	$(document).on('click',"#frete-carrinho",function(){

		var v_cep = $("#cep-destino").val();
		var v_peso = 2;
		var v_comprimento = 30;
		var v_altura = 10;
		var v_largura = 20;
	
		var parametros = {
		"nCdEmpresa":"",
		"sDsSenha":"",
		"nCdServico":"40010",
		"sCepOrigem":"09720290",		
		"sCepDestino": v_cep,
		"nVlPeso":v_peso,
		"nCdFormato":"1",
		"nVlComprimento":v_comprimento,
		"nVlAltura":v_altura,
		"nVlLargura":v_largura,
		"nVlDiametro":"0",
		
		"sCdMaoPropria":"n",
		"nVlValorDeclarado":"0",
		"sCdAvisoRecebimento":"n"
		};	
	

		 $.ajax({
		   type: "GET",
		   url: "https://cors-anywhere.herokuapp.com/http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx/CalcPrecoPrazo",
		   data: parametros,
		   datatype:"json",
		   success: function(data){
				
				console.log(data);
				
				$("#resultado-frete").html("Preço: " + $(data).find('Valor').text());
				$("#resultado-frete").append("<br>");
				$("#resultado-frete").append("Prazo: " + $(data).find('PrazoEntrega').text());
			
		   }
		});
	
	
});
		
		
});