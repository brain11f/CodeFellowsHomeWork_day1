(function(){
    var syllable = [];
    var arr1 = [];
    var arr2 = [];
    var arrQuestion1 = [0,0,0];
    var arrQuestion2 = [1,0,0];
    var arrQuestion3 = [1,1,0];
    var arrQuestion4 = [1,1,1];
    var arrQuestion5 = [0,1,1];
    var arrQuestion6 = [1,0,1];
    var arrQuestion7 = [0,1,0];
    var arrQuestion8 = [0,0,1];

    function oneOrZero1() {

      answer1 = Math.floor(Math.random()*2);
      answer2 = Math.floor(Math.random()*2);
      answer3 = Math.floor(Math.random()*2);

      console.log("answer: " + answer1);
      console.log("answer: " + answer2);
      console.log("answer: " + answer3);

      arr1.push(answer1);
      arr1.push(answer2);
      arr1.push(answer3);

      console.log(arr1);
    }
    oneOrZero1();

    function oneOrZero2() {

      answer1 = Math.floor(Math.random()*2);
      answer2 = Math.floor(Math.random()*2);
      answer3 = Math.floor(Math.random()*2);

      console.log("answer: " + answer1);
      console.log("answer: " + answer2);
      console.log("answer: " + answer3);

      arr2.push(answer1);
      arr2.push(answer2);
      arr2.push(answer3);

      console.log(arr2);
    }
    oneOrZero2();

      if (arrQuestion1.toString() === arr1.toString() || arrQuestion1.toString() === arr2.toString()){
        console.log('Yaa it worked1!');
        syllable.push('Adrahil');
      } else {
        console.log("wrong1");
      }

      if (arrQuestion2.toString() === arr1.toString() || arrQuestion2.toString() === arr2.toString()){
        console.log('Yaa it worked2!');
        syllable.push('Bob');
      } else {
        console.log("wrong2");
      }

      if (arrQuestion3.toString() === arr1.toString() || arrQuestion3.toString() === arr2.toString()){
        console.log('Yaa it worked3!');
        syllable.push('Clementine');
      } else {
        console.log("wrong3");
      }

      if (arrQuestion4.toString() === arr1.toString() || arrQuestion4.toString() === arr2.toString()){
        console.log('Yaa it worked4!');
        syllable.push('Duke');
      } else {
        console.log("wrong4");
      }

      if (arrQuestion5.toString() === arr1.toString() || arrQuestion5.toString() === arr2.toString()){
        console.log('Yaa it worked5!');
        syllable.push('Beatrix');
      } else {
        console.log("wrong5");
      }

      if (arrQuestion6.toString() === arr1.toString() || arrQuestion6.toString() === arr2.toString()){
        console.log('Yaa it worked6!');
        syllable.push('Piper');
      } else {
        console.log("wrong6");
      }

      if (arrQuestion7.toString() === arr1.toString() || arrQuestion7.toString() === arr2.toString()){
        console.log('Yaa it worked7!');
        syllable.push('Zinnia');
      } else {
        console.log("wrong7");
      }

      if (arrQuestion8.toString() === arr1.toString() || arrQuestion8.toString() === arr2.toString()){
        console.log('Yaa it worked8!');
        syllable.push('Blaire');
      } else {
        console.log("wrong8");
      }
      console.log(syllable)
    debugger;
    function mainContent()
            {
                document.getElementById('main-content').innerHTML = syllable.join(' ');
            };
            mainContent()

})();
