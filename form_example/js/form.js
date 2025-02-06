document.addEventListener("DOMContentLoaded", () => {

    function clearFields() {
        document.querySelector('input[name="fname"]').value = "";
        document.querySelector('input[name="lname"]').value = "";
        document.querySelector('input[name="email"]').value = "";
    }
    
    document.querySelector("#user-btn").addEventListener("click", (e) => {
        // Prevent default behavior of form submission
        e.preventDefault();
       
        // Get form field values
        const fname = document.querySelector('input[name="fname"]').value;
        const lname = document.querySelector('input[name="lname"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const hiddenField = document.querySelector('input[name="mysecret"]').value;

        // Display form field values
        console.log(`fname: ${fname}`);
        console.log(`lname: ${lname}`);
        console.log(`email: ${email}`);
        console.log(`mysecret: ${hiddenField}`);

        // Clear form field values after form submission
        clearFields()
    });

    document.querySelector("#class-btn").addEventListener("click", (e) => {
        // Prevent default behavior of form submission
        e.preventDefault();

        document.querySelectorAll('input[name="class-year"]').forEach(year => {
            if (year.checked) {
                console.log(`class-year: ${year.value}`); 
            };  
        });
    });

    document.querySelector("#piano-btn").addEventListener("click", (e) => {
        e.preventDefault();
        
        // Get selected piano type option value
        const selectedPianos = document.querySelector('select[name="pianoTypes"]');
        const value = selectedPianos.options[selectedPianos.selectedIndex].value;
        console.log(`Selected option value is: ${value}`)   
    });

    console.log("DOM Content Loaded");
})