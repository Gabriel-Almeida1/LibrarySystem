let titles = []
let authors = []
let years = []
let languages = []
let loop = true

while(loop){
    let type = prompt("1 - Register, 2 - display by author, 3 - display by year, 4 - display by author and year, 5 - display book and its languages, 6 - books in one language, 7 - order by year, and 8 - stop: ")
    if(type === '1'){
        registerBook()
    } else if (type === '2'){
        displayByAuthor(prompt("Insert the author: "))
    } else if (type === '3'){
        displayByYear(prompt("Insert book by year: "))
    } else if (type === '4'){
        displayAuthorByYear(prompt("Author: "), prompt("Year: "))
    } else if (type === '5'){
        displayLanguagesOfTheBook(prompt("Insert title to get its different language versions: "))
    } else if (type === '6'){
        displayBookByLanguages(prompt("Books in one language: "))
    } else if(type === '7'){
        orderedByYear()
        console.log(titles)
        console.log(authors)
        console.log(languages)
        console.log(years)
    } else {
        loop = false
    }
}

console.log("-" * 20)
console.log(titles)
console.log(authors)
console.log(years)
console.log(languages)
console.log("-" * 20)

// check if the author already exist, if yes, just add the book but not the author.
function registerBook(){
    titles.push(prompt("Insert book title: "))
    authors.push(prompt("Insert book author: "))
    years.push(prompt("Insert book year: "))
    languages.push(prompt("Insert book language: "))
    console.log("Book registered.")
}

function displayByAuthor(author){
    let found = false
    for(let i = 0; i < titles.length; i++){
        if(author === authors[i]){
            console.log("- Author's books -")
            console.log("Book: ", titles[i])
            console.log("Year: ", years[i])
            console.log("Language: ", languages[i])
            found = true
        }
    }
    if(!found){
        console.log("Author not registered.")
    }
}

function displayByYear(year){
    let found = false
    for(let i = 0; i < titles.length; i++){
        if(year === years[i]){
            console.log("- Books by year -")
            console.log("Author: ", authors[i])
            console.log("Title: ", titles[i])
            console.log("Language: ", languages[i])
            found = true
        }
    }
    if(!found){
        console.log("Year not registered.")
    }
}

function displayAuthorByYear(author, year){
    let found = false
    let found2 = false
    for(let i = 0; i < authors.length; i++){
        if(author === authors[i]){
            found = true
            for(let j = 0; j < years.length; j++){
                if(year === years[j]){
                    console.log("- Author's book(s) by year -")
                    console.log("Year: ", years[j], "; Book: ", titles[j])
                    found2 = true
                }
            }
        }
    }
    if(!found){
        console.log("Author not registered.")
    } if(!found2){
        console.log("Year not registered.")
    }
}



function displayLanguagesOfTheBook(book){
    let found = false
    for(let i = 0; i < titles.length; i++){
        if(book === titles[i]){
            console.log("Book: ", titles[i], "; Language: ", languages[i])
            found = true
        }
    }
    if(!found){
        console.log("Language not registered.")
    }
}

function displayBookByLanguages(language){
    let found = false
    for(let i = 0; i < languages.length; i++){
        if(language === languages[i]){
            console.log("Language: ", languages[i], "; Titles: ", titles[i])
            found = true
        }
    }
    if(!found){
        console.log("Language not registered.")
    }
}

function orderedByYear(){
    for(let i = 0; i < years.length; i++){
        for(let j = 0; j < years.length - i - 1; j++){
            if(years[j] > years[j + 1]){
                let temp = years[j]
                years[j] = years[j + 1]
                years[j + 1] = temp

                let temp2 = titles[j]
                titles[j] = titles[j + 1]
                titles[j + 1] = temp2

                let temp3 = authors[j]
                authors[j] = authors[j + 1]
                authors[j + 1] = temp3

                let temp4 = languages[j]
                languages[j] = languages[j + 1]
                languages[j + 1] = temp4
            }
        }
    }
}