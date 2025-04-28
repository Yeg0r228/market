console.log('Підключено файл скриптів market.js');


fetch('market.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження JSON');
        }
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
       
            let itemElement = document.getElementById(item.id);
            if (itemElement) {
               
                let titleElement = itemElement.querySelector(".item-title");
                if (titleElement) {
                    titleElement.textContent = item.name;
                }

                
                let imgElement = itemElement.querySelector("img");
                if (imgElement) {
                    imgElement.src = item.image; 
                    imgElement.alt = item.name; 
                }
            }
        });
    })
    .catch(error => {
        console.error('Помилка:', error);
    });