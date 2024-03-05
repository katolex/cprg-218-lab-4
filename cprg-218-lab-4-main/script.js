// Button to change as cursor hovers over button. //
const clickme = () => {
    document.getElementById("btn-alert").innerHTML = "CLICK ON ME!";
    }
    const clickhere = () => {
        document.getElementById("btn-alert").innerHTML = "Click Here!";
    }

    document.getElementById("btn-alert").addEventListener("click", function() {
        alert("Surf's Up!!!");
      });

    //   Accordion buttons and drop downs //
      document.querySelectorAll('.accordion-header').forEach(item => {
        item.addEventListener('click', event => {
          const accordionItem = event.target.parentNode;
          accordionItem.classList.toggle('active');
          const accordionContent = accordionItem.querySelector('.accordion-content');
          if (accordionItem.classList.contains('active')) {
            accordionContent.style.display = 'block';
          } else {
            accordionContent.style.display = 'none';
          }
        });
      });

      // Year within the code to automatically update//
      let year = new Date().getFullYear();
      console.log("sanity check: " + year);
      let date = '&copy; studio.of.kp' + year + '. All Rights Reserved.'; 
      document.getElementById("rights").innerHTML = year;