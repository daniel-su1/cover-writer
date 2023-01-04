// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

//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

let textoutput = document.querySelector('#output');
let job = document.querySelector('#job');
let resume = document.querySelector('#resume');
let submit = document.querySelector('#submit');
let applicantName = document.querySelector('#name');
let title = document.querySelector('#title');
let spinner = document.querySelector('#spinner');
let prompt;


submit.addEventListener('click', () => {
  resumeText = resume.value.replace(/\n/g, ' ');
  jobText = job.value.replace(/\n/g, ' ');
  resumeText = resumeText.replace(/\W/g, ' ')
  jobText = jobText.replace(/\W/g, ' ')
  prompt = `{"model": "text-davinci-003", "prompt": "Write a cover letter for ${applicantName.value} whose resume is below: ${resumeText} who is applying for the ${title.value} position listed below: ${jobText}", "temperature": 0.3, "max_tokens": 2000}`
  console.log(prompt);
  submit.setAttribute('disabled', true);
  spinner.style.opacity = 1;
  getData();
})


function searchString(str){
  let i=0;
  while(i<str.length){
    if(str[i]==='D' && str[i+=1]==='e' && str[i+=1]==='a' && str[i+=1]==='r'){
      break;
    }
    else{
      i++;
    }
  }
  return i-3;
}


let output;

function update() {
  textoutput.value = output;
  spinner.style.opacity = 0;
  submit.removeAttribute('disabled');
}

function getData() {
let test = fetch("https://api.openai.com/v1/completions", {
    body: prompt,
    headers: {
      Authorization: "Bearer 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",
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    }).then(function (data) {
      console.log(data);
      output = data.choices[0].text.slice(searchString(data.choices[0].text));
      update();
      console.log(output);
    })
    .catch(function (error) {
      update();
      console.log(error.message);
    });
}

