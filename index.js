statement = "I love the Beatles!";
  fact = "He was the last Beatle to learn to drive";
  fact2 = "He was never a vegetarian";
  fact3 = "He was a choir boy and boy scout";
  fact4 = "He hated the sound of his own voice";
   const punct = "!!!"
   newarr = [window.fact, window.fact2, window.factd, window.fact4];
function theBeatlesPlay(musicians, instruments){
  var artistInstrument = [];
  for (let i = 0; i < musicians.length; i++){
    artistInstrument[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return artistInstrument;
  
}
function johnLennonFacts(){
  
 
  
  for (let i = 0; i < window.newarr.length; i++){
    newarr[i] = [newarr[i] + window.punct];
  }
return newarr;
}
function iLoveTheBeatles(n){
 if (n == 7){ 
   var namarray = [];
   
   do {
     for (let i = 1; i < 8; i++){
       namaaray[i] = window.statement;
        }
         --n;
      }
   while (n > 0)
  }
  
  
}