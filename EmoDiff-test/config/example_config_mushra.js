// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "This is <font color='#FF0000'>necessary</font> with regards to the FBI and CIA",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/a(0).m4a",
            "1": "audio/LJ050-0115-necessary(0)0.wav",
            "2": "audio/LJ050-0115-necessary(0)1.wav",
            "3": "audio/LJ050-0115-necessary(0)2.wav",
            "4": "audio/LJ050-0115-necessary(0)3.wav",
            "5": "audio/LJ050-0115-necessary(0)4.wav"
        }
    },
    {
      "Name": "SCHUSHCU 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/schubert_ref.wav",
            "1": "audio/schubert_1.wav",
            "2": "audio/schubert_2.wav",
            "3": "audio/schubert_3.wav",
            "4": "audio/schubert_anch.wav",
        }
    },
    {
      "Name": "Schubert 3",
      "TestID": "id1_3",
      "Files": {
            "Reference": "audio/schubert_ref.wav",
            "1": "audio/schubert_1.wav",
            "2": "audio/schubert_2.wav",
            "3": "audio/schubert_3.wav",
        }
    },
    //    
    {
       "Name": "Castanets",
       "TestID": "id2_1",
       "Files": {
            "Reference": "audio/castanets_ref.wav",
            "1": "audio/castanets_1.wav",
            "2": "audio/castanets_2.wav",
            "3": "audio/castanets_3.wav",
        }
    },
  ]
}
