// Lyrcis challenge
{

  let quote = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, "
  let quote_split = quote.split(' ');
  let quote_replace = [];

   for (let i = 0; i < quote_split.length; i++){ 

       quote_replace.push(quote_split[i].replace(/s|S/gi, '$')); 

   }
       console.log(quote_split);
       console.log(quote_replace);
       console.log(quote_replace.join(" "));

}
