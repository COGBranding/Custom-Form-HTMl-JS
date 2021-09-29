    jQuery(function() {
        $('form#selectCarMakerForm').on('change', function() {
            let car = $('#carMaker').val();

            if (car === 'audi') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/audi-transmission-repair/");
            }
            else if (car === 'bmw') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/bmw-transmission-repair/");
            }
            else if (car === 'chrysler') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/chrysler-transmission-repair/");
            }
            else if (car === 'ford') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/ford-transmission-repair/");
            }
            else if (car === 'holden') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/holden-transmission-repair/");
            }
            else if (car === 'honda') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/honda-transmission-repair/");
            }
            else if (car === 'jeep') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/jeep-transmission-repair/");
            }
            else if (car === 'mercedes-benz') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/mercedes-benz-transmission-repair/");
            }
            else if (car === 'peugeot') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/peugeot-transmission-repair/");
            }
            else if (car === 'porsche') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/porsche-transmission-repair/");
            }
            else if (car === 'subaru') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/subaru-transmission-repair/");
            }
            else if (car === 'toyota') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/toyota-transmission-repair/");
            }
            else if (car === 'volkswagen') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/volkswagen-transmission-repair/");
            }
            else if (car === 'volvo') {
                $('form#selectCarMakerForm').attr("action", "/transmission-services/volvo-transmission-repair/");
            }
        })
    })
