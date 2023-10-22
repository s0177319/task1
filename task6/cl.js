window.addEventListener("DOMContentLoaded", function(){
      const quantityInput = document.getElementById("quantity");
      const serviceTypeInputs = document.querySelectorAll('input[name="serviceType"]');
      const optionsSection = document.getElementById("optionsSection");
      const optionsSelect = document.getElementById("options");
      const propertySection = document.getElementById("propertySection");
      const propertyCheckbox = document.getElementById("property");
      const totalPriceSpan = document.getElementById("totalPrice");
  
      const pricePerUnit = {
          type1: 5500, 
          type2: 8000,
          type3: 13000
      };
  
      const optionPrices = {
          option1: 20000, 
          option2: 10000,
          option3: 0
      };
  
      function calculateTotalPrice() {
          const quantity = parseFloat(quantityInput.value);
          const selectedServiceType = Array.from(serviceTypeInputs).find((input) => input.checked).value;
  
          let total = pricePerUnit[selectedServiceType] * quantity;
          if (selectedServiceType === 'type1'){propertySection.style.display="none";optionsSection.style.display="none";}
  
          if (selectedServiceType === 'type2') { propertySection.style.display="none"; optionsSection.style.display="block";
              const selectedOption = optionsSelect.value;
              total += optionPrices[selectedOption];
          }
  
          if(selectedServiceType=='type3'){ optionsSection.style.display="none";propertySection.style.display="block";
          if(propertyCheckbox.checked) {
              total += 1200*quantity; 
          }}
  
          totalPriceSpan.textContent = total;
      }
  
      quantityInput.addEventListener("input", calculateTotalPrice);
      serviceTypeInputs.forEach(input => input.addEventListener("change", calculateTotalPrice));
      optionsSelect.addEventListener("change", calculateTotalPrice);
      propertyCheckbox.addEventListener("change", calculateTotalPrice);
  });