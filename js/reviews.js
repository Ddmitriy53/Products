const reviews = $("#reviews-group"),
      reviewsBtn = $(".reviews__load-btn");

reviewsBtn.on("click", function () {
  $.getJSON("js/reviews.json", function (data) {
    for (i = 0; i < 2; i++) {
      const loadedReview = $(".reviews__item:first").clone();
      loadedReview.find('.reviews__author').html(data.reviews[i].name);
      loadedReview.find('.reviews__date').html(data.reviews[i].date);
      loadedReview.find('.reviews__content').html(data.reviews[i].text);
      reviews.append(loadedReview);
    }
  });
});