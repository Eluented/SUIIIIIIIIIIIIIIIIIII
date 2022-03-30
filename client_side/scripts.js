$("#form").submit(e => {
  e.preventDefault()

  var query = $(".search").val()
  
  
})

const titleSection = document.getElementById('title')
const summarySection = document.getElementById('summary')
const linkSection = document.getElementById('link')

function randomFont(){
  let fontType = [['\"Arial, sans-serif\";'], ['\"Verdana, sans-serif\"'], ["\"Trebuchet MS', sans-serif\";"], ["\"Fantasy\""]];
  num = Math.floor(Math.random()*fontType.length);
  console.log(fontType[num])
  return fontType[num];
}

function randomFont(){
  let fontType = ['Red Hat Mono', 'Roboto Mono', 'Josefin Sans', "Arial", "Verdana", "Helvetica"];
  num = Math.floor(Math.random()*fontType.length);
  console.log(fontType[num])
  return fontType[num];
}

const getFeelingLucky = async function (e)  {
    e.preventDefault()
    try {
    const res = await fetch('http://localhost:3000/google-random');
    const JSONdata = await res.text();
    const javascriptData = JSON.parse(JSONdata);
    
    let title = javascriptData["search"]
    let summary = javascriptData["summary"]
    let link = javascriptData["Link"]


    titleSection.innerText = title
    titleSection.style.fontFamily = randomFont()
    summarySection.innerText = summary
    linkSection.innerText = link
    linkSection.style.textcon

    console.log(title, summary, link)

    } catch(error) {
      console.error('You have an error:' + error)
    }
  };
 
  form.addEventListener('click', getFeelingLucky)