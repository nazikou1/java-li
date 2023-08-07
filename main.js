fetch('https://6392e59c11ed187986a3e9ce.mockapi.io/pizzas') 
.then(response => response.json()) 
.then(json => room.innerHTML = 
     json.map(obj => 
    `<div class="pizza"> 
     <img src="${obj.imageUrl}" alt=""> 
      <h1>${obj.title}</h1> 
      <p>${obj.price}</P> 
    </div>`).join("") 
    )