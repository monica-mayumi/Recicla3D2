// funcao para buscar itens no localStorage
var getCart = function() {
  return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

//funcao para gravar itens no localStorage
var setCart = function(cartItems){
  localStorage.setItem('cart', JSON.stringify(cartItems)); 
}

//funcao para verificar se o item ja existe no cart 
var hasItem = function(item) {
  var cart = getCart();
  if(!item.id)
    return false
  return cart.some(cartItem => item.id == cartItem.id )
}

//funcao para gravar item
var saveItemCart = function(){
  item = {
      id: document.getElementById("sku").value,//ou pode ser gerado na hora usando size
      cores: document.getElementById("cor_add").value,
      qtd_gomos: document.getElementById("qtd_gomos").value,
      qtd_cores: document.getElementById("qtd_cores").value,
      quantidade: document.getElementById("quantidade").value,
      obs: document.getElementById("obs").value, 
    }  
    var cart = getCart()
    if(hasItem(item)) {
    //condicao para actualizar item caso ja tenha sido gravado
      cart.forEach(cartItem => {
        if(cartItem.id == item.id){
          cartItem.cores = item.cores
          cartItem.qtd_gomos = item.qtd_gomos
          cartItem.qtd_cores = item.qtd_cores
          cartItem.quantidade = item.quantidade
          cartItem.obs = item.obs
        }
      })
    }else{
    //condicao param criar id caso nao exista nenhum no sistema
    if(!item.id)
      item.id = cart.length + 1
    
     //condicao para adicionar item caso nao tenha no cart  
      cart.push(item)
    }
    
    //instrucao para actualizar o cart no localStorage
    setCart(cart)
}