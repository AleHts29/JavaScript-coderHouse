const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) =>{
    addToCartButton.addEventListener('click', addToCartClicked);
});

//indico en que parte del HTML quiero crear los elementos
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

// Funcion para capturar la info al hacer click en los botones comprar
function addToCartClicked(event){
    const button = event.target;
    
    // me traigo la informacion del elemento .item del HTML usando la class (closest)
    const item = button.closest ('.item');
    
    // Desclosamos la informacion que necesitamos
    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;
    
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}


// se crea una funcion a la cual le pasamos los parametros extraidos para que nos genere el contenido HTML
function addItemToShoppingCart(itemTitle, itemPrice, itemImage){

    // Me trae todos los elementos que tengan la clase shoppingCartItemTitle
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    // mediante un for recorro todos los elementos y los comparo. 
    for (let i = 0; i < elementsTitle.length; i++ ){
        if(elementsTitle[i].innerText === itemTitle){
        let elementQuantity =  elementsTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');

        elementQuantity.value++;

        // toast de bootstrap y jQuary
        $('.toast').toast('show');
        return;         
        }
    
    }




    const shoppingCartRow = document.createElement('div');

    // creo el elemento
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">
                    ${itemTitle}
                </h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);

    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click', removeShoppingCartItem);

    shoppingCartRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
}

function updateShoppingCartTotal(){
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

    //Ahora opero con todos los elementos de la lista
    shoppingCartItems.forEach(shoppingCartItems =>{
        const shoppingCartItemPriceElement = shoppingCartItems.querySelector('.shoppingCartItemPrice');
        // extraigo el precio del elemento y lo parseo (tambiem puedo usar Number)
        const shoppingCartItemPrice = parseFloat( shoppingCartItemPriceElement.textContent.replace('€', ''));

        const shoppingCartItemQuantityElement = shoppingCartItems.querySelector('.shoppingCartItemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    // Imprimo el total de los productos en el HTML
    shoppingCartTotal.innerHTML = `${total.toFixed(2)} €`;
}
// elimino elementos y actualizo el valor total
function removeShoppingCartItem(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}
// Defino la cantidad de elementos y actualizo el valor total
function quantityChanged(event){
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
}