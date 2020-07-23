$(".claimPatch").click(function(event){
    event.preventDefault();
    const patchId = $(this).attr("data-id")
    console.log(patchId);
    $.ajax({
        url:`/api/patches/${patchId}/claimpatch`,
        method:"PUT",
        data:{
            GardenerId:6
        }
    }).then(data=>{
        console.log(data)
        location.href = `profile/${data.claimedBy}`;
    })
})