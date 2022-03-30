$("#form").submit(e => {
  e.preventDefault()

  var query = $(".search").val()
  
  
})

const titleSection = document.getElementById('title')
const summarySection = document.getElementById('summary')
const linkSection = document.getElementById('link')

const getFeelingLucky = async function (e)  {
    e.preventDefault()
    try {
    const res = await fetch('http://localhost:3000/google-random');
    const JSONdata = await res.text();
    const javascriptData = JSON.parse(JSONdata)
    let title = javascriptData["search"]
    let summary = javascriptData["summary"]
    let link = javascriptData["Link"]

    titleSection.innerText = title;
    summarySection.innerText = summary;
    linkSection.innerText = link;

    console.log(title, summary, link)
    

    } catch(error) {
      console.error('You have an error:' + error)
    }
  };
 
  form.addEventListener('click', getFeelingLucky)