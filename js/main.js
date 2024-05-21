
let name = prompt("Adiniz nedir?")
let myName = document.querySelector("#myName")
//Eğer bilgi girildiyse o bilgi, girilmediyse misafir kullanıcı yazsın
myName.innerHTML = `${name.length > 0 ? name : "Misafir Kullanıcı"}`


function time() {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let days=[
            `Pazar`, 
            `Pazartesi`, 
            `Sali`, 
            `Carsamba`, 
            `Persembe`, 
            `Cuma`, 
            `Cumartesi`,
        ]

        //bu kodla günleri sayı karşılığında alıyormuşuz, o yüzden ekrana yazdırmadan önce dize ile sayısını alıyoruz.
    let dayName=days[dayNumber]
    let clock = document.querySelector("#myClock")
    //eğer sayı 10dan kücükse basına 0 ekledik ki saat 01 şeklinde görünsün.
    clock.innerHTML = `${hour < 10 ? '0' + hour : hour}:${minute}:${second} ${dayName}`;
}

//bu fonksiyonu her sn güncellemek adına bunu eklemeliyiz:
setInterval(time, 1000);