// find the button ................when click............call the function cloneField
document.querySelector("#add-time").addEventListener("click", cloneField)

function cloneField()
{
    // const : ensure that the value of variable won't be changed during the process
    // duplicate field
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // se não for true ele vai copiar a div vazia (não vai copiar o interior dela)
    
    // get the fields. Which fields?
     const fields = newFieldContainer.querySelectorAll('input')

    // clean the value of each field
    fields.forEach(function(field)
    {
        // get the current field and clean it
        field.value = ""
        
    }
    )

    // insert in the page. Where?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}