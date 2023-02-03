function show() {
  // Seleciona um elemeto da página HTML somente com o seu id

  const contactlist = document.getElementById('contact-list')
  console.log(contactlist)

  // Seleciona vários elemetos de uma vez só através da sua tag

 const listElements = document.getElementsByTagName('li')
 console.log(listElements)

  // Seleciona os elementos pela sua classe

  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  //Retorna os elementos que tem o nome chamado 

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)


  //Cria uma node list e retorna no formato de lista com as especificações

  const contacts = document.querySelectorAll('#contact-list > li > label ')
  console.log(contacts) 
  
  //Ele obtém o primeiro elemento e irá parar e apresentar o resultado

  const firstContact = document.querySelector('#contact-list > li > label')
  console.log(firstContact)
}