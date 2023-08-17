// configure the test here
var TestConfig = {
  "TestName": "ABX Demo Test222222",
  "LoopByDefault": true,
  "ShowFileIDs": true,
  "ShowResults": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //    
    {
      "Name": "Rachmaninoff",
      "TestID": "id1",
      "Files": {
        "A": "audio/schubert_ref.wav",
        "B": "audio/LJ050-0115-necessary(0)2.wav",
      }
    },
    //    
    {
      "Name": "Castanets",
      "TestID": "id2",
      "Files": {
        "A": "audio/castanets_ref.wav",
        "B": "audio/castanets_2.wav",
      }
    },
  ]
}
