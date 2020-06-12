function myFunction() {
    var age;
   age = document.getElementById("para").value;
    if (age>=17){
        alert("You can see R movie alone.");
    }
    else if (age>=13) {
        alert("You can see PG-13 movie alone");
    }
    else if (age>=5){
        alert("You can see a G or PG movie alone");
    }
    else {
        alert("You are young for most movies");
    }
    alert("Thanks for verifying your age");
    }