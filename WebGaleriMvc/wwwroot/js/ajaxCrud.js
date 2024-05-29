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


function Sil(id) {


    $.ajax({
        url: "https://localhost:7234/api/Araba/ArabaSil" + id,
        type: "POST",
        success: function () {
            alert("�lgili araba silindi.");
            location.reload("/Ajax/Index");
        },
        error: function () {
            alert("Hata olu�tu");
        }

    });

}


//function Ekle() {
//    //�nce prop.lar�n textboxlardan al�n�p bir objeye atanmas� gereklidir.
//    //yine esyadaki gibi obje olu�turup onu g�nderelim.

//    let araba = {
//        marka: $("#txtMarka").val(),
//        fiyat: $("#txtFiyat").val(),
//    };
//    $.ajax({
//        url: "https://localhost:7068/Home/Ekle",
//        type: "Post",
//        data: araba,

//        success: function () {
//            alert("Ba�ar�l� bir �ekilde eklenmi�tir");
//            location.reload("Home/Index");
//        },
//        error: function () {
//            alert("Hata olu�tu");
//        },


//    });
//}