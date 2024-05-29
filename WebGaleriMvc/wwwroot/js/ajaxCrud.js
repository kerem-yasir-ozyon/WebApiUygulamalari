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
            alert("Hata oluþtu!");
        }
    });
});


function Sil(id) {


    $.ajax({
        url: "https://localhost:7234/api/Araba/ArabaSil" + id,
        type: "POST",
        success: function () {
            alert("Ýlgili araba silindi.");
            location.reload("/Ajax/Index");
        },
        error: function () {
            alert("Hata oluþtu");
        }

    });

}


//function Ekle() {
//    //önce prop.larýn textboxlardan alýnýp bir objeye atanmasý gereklidir.
//    //yine esyadaki gibi obje oluþturup onu gönderelim.

//    let araba = {
//        marka: $("#txtMarka").val(),
//        fiyat: $("#txtFiyat").val(),
//    };
//    $.ajax({
//        url: "https://localhost:7068/Home/Ekle",
//        type: "Post",
//        data: araba,

//        success: function () {
//            alert("Baþarýlý bir þekilde eklenmiþtir");
//            location.reload("Home/Index");
//        },
//        error: function () {
//            alert("Hata oluþtu");
//        },


//    });
//}