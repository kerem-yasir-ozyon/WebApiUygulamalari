$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7234/api/Araba/ArabaListesi",
        type: "get",
        datatype: "JSON",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $.each(data, function (i, araba) {
                let arabaSatiri = "<tr>" +
                    "<td>" + araba.id + "</td>" +
                    "<td>" + araba.marka + "</td>" +
                    "<td>" + araba.renk + "</td>" +

                    "<td> <button class='btn btn-secondary' id='guncelle" + i + "' onclick='guncelle(" + araba.id + ")'> Guncelle </button> " +

                    " <button class='btn btn-danger' id='sil" + i + "' onclick='Sil(" + araba.id + ")'> Sil </button> "+
                    "</td> </tr>";
                $("#tblArabalar tbody").append(arabaSatiri);
            });
        },
        error: function () {
            alert("Hata olu�tu!");
        }
    });
});

function Ekle() {

    let araba = {
        marka: $("#txtMarka").val(),
        renk: $("#txtRenk").val()
    };

    $.ajax(

        {
            url: "https://localhost:7234/api/Araba/ArabaEkle",
            type: "post",
            data: JSON.stringify(araba),
            headers: {
                "Content-Type": "application/json"
            },


            success: function (data) {


                if (araba.marka == "" || araba.renk == "") {
                    alert("L�tfen alanlar� doldurunuz");
                    location.reload("Ajax/Index");
                }
                else {
                    alert("Merhaba");
                    alert("Ba�ar�yla eklenmi�tir");

                    location.reload("Ajax/Index");
                }

            },

            error: function () {

                alert("Hata olu�tu!");
            }


        });



}

//function Sil(id) {


//    $.ajax({
//        url: "https://localhost:7234/api/Araba/ArabaSil" + id,
//        type: "POST",
//        success: function () {
//            alert("�lgili araba silindi.");
//            location.reload("/Ajax/Index");
//        },
//        error: function () {
//            alert("Hata olu�tu");
//        }

//    });

//}




//function VeriAktar(id) {

//    $.ajax
//        ({

//            url: "https://localhost:7106/Home/IdyeGoreGetir?id=" + id,
//            type: "Get",
//            datatype: "JSON",
//            contentType: "application/json;charset=utf-8",

//            success: function (data) {
//                $("#txtId").val(data.id);
//                $("#txtGuncelMarka").val(data.marka);
//                $("#txtGuncelFiyat").val(data.fiyat);
//                $("#chcGuncelIk�nc�El").prop("checked", data.ikinciEl);
//            },
//            error: function () {
//                alert("Hata Olustuuuuuu.");
//            }

//        });

//}

//function Guncelle(id) {

//    let guncelOzellikleriTemsilEden =
//    {
//        marka: $("#txtGuncelMarka").val(),
//        fiyat: $("#txtGuncelFiyat").val(),
//        ikinciEl: $("#chcGuncelIkinciEl").is(":checked") //checlbox i�in
//    };

//    $.ajax
//        ({

//            url: "https://localhost:7106/Home/Guncelle/" + id,
//            type: "Post",
//            data: guncelOzellikleriTemsilEden,

//            success: function () {
//                alert("Ba�ar�l� bir �ekilde guncellenm�st�r.");
//                location.reload("/Home/Privacy");
//            },
//            error: function () {
//                alert("Hata olustu")
//            }

//        });

//}
