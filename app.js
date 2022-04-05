let obj1 = [
    {
      userId: 1,
      id: 1,
      title: "to make a blinded choice to reject or provident to task",
      body: "because he receives and accepts the accepted consequences that are unencumbered and when he finds annoyance"
    },
    {
      userId: 1,
      id: 2,
      title:"who is to be",
      body: "it is the time of life to pursue the things that are to be blamed for the pain of a blessed one, nor avoid the pleasures of flattery, nor any further annoyance to reject one's debts "
    },
    {
      userId: 1,
      id: 3,
      title: "abuse her as an exercise in who she or she is",
      body: "and who is blinded by the pleasure of the just but by what right to choose, or to the pleasure of the pains or the accusers",
    },
    {
      userId: 1,
      id: 4,
      title: "he is blinded",
      body: "to obtain any pleasure by rejecting one's love and often taking care of things is a fault is obliged to know the thing and the pain itself is right wants the pleasure of things"
    },
    {
      userId: 1,
      id: 5,
      title:"know how to hate",
      body: "to be rejected is to seek pardon but to be rejected or to escape "
    },
    {
      userId: 1,
      id: 6,
      title: "I will open them for my great sorrow",
      body: "so that no one will reject the body of these women who provide us with a softness to follow, and no one will find fault with those accusing us of whatever pains he desires, and the pain of annoyance"
    },
    {
      userId: 1,
      id: 7,
      title: "great but easy",
      body: "the pain may please some people in the life where it is important, for who who, by whom no one, or whom no one will often drive back, will receive them as because they want to follow them, but which they are"
    },
    {
      userId: 1,
      id: 8,
      title: "pain is the actual pain",
      body: "I will open the pain to those who are worthy of being easily accepted by some minds who are able to be able to receive great things when there has never been greater"
    },
    {
      userId: 1,
      id: 9,
      title: "know the right time and the pain of all the accusers",
      body: "I will open the pain to those who are worthy of being easily accepted by some minds who are able to be able to receive great things when there has never been greater"

    },
    {
      userId: 1,
      id: 10,
      title: "choice that's annoying for him",
      body: "in which manner and unencumbered with the duties or great sorrows which must be repudiated, unless there be truly any pardon which but we accuse the error of the truth"
    },
    {
      userId: 2,
      id: 11,
      title: "and it is true for those who praise it",
      body: "the choices we reject, when blinded by the annoyances, will come to pass, not least those who fall into pleasures will be happy in him, or those who do not enjoy pleasures as well as those who fall into the nut of the mind's advantage"
    },
    {
      userId: 2,
      id: 12,
      title: "at some time hate is pain",
      body: "so that's either great for the present because it hates them and it is pleasure and the wise because they love nothing, blinded because that pleasure is the distinction between hatred"
    },
    {
      userId: 2,
      id: 13,
      title: "pain as a tenderness and often pleasure in the mind",
      body: "or may we be called the softness of the pleasure of the advantage with which the pain has been corrupted by rejecting the pleasure of the world"
    },
    {
      userId: 2,
      id: 14,
      title:"pleasure of choosing option",
      body: "flight and accusing us of enduring pains is pleasure and pain, nor do we"
    },
    {
      userId: 2,
      id: 15,
      title:"that will come to pass in time",
      body: "he finds fault with those whom he pleases, he loves even the smallest of duties; pain prevents the discomfort of repudiating"
    },
    {
      userId: 2,
      id: 16,
      title: "they are willing to accept and encounter the pains of the real world through the intense hatred",
      body: "sustains for unless I open them or shuns the pleasures of the nasperier, because any pleasure any one who achieves in others because it is of great softness we accuse them of nothing but pleasure"
    },
    {
      userId: 2,
      id: 17,
      title: "pleasure flees, but troubles provide pleasure",
      body: "those born of pleasure and hate"
    },
    {
      userId: 2,
      id: 18,
      title: "times of pleasure and discomfort",
      body: "it will happen by which one achieves all of the pains, not pain, and it is a repudiation of the right and great pleasure"
    },
    {
      userId: 2,
      id: 19 ,
      title: "to obtain or reject one who pleases him",
      body: "I will open the pain to those who are worthy of being easily accepted by some minds who are able to be able to receive great things when there has never been greater"
    },
    {
      userId: 2,
      id: 20,
      title: "to take up pains to provident",
      body: "that we may follow what we deem to be able to love something similar, but it also loves or shuns the exercise of the obligations of the neo-truth" 
    }
   
  ]




//   var checkValue = obj1.forEach(function(e){
//       console.log(e.id)
//   })



  

function search (){
    var input = document.getElementById("input").value
      var value = obj1.filter(function(x){
      if (x.body.includes(input)){
          return x
      }
      else if(x.id == input){
          return x
      }
      else if (x.title == input){
          return x
      }
      else if (x.userId == input){
          return x
      }
  })
  console.log(value)
}


// DOM pe show karnay ki try kar raha tha per error araha tha :(

    // let result = document.getElementById("result")
// var jsonValue = JSON.stringify(value)
// let showList = document.createElement("p")
// var textNode = document.createTextNode(jsonValue)
// showList.appendChild(textNode)
// result.appendChild(showList)
// document.write(result)

// }








// let inputIds = document.getElementById("myid").innerHTML = `${myIds}`


// let myKeys = Object.keys(obj1)

// console.log(myKeys)

// let myValues = Object.values(obj1)
// console.log(myValues)

// let [id] = obj1
// console.log(id)


// let {id} = myValues;
// console.log(id)

