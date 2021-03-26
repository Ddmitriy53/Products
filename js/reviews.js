jQuery(function ($) {

  $(document).on('click', '.reviews__load-btn', function () {
    $(".reviews").append($.getJSON(url, function (data) {
      let review = `
      <div class="reviews__item">
      <div class="reviews__heading">
        <span class="reviews__author">` + data.name + `</span>
        <span class="reviews__slash">/</span>
        <span class="reviews__date">` + data.date + `</span>
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
      <p class="reviews__content">` + data.text + `</p>
    </div>`;
    }));
  });
});