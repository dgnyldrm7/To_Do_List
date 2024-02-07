const gorevYazma = document.querySelector('.grv-ekleme-alani');
const gorevEklemeBtn = document.querySelector('.grv-ekleme-butonu');
const gorevListesi = document.querySelector('.gorev-listesi');

gorevListesi.addEventListener('click',gorevsilTamamla);
gorevEklemeBtn.addEventListener('click',gorevekle);

function gorevekle(e)
{
    


    //div oluşturalım.Birebir aynı yapı olmalı.
    const divYapim = document.createElement('div');
    //Oluşturulan divi listeye eklemek için;
    divYapim.classList.add('gorev-item');
    
    
    //li oluşturalım.
    const liYapim = document.createElement('li');
    //Oluşturulan li'yi listeye eklemek için;
    liYapim.classList.add('gorevtanimlama');
    liYapim.innerText = gorevYazma.value;
    //Oluşturulan li'yi dive ekleyelim;
    divYapim.appendChild(liYapim);

    //ul ye oluşturulan divi ekleyelim;
    gorevListesi.appendChild(divYapim);





    //butonları da ekleyelim.
    /* Butonları direkt görev-item'a eklersek 
    iş çözülür */
    //Yani div içine atmalıyız.
    //Önce buton oluşturalım.
    const btn_ony = document.createElement('button');
    const btn_slm = document.createElement('button');
    
    btn_ony.classList.add('btn_onaylandi');
    btn_slm.classList.add('btn_silme');
    btn_ony.classList.add('butonlarım');
    btn_slm.classList.add('butonlarım');

  
    
    btn_ony.innerHTML = '<i class="fa-solid fa-check"></i>';

    btn_slm.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    divYapim.appendChild(btn_ony);
    divYapim.appendChild(btn_slm);



    gorevYazma.value = ""; 

}

function gorevsilTamamla(e)
{

    //Silme Koşulu
    const tiklanilanEleman = e.target;
    if(tiklanilanEleman.classList.contains("btn_silme"))
    {
        const x = document.querySelector('.gorev-listesi');
        const y = document.querySelector('.gorev-item');
        x.removeChild(y);
    }

    //tamamlandi koşulu
    if(tiklanilanEleman.classList.contains("btn_onaylandi"))
    {
        console.log("click");
        tiklanilanEleman.parentElement.classList.toggle("grv-tanimlandi");
        tiklanilanEleman.parentElement.classList.toggle("gorev-item-cerceve");
    }
}




/*Böyle tanımlanabilir.Aslında nesneler bir değişkendir.
*/



//BİRİNCİ YAZIM ŞEKLİ
const okul = {
    yol : "menekse", 
    id  : 45, bosDeger : " "};
//Nesne tanımladık
const my_Object = okul;
const dizimin3Elemani = my_Object.bosDeger = "selam";
console.log(dizimin3Elemani);



//İKİNCİ YAZIM ŞEKLİ
//Boş sınıf oluşturalım.
const ogrenci = {};
ogrenci.firstName = "Dogan";
ogrenci.lastName   = "Yildirim";
ogrenci.age       =  23;
ogrenci.eyeColor  = "brown";
ogrenci.nullValue = " ";
//nesne tanımlayalım.
const my_Object2 = ogrenci;//constructor olmadığı //için parantez kullanma!
console.log(my_Object2.firstName);



//Nesnelere erişmek için şunlar kullanılabilir.
//1.  objectName.property
//2. objectName["property"]
//3.  ?




//Bir nesne yazalım ve for döngüsü ile aralarında gezelim.
const Arabalar =  {
    araba1 : "araba1",
    araba2 : "araba2",
    araba3 : "araba3"
};
//sınıfımıza dışardan değer ekleyelim
Arabalar.araba4 = "araba4" ;


//Nesnemizde bir değer sileceksek;
delete Arabalar.araba1;

//for in yapısı kullanalım.
for(const x in Arabalar)
{
    console.log(Arabalar[x]);
}


//İç içe nesneler ve diziler
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }




  //Create a object and function
  const Kisiler ={
      kisi1 : "Dogan",
      kisi2 : "Yildirim",
      id    : 566,
      fonksiyon : function()
      {
          return this.kisi1 + " isimdir,  " + this.kisi2 + " soyisimdir. ";
      },

      selamVer : function()
      {
          console.log("SelamVer");
      }
  };
  const nesneSon = Kisiler;
  console.log(Kisiler.fonksiyon());


  //Fonksiyonu şöyle de oluşturabiliriz.
 









































