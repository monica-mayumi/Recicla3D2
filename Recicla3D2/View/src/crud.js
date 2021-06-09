
$(document).ready(function () {

carrega_dados();




//Function carregar dados
function carrega_dados(){
	$.ajax({
		url: "dados.txt",	
		//url: http://localhost/projetoxpto/cadastro/listar-produtos
		success: function(resultado){
			var json = JSON.parse(resultado);
			var html = '';
			$.each(json, function (key, item) {
				html += '<tr>';
				html += '<td>' + item.id + '</td>';
				html += '<td>' + item.name + '</td>';
				html += '<td>' + item.date + '</td>';
				html += '<td>' + item.id + '</td>';
				html += '<td>' + item.date + '</td>';
                html += '<td><a id="AlteraCadastro" href="#" data-id="' + item.id + '">Alterar</a></td>';
				html += '<td><a id="ExcluirCadastro" href="#" data-id="' + item.id + '">Excluir</a></td>';
				html += '</tr>';
			});
			$('#CorpoTabela').html(html);
		},

	});	
};


//Function ModalAltera Produto
$(document).on('click',"#AlteraCadastro",function(){
    $('#ModalCadastro').modal('show');
	
	var IDAlteracao = $(this).attr('data-id');
	
	//requisição Ajax - Trazer os demais campos/informações
	
	
	$('#idproduto').val(IDAlteracao);
    $('#btnUpdate').show();
    $('#btnAdd').hide();
});	


//Function ModalExclui Produto
$(document).on('click',"#ExcluirCadastro",function(){
    $('#ModalExclusao').modal('show');
	
	var IDExclusao = $(this).attr('data-id');
	$('#AlertIDProduto').html("ID do Produto --> " + IDExclusao);

	$("#btnExcluir").data("id", IDExclusao);

});	





//click botão Excluir
$(document).on('click','#btnExcluir',function(){
	console.log($("#btnExcluir").data("id"));
	//requisição AJAX para exclusão
	
	carrega_dados();
});




	
});




	


