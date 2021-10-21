//ADD:
//X clean mode --blank screen
//X light/dark mode
//more array features --more counts
//X style side bar better
//add font-align
//add save feature
//X add change background color, make sure you add it to the entire body as well as the teaxt area and app area. 

alert('Hover mouse over right side of screen to see more menu options')


let documentText = document.querySelector("textarea");
let characterNumber = document.querySelector('.character_count_number');
let wordNumber = document.querySelector(".word_count_number");
let sentenceNumber = document.querySelector(".sentence_count_number");
let overusedWords = []
characterNumber.innerText = '0';
wordNumber.innerText = '0';
sentenceNumber.innerText = '0';

const processor = () => {
  //variables
  let words = documentText.value;
  let wordProcessor = words.split(" ");
  //character count
  let characterCount = words.length;
  characterNumber.innerText = characterCount;
  //word count
  let wordCount = wordProcessor.length;
  wordNumber.innerText = wordCount - 1;
  //sentence number
  let sentenceCount = words.split(/[.|!|?]+/g)
  sentenceNumber.innerText = sentenceCount.length - 1;
}

documentText.addEventListener('input', () => {
  processor()
});

//FONT SIZE

let fontOptions = document.querySelectorAll(".font_options .font_size")
let textArea = document.querySelector("textarea")

fontOptions.forEach(font => {
    font.addEventListener('click', () => {
        textArea.style.fontSize = `${font.textContent}pt`
    });
});

//FONT COLOR
let fontColor = document.querySelectorAll(".font_color_options .font_color");

fontColor.forEach(color => {
    color.addEventListener('click', () => {
        textArea.style.color = color.textContent
    })
})


//FONT FAMILY
let fontFamily = document.querySelectorAll(".font_options li");

fontFamily[0].addEventListener('click', () => {
  textArea.style.fontFamily = "sans-serif"
});

fontFamily[1].addEventListener('click', () => {
  textArea.style.fontFamily = "'Courier Prime', monospace"
});

fontFamily[2].addEventListener('click', () => {
  textArea.style.fontFamily = "'Dancing Script', cursive"
});

fontFamily[3].addEventListener('click', () => {
  textArea.style.fontFamily = "'Press Start 2P', cursive"
});


//side bar animation

let rightSide = document.querySelector(".right_side");
let sideBar = document.querySelector(".sidebar");

rightSide.addEventListener('mouseenter', () => {
 sideBar.style.transform = "translateX(0)";
});

rightSide.addEventListener('mouseleave', () => {
 sideBar.style.transform = "translateX(250px)";
});

sideBar.addEventListener('mouseenter', () => {
 sideBar.style.transform = "translateX(0)";
});

sideBar.addEventListener('mouseleave', () => {
 sideBar.style.transform = "translateX(250px)";
});

//sidebar arrow animation

document.querySelector(".sum_one").addEventListener('click', () => {
  document.querySelector(".one").classList.toggle("up")
})

document.querySelector(".sum_two").addEventListener('click', () => {
  document.querySelector(".two").classList.toggle("up")
})

document.querySelector(".sum_three").addEventListener('click', () => {
  document.querySelector(".three").classList.toggle("up")
})

//clear mode

let clearMode = document.querySelector(".clear_mode");
let appTitle = document.querySelector(".app_title");

clearMode.addEventListener('click', () => {
  document.querySelector(".stats").classList.toggle("stats_clear")
  appTitle.classList.toggle("app_title_clear")
});

//light/dark mode

//sidebar, body, #dee4e7
//text color, title,  bottom. 

let statCount = document.querySelectorAll(".stats .count_p");

document.querySelector(".light_mode").addEventListener('click', () => {
  
  document.querySelector(".app_body").classList.toggle("app_body_light");
  document.querySelector(".switch").classList.toggle("switch_off");
  statCount.forEach(item => item.classList.toggle("count_p_light"))
  textArea.classList.toggle("textarea_light");
  appTitle.classList.toggle("app_title_light")
  
});



//colors fly past with a coat of dark