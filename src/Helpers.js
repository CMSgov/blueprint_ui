export const formatCatalogTitle = (catalogTitle) => {
  let titleArray = catalogTitle.split("_");
  if (titleArray.length === 5) {
    let formattedImpactLevel =
      titleArray[4][0].toUpperCase() + titleArray[4].substring(1).toLowerCase();
    return (
      titleArray[0] +
      " " +
      titleArray[1] +
      " " +
      titleArray[2] +
      "." +
      titleArray[3] +
      " (" +
      formattedImpactLevel +
      ")"
    );
  } else {
    return catalogTitle;
  }
};
