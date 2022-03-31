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

function randomColour(){
  let colorType = ['\"red\"', '\"purple\"', '\"green\"', "\"blue\"", "\"yellow\"", "\"orange\""];
  num = Math.floor(Math.random()*colorType.length);
  console.log(colorType[num])
  return colorType[num];
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
    titleSection.style.fontFamily = randomFont() // selects random font some fonts dont work :( sad face
    titleSection.style.color = randomColour() // selects random color doesnt work i cba
    summarySection.innerText = summary
    linkSection.innerText = link
    linkSection.href = `${link}`

    console.log(title, summary, link)

    } catch(error) {
      console.error('You have an error:' + error)
    }
  };
 
  form.addEventListener('click', getFeelingLucky)