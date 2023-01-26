
  Webcam.attach( '#camera' );

  //Crie a variável que guarda a camera 
  var guardar = document.getElementById("camera");
        
    Webcam.set({
      //Defina a largura e a altura como 300 e 500 
      width :  400,
      height : 500,
      //Defina o formato da foto como 'png'
      image_format : 'png',
      png_quality:90,
    });
  
    //Crie a função que captura a imagem
  function capturar()
  {
      Webcam.snap(function(data_uri) {
          document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
      });
  }
    console.log('ml5 version:', ml5.version);
  
  //Inicializa o método Image Classifier com MobileNet
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ASCuDPo-g/model.json',modelLoaded);
  
    
    function modelLoaded() {
      console.log('Modelo Carregado!');
    }
        
    function identificar() {
      img = document.getElementById('selfie_image');
      classifier.classify(img, gotResult);
    }
  
  
  // Uma função a ser executada quando obtemos algum erro e os resultados
  function gotResult(error, results) {
    // Exibir erro no console
    if (error) {
    console.log(error);
    } else {
      //mostre no console os results
      console.log(results);
     //Utilize o código que altera o HTML com javascript 
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
  }


