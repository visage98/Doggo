/**
 * Created by deepanshu on 5/7/17.
 */

let dogs=[];

if(localStorage.getItem('dogList'))
{
    dogs=JSON.parse(localStorage.getItem('dogList'));
}
else {
    dogs = [
        {
            "name": "Handsome",
            "breed": "Boxer",
            "gender": "Male",
            "city": "New Delhi",
            "age": "6 Years, 10 Months",
            "image": "images/handsome.jpg",
            "status": "Available"
        },
        {
            "name": "Bundle",
            "breed": "Labrador Retriever",
            "gender": "Female",
            "city": "Bangalore",
            "age": "1 Year, 2 Months",
            "image": "images/bundle.JPG",
            "status": "Available"
        },
        {
            "name": "Leo",
            "breed": "Labrador Retriever",
            "gender": "Male",
            "city": "New Delhi",
            "age": "4 Years, 2 Months",
            "image": "images/leo.jpg",
            "status": "Available"
        },
        {
            "name": "Scooby",
            "breed": "Labrador Retriever",
            "gender": "Male",
            "city": "Mumbai",
            "age": "4 Years, 6 Months",
            "image": "images/scooby.jpg",
            "status": "Available"
        },
        {
            "name": "Google",
            "breed": "Mixed Breed",
            "gender": "Female",
            "city": "New Delhi",
            "age": "2 Years, 11 Months",
            "image": "images/google.jpg",
            "status": "Available"
        },
        {
            "name": "Ginger",
            "breed": "Mixed Breed",
            "gender": "Female",
            "city": "New Delhi",
            "age": "2 Years, 9 Months",
            "image": "images/ginger.jpg",
            "status": "Available"
        },
        {
            "name": "Dabloo",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Chandigarh",
            "age": "3 Years, 2 Months",
            "image": "images/dabloo.jpg",
            "status": "Available"
        },
        {
            "name": "Millman",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Pune",
            "age": "4 Years, 5 Months",
            "image": "images/millman.jpg",
            "status": "Available"
        },
        {
            "name": "Marley",
            "breed": "Beagle",
            "gender": "Female",
            "city": "Noida",
            "age": "2 Years, 7 Months",
            "image": "images/marley.jpg",
            "status": "Available"
        },
        {
            "name": "Lucky",
            "breed": "Indian Spitz",
            "gender": "Male",
            "city": "Goa",
            "age": "4 Years, 10 Months",
            "image": "images/lucky.jpg",
            "status": "Available"
        },
        {
            "name": "Nigela",
            "breed": "Golden Retriever",
            "gender": "Female",
            "city": "Noida",
            "age": "5 Years, 7 Months",
            "image": "images/nigela.JPG",
            "status": "Available"
        },
        {
            "name": "Ladu Loui",
            "breed": "Pomeranian",
            "gender": "Female",
            "city": "Hyderabad",
            "age": "1 Years, 7 Months",
            "image": "images/ladyloui.jpg",
            "status": "Available"
        },
        {
            "name": "Fluff",
            "breed": "Indian Spitz",
            "gender": "Female",
            "city": "New Delhi",
            "age": "2 Years, 7 Months",
            "image": "images/fluff.jpg",
            "status": "Adopted"
        },
        {
            "name": "Tiara",
            "breed": "Indian Spitz",
            "gender": "Female",
            "city": "Mumbai",
            "age": "4 Years, 10 Months",
            "image": "images/tiara.jpg",
            "status": "Adopted"
        },
        {
            "name": "Snowflake",
            "breed": "Indian Spitz",
            "gender": "Male",
            "city": "Pune",
            "age": "7 Years, 1 Months",
            "image": "images/snowflake.jpg",
            "status": "Adopted"
        },
        {
            "name": "Shade",
            "breed": "Indian Spitz",
            "gender": "Male",
            "city": "Bangalore",
            "age": "2 Years, 10 Months",
            "image": "images/shade.jpg",
            "status": "Adopted"
        },
        {
            "name": "Daze",
            "breed": "Indian Spitz",
            "gender": "Male",
            "city": "Noida",
            "age": "6 Years, 9 Months",
            "image": "images/daze.jpg",
            "status": "Adopted"
        },
        {
            "name": "Pomy",
            "breed": "Indian Spitz",
            "gender": "Male",
            "city": "New Delhi",
            "age": "1 Years, 11 Months",
            "image": "images/pomy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Pepsi",
            "breed": "Mixed Breed",
            "gender": "Female",
            "city": "Goa",
            "age": "2 Years, 8 Months",
            "image": "images/pepsi.jpg",
            "status": "Adopted"
        },
        {
            "name": "Maxi",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Dehradun",
            "age": "2 Years, 8 Months",
            "image": "images/maxi.jpg",
            "status": "Adopted"
        },
        {
            "name": "Alex",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Hyderabad",
            "age": "3 Years, 6 Months",
            "image": "images/alex.jpg",
            "status": "Adopted"
        },
        {
            "name": "Jasper",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Goa",
            "age": "2 Years, 9 Months",
            "image": "images/jasper.jpg",
            "status": "Adopted"
        },
        {
            "name": "Tipsy",
            "breed": "Mixed Breed",
            "gender": "Female",
            "city": "Mumbai",
            "age": "3 Years, 3 Months",
            "image": "images/tipsy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Abigail",
            "breed": "Mixed Breed",
            "gender": "Female",
            "city": "Pune",
            "age": "5 Years, 6 Months",
            "image": "images/abigail.jpg",
            "status": "Adopted"
        },
        {
            "name": "Hope",
            "breed": "Mixed Breed",
            "gender": "Male",
            "city": "Mumbai",
            "age": "3 Years, 6 Months",
            "image": "images/hope.jpg",
            "status": "Adopted"
        },
        {
            "name": "Blu",
            "breed": "Labrador Retriever",
            "gender": "Female",
            "city": "Hyderabad",
            "age": "1 Year, 1 Months",
            "image": "images/blu.jpg",
            "status": "Adopted"
        },
        {
            "name": "Fancy",
            "breed": "Labrador Retriever",
            "gender": "Male",
            "city": "Gurgaon",
            "age": "2 Years, 7 Months",
            "image": "images/fancy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Gizmo",
            "breed": "Labrador Retriever",
            "gender": "Male",
            "city": "Bangalore",
            "age": "2 Years, 1 Months",
            "image": "images/gizmo.jpg",
            "status": "Adopted"
        },
        {
            "name": "Rambo",
            "breed": "Labrador Retriever",
            "gender": "Male",
            "city": "Pune",
            "age": "6 Years, 5 Months",
            "image": "images/rambo.jpg",
            "status": "Adopted"
        },
        {
            "name": "Maxy",
            "breed": "Labrador Retriever",
            "gender": "Female",
            "city": "Noida",
            "age": "5 Years, 9 Months",
            "image": "images/maxy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Jessy",
            "breed": "Boxer",
            "gender": "Female",
            "city": "Mumbai",
            "age": "3 Years, 6 Months",
            "image": "images/jessy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Joey",
            "breed": "Boxer",
            "gender": "Male",
            "city": "New Delhi",
            "age": "3 Years, 1 Months",
            "image": "images/joey.jpg",
            "status": "Adopted"
        },
        {
            "name": "Charlie",
            "breed": "German Shephard",
            "gender": "Male",
            "city": "New Delhi",
            "age": "3 Years, 1 Months",
            "image": "images/charlie.jpg",
            "status": "Adopted"
        },
        {
            "name": "Tyson",
            "breed": "German Shephard",
            "gender": "Male",
            "city": "Mumbai",
            "age": "2 Years, 2 Months",
            "image": "images/tyson.jpg",
            "status": "Adopted"
        },
        {
            "name": "Snappy",
            "breed": "German Shephard",
            "gender": "Female",
            "city": "Hyderabad",
            "age": "1 Years, 3 Months",
            "image": "images/snappy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Shera",
            "breed": "German Shephard",
            "gender": "Male",
            "city": "Chandigarh",
            "age": "5 Years, 6 Months",
            "image": "images/shera.jpeg",
            "status": "Adopted"
        },
        {
            "name": "Boozer",
            "breed": "German Shephard",
            "gender": "Male",
            "city": "Gurgaon",
            "age": "7 Years, 5 Months",
            "image": "images/boozer.jpg",
            "status": "Adopted"
        },
        {
            "name": "Tuffy",
            "breed": "St.Bernard",
            "gender": "Male",
            "city": "New Delhi",
            "age": "3 Years, 1 Months",
            "image": "images/tuffy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Macy",
            "breed": "St.Bernard",
            "gender": "Female",
            "city": "Noida",
            "age": "4 Years, 5 Months",
            "image": "images/macy.jpg",
            "status": "Adopted"
        },
        {
            "name": "Jerry",
            "breed": "Pug",
            "gender": "Male",
            "city": "New Delhi",
            "age": "5 Years, 5 Months",
            "image": "images/jerry.jpg",
            "status": "Adopted"
        },
        {
            "name": "Jule",
            "breed": "Pug",
            "gender": "Female",
            "city": "Noida",
            "age": "2 Years, 3 Months",
            "image": "images/jule.JPG",
            "status": "Adopted"
        },
        {
            "name": "Peg",
            "breed": "Pug",
            "gender": "Male",
            "city": "Hyderabad",
            "age": "2 Years, 9 Months",
            "image": "images/peg.jpg",
            "status": "Adopted"
        },
        {
            "name": "Pix",
            "breed": "Pug",
            "gender": "Female",
            "city": "Pune",
            "age": "3 Years, 7 Months",
            "image": "images/pix.jpg",
            "status": "Adopted"
        },
        {
            "name": "Begs",
            "breed": "Beagle",
            "gender": "Female",
            "city": "New Delhi",
            "age": "3 Years, 7 Months",
            "image": "images/begs.JPG",
            "status": "Adopted"
        },
        {
            "name": "Betty",
            "breed": "Beagle",
            "gender": "Male",
            "city": "Goa",
            "age": "3 Years, 3 Months",
            "image": "images/betty.JPG",
            "status": "Adopted"
        },
        {
            "name": "Vicky",
            "breed": "Golden Retriever",
            "gender": "Male",
            "city": "Banglore",
            "age": "5 Years, 7 Months",
            "image": "images/begs.JPG",
            "status": "Adopted"
        },
        {
            "name": "Sugar",
            "breed": "Golden Retriever",
            "gender": "Male",
            "city": "Gurgaon",
            "age": "3 Years, 1 Months",
            "image": "images/betty.JPG",
            "status": "Adopted"
        },
        {
            "name": "Dani",
            "breed": "Jack Terrier",
            "gender": "Female",
            "city": "Gurgaon",
            "age": "3 Years, 2 Months",
            "image": "images/dani.jpg",
            "status": "Adopted"
        },
        {
            "name": "Dots",
            "breed": "Dalmatian",
            "gender": "Male",
            "city": "Banglore",
            "age": "6 Years, 7 Months",
            "image": "images/dots.jpg",
            "status": "Adopted"
        },
        {
            "name": "Dan",
            "breed": "Dobermann",
            "gender": "Male",
            "city": "Chandigarh",
            "age": "5 Years, 8 Months",
            "image": "images/dan.jpg",
            "status": "Adopted"
        },
        {
            "name": "Bolt",
            "breed": "Miniature Pinscher",
            "gender": "Male",
            "city": "Hyderabad",
            "age": "2 Years, 11 Months",
            "image": "images/bolt.JPG",
            "status": "Adopted"
        }
    ];
}
// let dogs=[];
//
// function getDogs() {
//     $.getJSON('../data.json',function (data) {
//         dogs=data;
//     });
// }

$(function () {

    // getDogs();
    // console.log(dogs);

    let breed='All Breed';
    let city='All City';
    let status='All Status';
    list = $('#dog-list');
    go = $('#go');

    makeCards(breed,city,status);

    go.click(function () {
        breed = $('#breed :selected');
        city = $('#city :selected');
        status = $('#status :selected');
        makeCards(breed.text(),city.text(),status.text());
    });


});

function makeCards(breed,city,status){
    list.html("");
    let color='red';

    for(var i in dogs){


        if(dogs[i]['status']=='toAdopt'){
            dogs[i]['status']='Available';
        }

        if(dogs[i]['status']=='Available'){
            color='green';
        }
        else{
            color='red';
        }

        if((breed=='All Breed' || breed==dogs[i]['breed']) && (city=='All City' || city==dogs[i]['city']) && (status=='All Status' || status==dogs[i]['status'])){
            list.append(
                $(`
<div class="col-12 col-md-6 col-lg-4">
            <div class="card" style="border-color:${color}" onclick="adopt(${i})">
                <img class="card-img-top" src=${dogs[i]['image']} alt=${dogs[i]['name']} title=${dogs[i]['name']} height=265rem width="100%">
                <div class="card-block">
                    <h4 class="card-title">Name : ${dogs[i]['name']}</h4>
                    <p class="card-text">Gender : <span>${dogs[i]['gender']}</span></p>
                    <p class="card-text">City : ${dogs[i]['city']}</p>
                    <p class="card-text">Status : <span style="color: ${color}">${dogs[i]['status']}</span></p>
                    <p class="card-text">Age : ${dogs[i]['age']}</p>
                </div>
            </div>
        </div>`)
            );
        }

    }

}


function adopt(index) {
    // var status = event.children[1].children[3].children[0].textContent;
    // var gender = event.children[1].children[1].children[0].textContent;
    var status = dogs[index]['status'];
    var gender = dogs[index]['gender'];

    if(status=="Adopted"){
        if(gender=='Male')
            window.alert("Sorry, He is already adopted. Thanks for showing your interest!");
        else
            window.alert("Sorry, She is already adopted. Thanks for showing your interest!");

    }
    else{
        dogs[index]['status'] = "toAdopt";
       localStorage.setItem('dogList',JSON.stringify(dogs));
        window.location="form.html";
    }

}