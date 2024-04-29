//form
function handleFormSubmit(event){
    event.preventDefault()
   
    const emailInput = document.getElementById("form-email")
     
    
    let isEmailValid = false;
    if(emailInput.value.trim() !== ''){
        isEmailValid = true
    } else{
        isEmailValid = false
    }
    console.log(isEmailValid)


    const isFormValid = isEmailValid

    if(isFormValid){
        const formData = new FormData(event.target)
        console.log(formData);
        fetch('https://formspree.io/f/xqkrwoqy',
        {
           method:"POST",
           body: formData,
           headers: {
            'Accept': 'application/json'
           }

        }
    ).then( response => response.json())
    .then( data => {
        console.log(data);
        if(data.ok){
            alert('Email successful!')
        }
    })
    }else{
        if(isEmailValid  !== true) {
         const emailSpan = document.getElementById('email-span')
         console.log(emailSpan.classList);
         emailSpan.classList.remove('email-error-text')
        
        }

    }
    
}

//rest of apparel

