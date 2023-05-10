$(document).ready(() => {
  console.log('document is ready')
  $(".fa-solid.fa-heart").click((e) => {
    e.preventDefault();
    const isFavourited = $(e.target).hasClass("favourited");
    const userID = '1'
    const mapId = $(e.target).data("map-id");
    console.log('mapID:',mapId)
    $(e.target).toggleClass("favourited");
    $.ajax({
      type: "POST",
      url: "/maps",
      data: { mapId: mapId, isFavourited: isFavourited },
    })
      .catch((error) => {
        console.error(error);
      });

  });
});
