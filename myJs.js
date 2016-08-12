
$(document).ready(function() {
  function getQuote() {
    var quotes = ["Some people confuse acceptance with apathy, but there's all the difference in the world. Apathy fails to distinguish between what can and what cannot be helped; acceptance makes that distinction. Apathy paralyzes the will-to-action; acceptance frees it by relieving it of impossible burdens. ",
      "The proverb warns that, 'You should not bite the hand that feeds you.' But maybe you should, if it prevents you from feeding yourself. ",
      "Be frank and explicit. That is the right line to take when you wish to conceal your own mind and to confuse the minds of others.",
      "It's my rule never to lose my temper until it would be detrimental to keep it.",
      "Never go to bed mad. Stay up and fight.",
      "Don't get mad, get even.",
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left, and could say, 'I used everything you gave me.'"
    ];
    var author = ["- Arthur Gordon ",
      "- Thomas Szaz ",
      "- Benjamin Disraeli ",
      "- Sean O' Casey",
      "- Phyllis Diller",
      "- Robert F. Kennedy",
      "- Erma Bomdeck"
    ];

    var randomNumber = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNumber];
    var randomAuthor = author[randomNumber];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

  }
  $(".btn").on("click", function() {
    getQuote();
  });
});
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


