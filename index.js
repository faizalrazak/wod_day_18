function checkWord(input){
  
  var check = /[asiadevacademy]/g;
  if(check.test(input) == true){
    return "YES";
  }else{
    return "No";
  }  
}
document.write(checkWord("iloveasiadeveloperacademy"));