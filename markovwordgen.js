const fs = require('fs');
const fileName = process.argv[2];
const len = process.argv[3]?process.argv[3]:250;
const showData = process.argv[4]=='-d';

let data = fs.readFileSync(fileName, 'utf8');
let charMap = mapChars(data);

if(showData)
  console.log(charMap);

console.log(generate(charMap, len));
function generate(charMap, len){
  let out = ' ';
  while(out.length<len){
    out+=chooseNext(charMap, out.charAt(out.length-1));
  }
  return out.substring(1);
}

function mapChars(text){
  let charMap = [];
  text = text.toLowerCase();
  let charArray = text.split('');
  for(let i = 0; i<text.length-1; i++){
    let c = charArray[i];
    if(charMap[c]){
      charMap[c].freq++;

      if(charMap[c].next[charArray[i+1]])
        charMap[c].next[charArray[i+1]]++;
      else
        charMap[c].next[charArray[i+1]] = 1

    }else{
      charMap[c] = {freq: 1, next:{}}
        charMap[c].next[charArray[i+1]] = 1;
    }
  }
  charMap = convertToProb(charMap)
  return charMap;
}

function convertToProb(charMap){
  Object.keys(charMap).map((char)=>{
      Object.keys(charMap[char].next).map((n)=>{
        charMap[char].next[n]/= charMap[char].freq;
      });
  });
  return charMap;
}

function chooseNext(charMap, char){
  let nextChars = []
  if(!charMap[char])
    return;
  Object.keys(charMap[char].next).map((c)=>{
    nextChars.push([c, charMap[char].next[c]*Math.random()*1000]);
  });
  nextChars.sort((a,b)=>b[1]-a[1]);
  return nextChars[0][0];
}
