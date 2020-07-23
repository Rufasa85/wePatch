$(".deletePatchBtn").click(function(event){
    event.preventDefault();
    const patchId = $(this).attr("data-id")
    $.ajax({
        url:`/api/patches/${patchId}`,
        method:"DELETE"
    }).then(data=>{
        alert("DELETED!")
        location.reload();
    })
})

$("#addPatchForm").submit(function(event){
    event.preventDefault();
    const patchObj = {
        lat:parseFloat($("#latInput").val()),
        lng:parseFloat($("#lngInput").val()),
        area:parseFloat($("#areaInput").val()),
        UserId:parseInt($("#userId").val())
    }
    $.ajax({
        url:"/api/patches",
        method:"POST",
        data: patchObj
    }).then(data=>{
        location.reload();
    })
})