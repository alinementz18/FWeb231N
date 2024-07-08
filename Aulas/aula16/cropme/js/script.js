$(document).ready(function() {
    var $cropContainer = $('#image-crop-container').cropme({
        container: {
            width: '100%',
            height: '300px'
        },
        viewport: {
            width: 250,
            height: 250,
            type: 'circle'
        },
        zoom: {
            enabled: true,
            min: 0.5,
            max: 2
        }
    });
  
    $('#upload-image').on('change', function(event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $cropContainer.cropme('bind', {
                    url: e.target.result
                });
            };
            reader.readAsDataURL(input.files[0]);
        }
    });
  
    $('#crop-button').on('click', function() {
        $cropContainer.cropme('crop').then(function(output) {
            $('#cropped-result').html('<img src="' + output + '" alt="Cropped Image">');
        }).catch(function(err) {
            console.error('Erro ao cortar a imagem:', err);
        });
    });
  });
  