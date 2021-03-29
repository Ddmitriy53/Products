$.getJSON("js/reviews.json", function (data) {
  $(".reviews__load-btn").on("click", function () {
    for (let i = 0; i < 2; i++) {
      $("#reviews-group").append(
        `<div class="reviews__item">
          <div class="reviews__heading">
            <span class="reviews__author">` + data.reviews[i].name + `</span>
            <span class="reviews__slash">/</span>
            <span class="reviews__date">` + data.reviews[i].date + `</span>
            <form class="reviews__rating">
              <fieldset class="rating">
                <legend class="rating__caption">Качество товара</legend>
                <div class="rating__group">
                  <input class="rating__star" type="radio" name="product-rating" value="1"
                    aria-label="Ужасно">
                  <input class="rating__star" type="radio" name="product-rating" value="2"
                    aria-label="Сносно">
                  <input class="rating__star" type="radio" name="product-rating" value="3"
                    aria-label="Нормально">
                  <input class="rating__star" type="radio" name="product-rating" value="4" aria-label="Хорошо"
                    checked>
                  <input class="rating__star" type="radio" name="product-rating" value="5"
                    aria-label="Отлично">
                </div>
              </fieldset>
            </form>
          </div>
          <p class="reviews__content">` + data.reviews[i].text + `</p>
        </div>`
      );
    }
  });
});