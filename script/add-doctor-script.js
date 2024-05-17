 /*
           ///Filling Datalist
           const dataListscientificFields = document.getElementById("scientific-fields-data");
           const scientificFieldsData = ["Programming", "Network", "C#", "C++", "Web Development", "Security"];
           scientificFieldsData.forEach(function(value) {
           dataListscientificFields.innerHTML += " <option value=" + value + "></option>"
           })
          
           //Add Scientific Field
           const txtScientificFields = document.getElementById("scientific-fields");
           const btnAddScientificField = document.getElementById("add-scientific-field");
           const divAddedFields = document.getElementById("added-fields");
           let addedFieldsArr = [];

           btnAddScientificField.addEventListener("click", function() {
               if (txtScientificFields.value.trim() !== '' && addedFieldsArr.indexOf(txtScientificFields.value.trim()) === -1) {
                   addedFieldsArr.push(txtScientificFields.value.trim());
                   divAddedFields.innerHTML +=
                       "<div class='scientific-field'>" +
                       txtScientificFields.value.trim() +
                       "<div class='delete-scientific-field' onclick='deleteScientificField(this)'>x</div></div>";
                   txtScientificFields.value = "";
               }
           });
           //Delete Scientific Field
           function deleteScientificField(element) {
               element.parentElement.remove();
               addedFieldsArr = addedFieldsArr.filter(function(value) {
                   return value !== element.parentElement.innerText.slice(0, -1);
               });
           }
      */

 //Show and Hide Password
 document.getElementById("showPassword").addEventListener("click", function() {
     var x = document.getElementById("password");
     if (x.type === "password") {
         x.type = "text";
     } else {
         x.type = "password";
     }
 });