
$(function(){
  $('#prerequsito').on('click', function() {
    $('#inputextra').append(` <div>
                                <input id="extra"></input>
                                <button class="remover btn btn-outline-danger">Borrar</button>
                              </div>`);                    
  });

  $(document).on('click', '.remover', function(){
    $(this).parents('.idatos').remove();
    
  })
});





