document.querySelector('.Sliders').addEventListener('change', e => {
  let val = parseFloat(e.target.value);
  let id = e.target.id;
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    view.eyeBallForm = 0;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    //mouth form
    if (id === 'ParamMouthForm') view.mouthForm = val;
    //mouth openY
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    view.armLA = 0;
    view.armRA = 0;
    view.armLB = 0;
    view.armRB = 0;
    view.handL = 0;
    view.handR = 0;
    if (id === 'ParamHairFront') view.hairFront = val;
    view.hairSide = 0;
    if (id === 'ParamHairBack') view.hairBack = val;
    view.hairFluffy = 0;
    view.shoulderY = 0;
    view.bustX = 0;
    view.bustY = 0;
    view.baseX = 0;
    view.baseY = 0;
  });
});

document.getElementById('paramlist').addEventListener('change', function() {
  document.getElementById("paramName").innerHTML = this.value;

  document.getElementById('minValue').addEventListener('change', function() {
    document.getElementById("paramValue").min = this.value;
    console.log( document.getElementById("paramValue").min );
  });
  document.getElementById('maxValue').addEventListener('change', function() {
    document.getElementById("paramValue").max = this.value;
    document.getElementById("paramValue").value = 0 ;
    if (this.value > 1){
      document.getElementById("paramValue").step = 1 ;
    }
    else{
      document.getElementById("paramValue").step = 0.1;
    }
    console.log( document.getElementById("paramValue").max );
    console.log( document.getElementById("paramValue").step );
  });
});

document.getElementById('standard param').addEventListener('change', function() {
  let val = parseFloat( document.getElementById('paramValue').value );
  let id = document.getElementById("paramName").innerHTML ;
  console.log(id);
  console.log(val);
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamAngleX') view.angleX = val;
    if (id === 'ParamAngleY') view.angleY = val;
    if (id === 'ParamAngleZ') view.angleZ = val;
    if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
    if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
    if (id === 'ParamEyeROpen') view.eyeROpen = val;
    if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
    if (id === 'ParamEyeBallX') view.eyeBallX = val;
    if (id === 'ParamEyeBallY') view.eyeBallY = val;
    view.eyeBallForm = 0;
    if (id === 'ParamBrowLY') view.browLY = val;
    if (id === 'ParamBrowRY') view.browRY = val;
    if (id === 'ParamBrowLX') view.browLX = val;
    if (id === 'ParamBrowRX') view.browRX = val;
    if (id === 'ParamBrowLAngle') view.browLAngle = val;
    if (id === 'ParamBrowRAngle') view.browRAngle = val;
    if (id === 'ParamBrowLForm') view.browLForm = val;
    if (id === 'ParamBrowRForm') view.browRForm = val;
    //mouth form
    if (id === 'ParamMouthForm') view.mouthForm = val;
    //mouth openY
    if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
    if (id === 'ParamCheek') view.cheek = val;
    if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
    if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
    if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
    if (id === 'ParamBreath') view.breath = val;
    view.armLA = 0;
    view.armRA = 0;
    view.armLB = 0;
    view.armRB = 0;
    view.handL = 0;
    view.handR = 0;
    if (id === 'ParamHairFront') view.hairFront = val;
    view.hairSide = 0;
    if (id === 'ParamHairBack') view.hairBack = val;
    view.hairFluffy = 0;
    view.shoulderY = 0;
    view.bustX = 0;
    view.bustY = 0;
    view.baseX = 0;
    view.baseY = 0;
  });
});

document.getElementById('specific paramlist').addEventListener('change', function() {
  document.getElementById("specific paramName").innerHTML = this.value;

  document.getElementById('specific minValue').addEventListener('change', function() {
    document.getElementById("specific paramValue").min = this.value;
    console.log( document.getElementById("specific paramValue").min );
  });
  document.getElementById('specific maxValue').addEventListener('change', function() {
    document.getElementById("specific paramValue").max = this.value;
    document.getElementById("specific paramValue").value = 0 ;
    if (this.value > 1){
      document.getElementById("specific paramValue").step = 1 ;
    }
    else{
      document.getElementById("specific paramValue").step = 0.1;
    }
    console.log( document.getElementById("specific paramValue").max );
    console.log( document.getElementById("specific paramValue").step );
  });
});

document.getElementById('specific param').addEventListener('change', function() {
  let val = parseFloat( document.getElementById('specific paramValue').value );
  let id = document.getElementById("specific paramName").innerHTML ;
  console.log(id);
  console.log(val);
  runModel(view => {
    //先傳到lapp delegate的view的參數
    //綁定參數
    if (id === 'ParamTere') view.ParamTere = val;
    if (id === 'ParamFaceForm') view.ParamFaceForm = val;
    if (id === 'ParamEyeForm') view.ParamEyeForm = val;
    if (id === 'ParamTear') view.ParamTear = val;
    if (id === 'ParamScarf') view.ParamScarf = val;
    if (id === 'ParamBodyUpper') view.ParamBodyUpper = val;
    if (id === 'ParamHandChangeR') view.ParamHandChangeR = val;
    if (id === 'ParamHandAngleR') view.ParamHandAngleR = val;
    if (id === 'ParamHandDhangeL') view.eyeBallY = val;
    if (id === 'ParamHandAngleL') view.ParamHandAngleL = val;
  });
});
