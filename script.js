//fixed header


window.onscroll = function()
{
    const docScrollTop = document.documentElement.scrollTop;

    if(window.innerWidth > 991)
    {
        if(docScrollTop > 100)
        {
            document.querySelector('header').classList.add("fixed")
            
        }
        else
        {
            document.querySelector('header').classList.remove("fixed")

        }
    }

    
}



//nav bar links


const navbar = document.querySelector('.navbar');
 let a = navbar.querySelectorAll('a');
    
 a.forEach(function(item)
 {
     item.addEventListener('click',function()
         {    
             for(let i=0;i<a.length;i++)
             {
                 a[i].classList.remove('active')
             }
             this.classList.add('active')
     document.querySelector('.navbar').classList.toggle('show');

         }
     )
 })
 


 //hamburger
 const hamBurger = document.querySelector('.ham-burger');

 hamBurger.addEventListener('click',function()
 {
     document.querySelector('.navbar').classList.toggle('show');
 })