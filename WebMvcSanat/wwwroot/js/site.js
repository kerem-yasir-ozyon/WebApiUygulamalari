$(document).ready(function () {
    $.ajax({
        url: "https://localhost:7002/api/Tablo/TabloListesi",
        type: "get",
        datatype: "JSON",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $.each(data, function (i, tablo) {
                let tabloSatiri = "<tr>" +
                    "<td>" + tablo.id + "</td>" +
                    "<td>" + tablo.ressam + "</td>" +
                    "<td>" + tablo.yapilmaTarihi + "</td>" +

                    "<td> <button class='btn btn-secondary' id='guncelle" + i + "' onclick='guncelle(" + tablo.id + ")'> Guncelle </button> " +

                    " <button class='btn btn-danger' id='sil" + i + "' onclick='Sil(" + tablo.id + ")'> Sil </button> " +
                    "</td> </tr>";
                $("#tblTablolar tbody").append(tabloSatiri);
            });
        },
        error: function () {
            alert("Hata olu�tu!");
        }
    });
});

function Ekle() {

    let tablo = {
        ressam: $("#txtRessam").val(),
        yapilmaTarihi: $("#txtyapilmaTarihi").val()
    };

    $.ajax(

        {
            url: "https://localhost:7002/api/Tablo/TabloEkle",
            type: "post",
            data: JSON.stringify(tablo),
            headers: {
                "Content-Type": "application/json"
            },


            success: function (data) {


                if (tablo.ressam == "" || tablo.yapilmaTarihi == "") {
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

function Sil(id) {


    $.ajax({
        url: "https://localhost:7002/api/Tablo/TabloSil?id=" + id,
        type: "delete",

        success: function () {
            alert("�lgili tablo silindi.");
            location.reload("Ajax/Index");
        },
        error: function () {
            alert("Hata olu�tu");
        }

    });

}

//function Guncelle() {

//    let id = $("#txtId").val();


//    let guncelOzellikleriTemsilEden = {
//        marka: $("#txtGuncelMarka").val(),
//        renk: $("#txtGuncelRenk").val()
//    };

//    $.ajax({
//        url: "https://localhost:7002/api/Tablo/TabloGuncelle/" + id,
//        type: "Put",
//        data: JSON.stringify(guncelOzellikleriTemsilEden),
//        contentType: "application/json",
//        success: function () {
//            alert("Başarılı bir şekilde güncellenmiştir");
//            $('#guncellemeModal').modal('hide');
//            // location.reload("AjaxCrud/Index");
//            location.reload();
//        },
//        error: function (xhr, status, error) {
//            console.error("Güncelleme hatası:", xhr.responseText);
//            alert("Güncelleme işlemi sırasında bir hata oluştu. Konsola bakınız.");
//        }
//    });
//}



//function VeriAktar(id) {
//    $.ajax({
//        url: "https://localhost:7002/api/Tablo/IdYeGoreGetir?id=" + id,
//        type: "Get",
//        dataType: "json",
//        contentType: "application/json;charset=utf-8",
//        success: function (data) {
//            $("#txtId").val(data.id);
//            $("#txtGuncelMarka").val(data.marka);
//            $("#txtGuncelRenk").val(data.renk);
//            $('#guncellemeModal').modal('show');
//        },
//        error: function () {
//            alert("Hata oluştu");
//        }
//    });
//}



