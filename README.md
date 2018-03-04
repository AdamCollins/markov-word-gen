# Markov Chain Word Generator
A [Markov chain](https://en.wikipedia.org/wiki/Markov_chain) is "a stochastic model describing a sequence of possible events in which the probability of each event depends only on the state attained in the previous event."

This program uses text files to calculate the probability of which character will follow.The Markov chain model is then used to predict strings of characters. 
This should create pronounceable words and in some cases even phrases!


## Example
```bash
node markovwordgen.js example\beyondgoodevil.txt 
```

output:
```
thin won anthe thin and thind the ore the an o an s t and tes thathe the t an the and the the the on o t 
in ant al ond ange and ond athin iste ther an thend t alin then ar then the athe an an the ore t in t 
orere ithe thin ithatof an the thathe itin
```

or

```bash
node markovwordgen.js example\beyondgoodevil.txt 600
```

output:
```
of there athen and thathe t on ther t the oforand anchasthanthere and ing the and in an aren thes the therere 
and an ande and t atore an athere and athend terer there ore and al tis t alingr inthe s tes an as is and than 
than thes ane an ale the an thes the ore ore this the tourestharathe ofon an ond thes athe tofof the athe is 
ange o ofo thind the at ancof thind and athere aly as the the ing there the an on t ond t there at thed t than 
it on tit allly thist the t ore thing of onde t the in athis ine an thinghice the the t there thanthe te thite 
in ore therind anere ther the and the t the ito 

```

Okay... It's not that impressive but it is interesting how quickly it learns common consonant-vowel pairs(q followed by u etc), word length to create nearly all pronouncable words. 
