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