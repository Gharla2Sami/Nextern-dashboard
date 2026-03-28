// document.querySelector('.searchinput').addEventListener('input',searchfilter)

// function searchfilter() {
//     const searchinput = document.querySelector('searchinput');
//     const filter = searchinput.value.toLowerCase();
//     const tableitems = document.querySelectorAll('.searchnames');
//     tableitems.forEach ((item) => {
//         let text = item.textContent;``

//         if (text.toLowerCase().includes(filter.toLowerCase())) {
//             item.style.display = '';


            
//         } else {
//             item.style.display = 'none';
            
//         }
//     } );


    
// }

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".searchinput");
    const tableRows = document.querySelectorAll("tbody tr");

    
    function filterTable() {
        const searchTerm = searchInput.value.toLowerCase();

        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            if (rowText.includes(searchTerm)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    
    searchInput.addEventListener("keyup", filterTable);
});