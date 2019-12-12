const home = function()
{
    let current = 'home';
    let tab = document.querySelector('.tab-content');
    let aHome = document.querySelector('#home');
    let aMenu = document.querySelector('#menu');
    let aContact = document.querySelector('#contact');
    
    aHome.addEventListener('click', function() {
        if(current != 'home')
        {
            console.log("sdf")
            current = 'home';
            tab.innerHTML = '';

            let h1 = document.createElement('h1');
            h1.textContent = "Food so good, you'll never want to stop.";
            h1.classList.add('desc')
            tab.appendChild(h1);
        }
    })

    aMenu.addEventListener('click', function() {
        
        if(current != 'menu')
        {
            tab.innerHTML = '';
            current = 'menu';
            let h2 = document.createElement('h2');
            h2.textContent = "WHAT WE OFFER";
            tab.appendChild(h2);

            let menuDisplay = document.createElement('div');
            menuDisplay.classList.add('menu');
            tab.appendChild(menuDisplay);
        
            let image1 = document.createElement('div');
            image1.classList.add('menu-item1');
            menuDisplay.appendChild(image1);
            let dish = document.createElement('p');
            dish.textContent = "Double Patty Chicken Burger";
            dish.classList.add("dish");
            menuDisplay.appendChild(dish)
        
            let image2 = document.createElement('div');
            image2.classList.add('menu-item1');
            menuDisplay.appendChild(image2);
            let dish2 = document.createElement('p');
            dish2.textContent = "Beef Burger";
            dish2.classList.add("dish");
            menuDisplay.appendChild(dish2);
        }
    })

    aContact.addEventListener('click', function(){
        if(current != 'contact')
        {
            current = 'contact';
            tab.innerHTML = '';
            let form = document.createElement('form');
            let name = document.createElement('input');
            name.placeholder = 'Name';
            let email = document.createElement('input');
            email.placeholder = 'Email';
            let phone = document.createElement('input');
            phone.placeholder = "Phone Number";
            let h2 = document.createElement('h2');
            h2.textContent = "Book Now";
            let submitButton = document.createElement('button');
            submitButton.textContent = "Submit";
            submitButton.classList.add("button");

            form.appendChild(h2);
            form.appendChild(name);
            form.appendChild(email);
            form.appendChild(phone);
            form.appendChild(submitButton);
            tab.appendChild(form);

        }
    })
    
}

export { home }