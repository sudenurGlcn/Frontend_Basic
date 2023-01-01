'use strict'

let randomSayi=Math.trunc(Math.random()*100)+1;
let Score=0;
let HighScore=0;
let counter=0;

document.querySelector('#score').textContent ='Puan: ' +  Score;
document.querySelector('#high-score').textContent ='En Yüksek Puan: ' +  HighScore;

const displayMessage = function (message){
document.querySelector('.message').textContent =message;
};


document.querySelector('.btn-quess').addEventListener('click',function(){
counter++;

const guess=Number(document.querySelector('.quess').value);
console.log(guess,typeof guess);
console.log(randomSayi,typeof randomSayi);
console.log(counter);
if( counter<5)
{
    
    if(!guess){
        displayMessage('Bir sayı giriniz.');
    }
    //sayi doğruysa
    else if(randomSayi === guess)
{
    displayMessage('Tebrikler Bildiniz');
    document.querySelector('.sayi').textContent = randomSayi;
    document.querySelector('.oyun').style.backgroundColor ='#F3C5C5';
    dogru();
    document.querySelector('#yeniSayi').classList.remove('d-none');
}
else if(randomSayi<guess)
{
    displayMessage('daha kücük')
    document.querySelector('.quess').value = '';
}
else if(randomSayi>guess)
{
    displayMessage('daha buyuk')
    document.querySelector('.quess').value = '';
}
    
}
else if(counter==5 && randomSayi !== guess)
{
  document.querySelector('.sayi').textContent = randomSayi;
  displayMessage('oyun bitti');
  document.querySelector('#bastan').classList.remove('d-none');
  

}

});


function dogru(randomSayi)
{
  if(counter==1)
  {
    Score +=30;
  }
  else if(counter==2)
  {
    Score +=25;
  }
  else if(counter==3)
  {
    Score +=20;
  }
  else if(counter==4)
  {
    Score +=15;
  }
  else if(counter==5)
  {
    Score +=10;
  }
  document.querySelector('#score').textContent ='Score:' +  Score;
  if(Score>HighScore)
  {
    HighScore=Score;
    document.querySelector('#high-score').textContent ='En Yüksek Puan: ' +  HighScore;
  }
  

}
document.querySelector('.yeni').addEventListener('click',function(){
    document.querySelector('.sayi').textContent = '?';
    document.querySelector('.quess').value = '';
    document.querySelector('.oyun').style.backgroundColor ='#886F6F';
    randomSayi=Math.trunc(Math.random()*100)+1;
    counter=0;
    console.log(randomSayi);
    document.querySelector('#yeniSayi').classList.add('d-none');
    
});
document.querySelector('.bastan-basla').addEventListener('click',function(){
    Score=0;
    counter=0;
    document.querySelector('#score').textContent ='Puan: ' +  Score;
    document.querySelector('#high-score').textContent ='En Yüksek Puan: ' +  HighScore;
    document.querySelector('.sayi').textContent = '?';
        document.querySelector('.quess').value = '';
        document.querySelector('.oyun').style.backgroundColor ='#886F6F';
        randomSayi=Math.trunc(Math.random()*100)+1;
        document.querySelector('#bastan').classList.add('d-none');
       displayMessage('Tahmin Ediliyor...');
        console.log(randomSayi);
        
        
    });