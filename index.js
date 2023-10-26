//variavies nome/ demostrativo de pontos e ranking
let heroiUm = "atsugua"
let heroiDois= "jurema"
let heroiTres= "jujuru"

let heroiUmXP= 7002
let heroiDoisXP=5090
let heroiTresXP= 9899

let atsuguaxp= 7002
let juremaxp= 5090
let jujuruxp= 9899

let ranking = ""

//atsuguaxp
//operadores e decisão 
if(atsuguaxp <= 1000){
atsuguaxp=1000} 
else if (atsuguaxp >= 1001 && atsuguaxp <= 1999){
atsuguaxp =2000}
else if(atsuguaxp >= 2001 && atsuguaxp <= 4999){  
	atsuguaxp = 5000}
else if(atsuguaxp >= 6001 && atsuguaxp <= 6999){  
	atsuguaxp = 6000}
else if(atsuguaxp >= 7001 && atsuguaxp <= 7999){  
	atsuguaxp = 7000}
else if(atsuguaxp >= 8001 && atsuguaxp <= 8999){  
	atsuguaxp = 9000 }
else if(atsuguaxp >= 9001 && atsuguaxp <= 9999){  
	atsuguaxp = 10000}

else {atsuguaxp = 11000}

switch (atsuguaxp){
    case 1000:
    ranking="Ferro"
   break
   
    case 2000:
    ranking= "Bronze"
   break
   
   case 5000:
    ranking ="Prata"
   break
   
   case 6000:
    ranking= "Ouro"
   break
   
   case 7000:
   ranking= "Platina"
   break
   
   case 9000:
    ranking="Ascendente"
   break
   
   case 10000:
    ranking="Imortal"
   break
   
   case 11000:
    ranking= "Radiante"
   break
   }

   console.log(" O Herói de nome " + heroiUm + " tem "+ heroiUmXP +" pontos de xp e está no ranking de " + ranking)
//juremaxp
//operadores e decisão 
if(juremaxp <= 1000){
juremaxp=1000} 
else if (juremaxp >= 1001 && juremaxp <= 1999){
juremaxp =2000}
else if(juremaxp >= 2001 && juremaxp <= 4999){  
	juremaxp = 5000}
else if(juremaxp >= 6001 && juremaxp <= 6999){  
	juremaxp = 6000}
else if(juremaxp >= 7001 && juremaxp <= 7999){  
	juremaxp = 7000}
else if(juremaxp >= 8001 && juremaxp <= 8999){  
	juremaxp = 9000 }
else if(juremaxp >= 9001 && juremaxp <= 9999){  
	juremaxp = 10000}

else {juremaxp = 11000}

switch (juremaxp){
    case 1000:
    ranking="Ferro"
   break
   
    case 2000:
    ranking= "Bronze"
   break
   
   case 5000:
    ranking ="Prata"
   break
   
   case 6000:
    ranking= "Ouro"
   break
   
   case 7000:
   ranking= "Platina"
   break
   
   case 9000:
    ranking="Ascendente"
   break
   
   case 10000:
    ranking="Imortal"
   break
   
   case 11000:
    ranking= "Radiante"
   break
   }

console.log(" O Herói de nome " + heroiDois + " tem "+ heroiDoisXP +" pontos de xp e está no ranking de " + ranking)

//jujuruxp
//operadores e decisão 
if(jujuruxp<= 1000){
jujuruxp=1000} 
else if (jujuruxp >= 1001 && jujuruxp <= 1999){
jujuruxp =2000}
else if(jujuruxp >= 2001 && jujuruxp <= 4999){  
	jujuruxp = 5000}
else if(jujuruxp >= 6001 && jujuruxp <= 6999){  
	jujuruxp = 6000}
else if(jujuruxp >= 7001 && jujuruxp <= 7999){  
	jujuruxp = 7000}
else if(jujuruxp >= 8001 && jujuruxp <= 8999){  
	jujuruxp = 9000 }
else if(jujuruxp >= 9001 && jujuruxp <= 9999){  
	jujuruxp = 10000}

else {jujuruxp = 11000}

switch (jujuruxp){
 case 1000:
 ranking="Ferro"
break

 case 2000:
 ranking= "Bronze"
break

case 5000:
 ranking ="Prata"
break

case 6000:
 ranking= "Ouro"
break

case 7000:
ranking= "Platina"
break

case 9000:
 ranking="Ascendente"
break

case 10000:
 ranking="Imortal"
break

case 11000:
 ranking= "Radiante"
break
}

console.log(" O Herói de nome " + heroiTres + " tem "+ heroiTresXP +" pontos de xp e está no ranking de " + ranking)
