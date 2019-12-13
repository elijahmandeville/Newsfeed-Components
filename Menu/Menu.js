/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//creating a variable and linking it with the appropriate HTML class
const menu = document.querySelector('.header');

//appending the function to the variable I created above ^^^ (actually making use of the function to add content to the site)
menu.appendChild(createMenu(menuItems));

//creating the component
function createMenu(arr) {
  const menu = document.createElement('div');
  const list = document.createElement('ul');
   
  //iterating over the array at the top of the page, creating a list item for each element in the array, adding the appropriate text to each item, and appending that list item to the ul I created above.
  arr.forEach((element) => {
    let listItem = document.createElement('li');
    listItem.textContent = element;
    list.appendChild(listItem);
  });

  //adding that list to the website by appending it to the menu I made at the top
  menu.appendChild(list);

  //assigning the right class to the menu element
  menu.classList.add('menu');

  //creating a variable for the button and assigning it to the HTML tag/class
  const menuButton = document.querySelector('.menu-button');

  //creating an event listener to look for a click and add menu--open when the button is clicked
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });
  //returning the whole menu
  return menu;
}