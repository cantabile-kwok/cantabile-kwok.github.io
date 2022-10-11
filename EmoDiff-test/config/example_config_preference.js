// configure the test here
var TestConfig = {
  "TestName": "Preference Demo Test",
  "LoopByDefault": false,
  "ShowFileIDs": false,
  "ShowResults": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "AudioRoot": "",
  "Testsets": [
    //
    {
      "Name": "AA",
      "TestID": "a0129",
      "Files": {
            "A": "audio/LJ050-0115-necessary(0)1.wav",
            "B": "audio/LJ050-0115-necessary(0)2.wav",
      }
    },
    {
      "Name": "PO",
      "TestID": "a0188",
      "Files": {
            "A": "audio/LJ050-0115-necessary(0)3.wav",
            "B": "audio/LJ050-0115-necessary(0)4.wav",
      }
    },
  ]
}
