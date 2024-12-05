//declaring variables
const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');
result.style.display = "none";

//checking palindrome
const palCheck = ()=>{

  //changing text to lower case
  const text = input.value.toLowerCase();
  //removing space and special characters
  const cleanStr = (str)=>{
    return str.replace(/[^a-zA-Z0-9]/g,'')
  }
  const cleanText = cleanStr(text);
  const value = cleanText;

  //reversing the text
  const rev = (str)=>{
    return str.split('').reverse().join('');
  }
  const revText = rev(cleanText);
  console.log(rev(cleanText))


  if(input.value == ''){
    alert("Please input a value");
    
  }
  else if(value === revText){
    result.style.display = 'block';
    result.innerText = `${input.value} is a palindrome`;
  }
  else{
    result.innerText = `${input.value} is not a palindrome`
  }
}
