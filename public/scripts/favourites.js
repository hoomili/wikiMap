$(document).ready(() => {
  console.log('document is ready')
  const userID = 1;

  $(".fa-solid.fa-heart").click((e) => {
    e.preventDefault();
    const isFavourited = !$(e.target).hasClass("favourited");
    const mapID = $(e.target).data("map-id");
    console.log('mapID:',mapID)
    console.log('userID:', userID)
    console.log('isFavourited:', isFavourited)

    $(e.target).toggleClass("favourited", isFavourited);
    $.post({
      url: "/favourite",
      data: {
        userID: userID,
        mapID: mapID,
        isFavourited: isFavourited
      },
      success: () => {
        if (isFavourited) {
          console.log(`Map ${mapID} added to favorites.`);
        } else {
          console.log(`Map ${mapID} removed from favorites.`);
        }
      },
      error: (xhr, status, error) => {
        console.error('Error adding/removing map from favorites:', error);
      }
    });
  });
});
