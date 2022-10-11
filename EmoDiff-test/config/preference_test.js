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
            "A": "audio/emodiff-0015-Angry_000435.wav",
            "B": "audio/gradtts-0015-Angry_000435.wav",
      }
    }
  ]
}
