const resultsContainer=document.querySelector('#results-container');
const KKDOMEntryManager = {
    KKinputToDom: (arr) => {
        console.log(arr.restaurant);
        arr.forEach(obj => {
            console.log(obj);
            let html = KKHtmlGenerator.RestaurantFactory(obj)
            resultsContainer.innerHTML += html;
        })
    }

}