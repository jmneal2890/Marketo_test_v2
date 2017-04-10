//view more resources button
let viewMore = $(function(){
  let counter = 0;

  $('.view_more').on('click', function(){
    var article = [
      { 'number': '4',
        'photo': 'images/resource_photo_1.png',
        'title': 'Example of first object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '5',
        'photo': 'images/resource_photo_2.png',
        'title': 'Example of new object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '6',
        'photo': 'images/resource_photo_3.png',
        'title': 'And one more for good measure',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, { 'number': '4',
        'photo': 'images/resource_photo_1.png',
        'title': 'Example of first object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '5',
        'photo': 'images/resource_photo_2.png',
        'title': 'Example of new object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '6',
        'photo': 'images/resource_photo_3.png',
        'title': 'And one more for good measure',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, { 'number': '4',
        'photo': 'images/resource_photo_1.png',
        'title': 'Example of first object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '5',
        'photo': 'images/resource_photo_2.png',
        'title': 'Example of new object item',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }, {
        'number': '6',
        'photo': 'images/resource_photo_3.png',
        'title': 'And one more for good measure',
        'body': 'Sem et tortor consequat id porta nibh venenatis cras sed. Vulputate odio ut enim blandid volutpat.'
      }
    ];

    let number = article[counter].number;
    let photo = article[counter].photo;
    let title = article[counter].title;
    let body = article[counter].body;
    let element = "<div data-number='" + number + " class='resource_element'><img src='" + photo + "' alt='#'><div class='resource_text'><h2>" + title + "</h2><div class='download'><h4>45 MINS</h4><img src='icons/download.svg' alt=''></div><p>" + body + "</p></div></div>";
      $('.resource_parent').append(element);
      counter ++;
      console.log(counter);
  });
});

module.export = viewMore
